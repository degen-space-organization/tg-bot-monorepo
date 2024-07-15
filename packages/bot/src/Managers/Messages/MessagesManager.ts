import { Manager } from "../Manager";
import { Context, Telegraf } from "telegraf";


/**
 * Messages Manager
 * 
 * I manage the messages that are being received from the user
 * 
 */
export class MessagesManager extends Manager {

    constructor(bot: Telegraf<Context>) {
        super(bot);

        this._setupMessageHandler();
    }

    private _setupMessageHandler() {
        this._bot.on('message', async (ctx) => {

            // Check if the message is not a command
            // This is a simple way to check if the message is not a command
            
            // @ts-ignore
            if (!ctx.message.text.startsWith('/')) {
                await ctx.reply('You sent a message that is not a registered command');
            }
        });
    };

};