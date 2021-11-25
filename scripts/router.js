const views = require('../scripts/view_control.js');
const ContentControl = require('../scripts/content_control.js');
// Criando controle das views do app

const content_control = new ContentControl();

const Router = class Router{
    constructor(){
        this.last_route = null;
        this.new_route = this.getIdUsingRout();
    }
    update_state(){
        this.last_route = this.new_route;
        this.new_route = this.getIdUsingRout();
    };
    getIdUsingRout(){
        return window.location.hash.replace('#', '')
    };
    //uptade, set and unset the view, and load data control
    change_state(){
        this.update_state();
        views.view_hide(this.last_route, this.new_route);
        views.view_show(this.new_route);
        this.load_control();
    }
    state(){
        return `last rout: ${this.last_route}\nnew rout: ${this.new_route}`;
    }
    load_control(){
        content_control['load_'+this.new_route]();
    }
}

module.exports = Router;
