import JiraClient from "jira-client";

class Jira {
    private client: any;

    constructor (config?) {
        this.client = new JiraClient(config);
    }

    public configure(config) {
        this.client = new JiraClient(config);
    }

    public async findIssue (issueNumber: string) {
        let issue: any;

        try {
            let issue = await this.client.findIssue(issueNumber);
        } catch (e) {
            console.error(e);
        }

        return issue;
    }
}

export const jira = new Jira();