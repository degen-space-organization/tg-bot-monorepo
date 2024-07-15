import { Context, Telegraf } from "telegraf";
import { Manager } from "../Manager";
import { startCommandHandler } from "./start";
import { helpCommandHandler } from "./help";

/**
 * ### Commands Manager ###
 * 
 * I manage commands that are coming in from the user
 * 
 * I tell the bot how to react to certain commands and
 * what callback fn to call when those events occur
 * 
 */
export class CommandsManager extends Manager {

    /** Constructor */
    constructor(bot: Telegraf<Context>) {
        super(bot);

        /* Commands setups */
        this._setupCommands();
    };

    /** Setup basic commands */
    private _setupCommands() {
        this._bot.command('start', async (ctx) => startCommandHandler(ctx)); 
        this._bot.command('help', async (ctx) => helpCommandHandler(ctx)); 
    };
};