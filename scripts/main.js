const $ = require('jquery');
const Router = require('../scripts/router.js');

const route_state = new Router();

// start the process with correct state
document.addEventListener("DOMContentLoaded", () => {
    window.location.hash = '#main';
    //console.log(route_state.state());
    console.log(window.location);
    route_state.change_state();
});

// verify the rout and control de states and views
window.onhashchange = () => {
    route_state.change_state();
    //console.log(route_state.state());
}