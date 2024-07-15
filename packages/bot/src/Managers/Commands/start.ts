import { Context } from "telegraf";
import { Pages } from "../../Components/Pages/Pages";


export const startCommandHandler = async (ctx: Context) => {
    const startPage = Pages.getHomePage();
    await ctx.reply(startPage.screen,  {parse_mode: 'HTML', ...startPage.menu.constructedMenu});
};