const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({ name, email }, content) {
        super();

        this.sgApi = sendgrid(keys.sendGridKey);
        this.from_email = new helper.Email('festival-climb@climb.com');
        this.subject = 'Retorno de sua proposta';
        this.body = new helper.Content('text/html', content);
        this.recipient = new helper.Email(email);

        this.addContent(this.body);
        this.addRecipients();
    }

    addRecipients() {
        const personalize = new helper.Personalization();
        personalize.addTo(this.recipient);
        this.addPersonalization(personalize);
    }

    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });

        const response = await this.sgApi.API(request);
        return response;
    }
}

module.exports = Mailer;