




export class Screens {


    constructor() {}


    static getStartText() {
        let message = ``;
        message += `Hello!\n\n`;
        message += `I am a bot\n\n`;
        return message;
    };

    static getHelpText() {
        let message = ``;
        message += `Here are the commands you can use:\n\n`;
        message += `/start - Start the bot\n`;
        message += `/help - Get help\n`;
        return message;
    };
}