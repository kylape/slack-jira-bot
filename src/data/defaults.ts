const defaults = {
    config: {
        "server": {
            "port": 80,
            "basePath": ""
        },
        "slack": {
            "authToken": "",
            "validationToken": ""
        },
        "team": {
            "teamId": "main",
            "jira": {
                "protocol": "https",
                "host": "",
                "username": "",
                "password": "",
                "apiVersion": "2",
                "strictSSL": true
            }
        }
    }
};

export default defaults;