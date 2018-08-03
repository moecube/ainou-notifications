interface Travis {
    "id": 411619175,
    "number": "245",
    "config": {
        "os": "linux",
        "dist": "trusty",
        "sudo": false,
        "cache": {
            "pip": true,
            "directories": [
                "vendor/bundle",
                "node_modules"
                ]
        },
        "group": "stable",
        "deploy": {
            "app": "docs-travis-ci-com",
            "true": {
                "branch": [
                    "master"
                    ]
            },
            "api_key": {
                "secure": "hylw2GIHMvZKOKX3uPSaLEzVrUGEA9mzGEA0s4zK37W9HJCTnvAcmgRCwOkRuC4L7R4Zshdh/CGORNnBBgh1xx5JGYwkdnqtjHuUQmWEXCusrIURu/iEBNSsZZEPK7zBuwqMHj2yRm64JfbTDJsku3xdoA5Z8XJG5AMJGKLFgUQ="
            },
            "provider": "heroku",
            "skip_cleanup": true
        },
        "python": [
            "3.5.2"
            ],
        "script": [
            "bundle exec rake test"
            ],
        ".result": "configured",
        "install": [
            "rvm use 2.3.1 --install",
            "bundle install --deployment"
            ],
        "branches": {
            "only": [
                "master"
                ]
        },
        "language": "python",
        "global_env": [
            "PATH=$HOME/.local/user/bin:$PATH"
            ],
        "notifications": {
            "slack": {
                "rooms": {
                    "secure": "LPNgf0Ra6Vu6I7XuK7tcnyFWJg+becx1RfAR35feWK81sru8TyuldQIt7uAKMA8tqFTP8j1Af7iz7UDokbCCfDNCX1GxdAWgXs+UKpwhO89nsidHAsCkW2lWSEM0E3xtOJDyNFoauiHxBKGKUsApJTnf39H+EW9tWrqN5W2sZg8="
                },
                "on_success": "never"
            },
            "webhooks": "https://docs.travis-ci.com/update_webhook_payload_doc"
        }
    },
    "type": "cron",
    "state": "failed",
    "status": 1,
    "result": 1,
    "status_message": "Still Failing",
    "result_message": "Still Failing",
    "started_at": "2018-08-03T07:23:40Z",
    "finished_at": "2018-08-03T07:26:15Z",
    "duration": 155,
    "build_url": "https://travis-ci.org/lapolinar/docs-travis-ci-com/builds/411619175",
    "commit_id": 123603161,
    "commit": "a1012d553e7b2aec886b8c84a24349e31526205f",
    "base_commit": "a1012d553e7b2aec886b8c84a24349e31526205f",
    "head_commit": null,
    "branch": "master",
    "message": "Merge pull request #1529 from janczer/fixed_typo_public_privet_repo\n\nFixed typo in doc",
    "compare_url": "https://github.com/lapolinar/docs-travis-ci-com/compare/54c708727ff645eef0eabb16e736adb447adfcf5...a1012d553e7b2aec886b8c84a24349e31526205f",
    "committed_at": "2017-10-27T18:37:07Z",
    "author_name": "Hiro Asari",
    "author_email": "asari.ruby@gmail.com",
    "committer_name": "GitHub",
    "committer_email": "noreply@github.com",
    "pull_request": false,
    "pull_request_number": null,
    "pull_request_title": null,
    "tag": null,
    "repository": {
        "id": 15948437,
        "name": "docs-travis-ci-com",
        "owner_name": "lapolinar",
        "url": null
    },
    "matrix": [
        {
            "id": 411619176,
            "repository_id": 15948437,
            "parent_id": 411619175,
            "number": "245.1",
            "state": "failed",
            "config": {
                "os": "linux",
                "dist": "trusty",
                "sudo": false,
                "cache": {
                    "pip": true,
                    "directories": [
                        "vendor/bundle",
                        "node_modules"
                        ]
                },
                "group": "stable",
                "addons": {
                    "deploy": {
                        "app": "docs-travis-ci-com",
                        "true": {
                            "branch": [
                                "master"
                                ]
                        },
                        "api_key": {
                            "secure": "hylw2GIHMvZKOKX3uPSaLEzVrUGEA9mzGEA0s4zK37W9HJCTnvAcmgRCwOkRuC4L7R4Zshdh/CGORNnBBgh1xx5JGYwkdnqtjHuUQmWEXCusrIURu/iEBNSsZZEPK7zBuwqMHj2yRm64JfbTDJsku3xdoA5Z8XJG5AMJGKLFgUQ="
                        },
                        "provider": "heroku",
                        "skip_cleanup": true
                    }
                },
                "python": "3.5.2",
                "script": [
                    "bundle exec rake test"
                    ],
                ".result": "configured",
                "install": [
                    "rvm use 2.3.1 --install",
                    "bundle install --deployment"
                    ],
                "branches": {
                    "only": [
                        "master"
                        ]
                },
                "language": "python",
                "global_env": [
                    "PATH=$HOME/.local/user/bin:$PATH"
                    ],
                "notifications": {
                    "slack": {
                        "rooms": {
                            "secure": "LPNgf0Ra6Vu6I7XuK7tcnyFWJg+becx1RfAR35feWK81sru8TyuldQIt7uAKMA8tqFTP8j1Af7iz7UDokbCCfDNCX1GxdAWgXs+UKpwhO89nsidHAsCkW2lWSEM0E3xtOJDyNFoauiHxBKGKUsApJTnf39H+EW9tWrqN5W2sZg8="
                        },
                        "on_success": "never"
                    },
                    "webhooks": "https://docs.travis-ci.com/update_webhook_payload_doc"
                }
            },
            "status": 1,
            "result": 1,
            "commit": "a1012d553e7b2aec886b8c84a24349e31526205f",
            "branch": "master",
            "message": "Merge pull request #1529 from janczer/fixed_typo_public_privet_repo\n\nFixed typo in doc",
            "compare_url": "https://github.com/lapolinar/docs-travis-ci-com/compare/54c708727ff645eef0eabb16e736adb447adfcf5...a1012d553e7b2aec886b8c84a24349e31526205f",
            "started_at": "2018-08-03T07:23:40Z",
            "finished_at": "2018-08-03T07:26:15Z",
            "committed_at": "2017-10-27T18:37:07Z",
            "author_name": "Hiro Asari",
            "author_email": "asari.ruby@gmail.com",
            "committer_name": "GitHub",
            "committer_email": "noreply@github.com",
            "allow_failure": false
        }
        ]
}