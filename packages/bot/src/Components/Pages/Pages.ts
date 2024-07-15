import { Menus } from "../Menus/Menus";
import { Screens } from "../Screens/Screens";


const menus = new Menus();
const screens = new Screens();


export class Pages {

    /** Properties */

    /* Constructor */
    constructor() {}


    static getHomePage() {
        const startScreen = Screens.getStartText();
        const startMenu = Menus.getStartMenu();
        return {
            screen: startScreen,
            menu: startMenu
        }
    };

    static getHelpPage() {
        const helpScreen = Screens.getHelpText();
        const helpMenu = menus.helpMenus.getHelpMenu();
        return {
            screen: helpScreen,
            menu: helpMenu
        }
    }

};