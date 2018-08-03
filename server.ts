import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import crypto from "crypto";

const { hookId, authToken, protocol, session, user, port, user_name } = process.env;
const travisPublicKeyRequest = axios("https://api.travis-ci.org/config").then(response => response.data.config.notifications.webhook.public_key);

const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/travis", async function(req, res) {

  // verify
  const travisSignature = Buffer.from(<string>req.headers.signature, "base64");
  const payload = req.body.payload;
  const verifier = crypto.createVerify("sha1");
  verifier.update(payload);
  if (!verifier.verify(await travisPublicKeyRequest, travisSignature)) {
    return res.status(403).end();
  }

  // parse
  const data: Travis = JSON.parse(payload);
  console.log(payload, data);
  const repository_slug = `${data.repository.owner_name}/${data.repository.name}`;
  const build_number = data.number;
  const branch = data.branch;
  const commit = data.commit.slice(0, 8);
  const author = data.author_name;
  const message = data.message;
  const compare_url = data.compare_url;
  const build_url = data.build_url;

  const body = `${repository_slug}#${build_number} (${branch} - ${commit} : ${author}): ${message}
Change view : ${compare_url}
Build details : ${build_url}`;

  // send
  const result = await axios(`https://openhook.ainou.asia/ainou/${hookId}/${authToken}`, {
    method: "POST", data: {
      message: { type: "alternative", text: { body } },
      recipient: { protocol, session, user, port, user_name }
    }
  });

  res.header(result.headers);
  res.status(result.status);
  res.send(result.data);
});

app.listen(3000);