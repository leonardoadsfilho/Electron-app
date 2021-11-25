const html_views = {
    //element control
    view_show: (id) => {
        document.getElementById(id).classList.remove('hidde-content');
    },
    view_hide: (id) => {
        document.getElementById(id).classList.add('hidde-content');
    },
}

module.exports = html_views;