import { Context, Telegraf, session } from "telegraf";
import { config } from "dotenv";

/** Manager imports */
import {
    CommandsManager,
    ScenesManager,
    ButtonsManager,
    MessagesManager
} from "./Managers";


/** Load the ENV */
config({
    path: require("path").resolve(__dirname, "../.env")
});


/**
 * Main function implementation
 */
async function main() {

    const botToken = process.env.BOT_TOKEN;

    if (!botToken) {
        console.error("Error: ENV variables not provided. Please add them to your .env file.");
        process.exit(1);
    }

    /** Create the bot */
    const bot = new Telegraf<Context>(botToken);
    bot.use(session({})); // Don't touch this for now


    /* Managers */
    new ScenesManager(bot);
    new CommandsManager(bot);
    new ButtonsManager(bot);
    new MessagesManager(bot);
    // new PreviewManager(bot, authClient);
    


    try {
        console.log('Starting the bot...');
        await bot.launch();
        
    } catch (err) {
        console.error("Error encountered when starting the bot:", err);
        process.exit(1);
    }
};


export async function launchBot() {
    await main();
}