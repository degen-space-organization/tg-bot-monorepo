import { Context } from "telegraf";
import { Pages } from "../../Components/Pages/Pages";


export const helpCommandHandler = async (ctx: Context) => {
    const helpPage = Pages.getHelpPage();
    await ctx.reply(helpPage.screen,  {parse_mode: 'HTML', ...helpPage.menu.constructedMenu});
};