document.addEventListener("DOMContentLoaded", function() {
    var body = document.getElementsByTagName("body")[0];
    var sel = Cookies.get("darkmode");
    sel = sel == "true";
    toggle_darkmode(body, sel);
    body.offsetHeight; // https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    body.classList.toggle("disable-transition", false);

    document.getElementById("toggle-darkmode").addEventListener('click', function() {
        sel = !sel;
        toggle_darkmode(body, sel)
        Cookies.set("darkmode", sel, {
            expires: 365,
            path: '/'
        });
    });

    sidebar = document.getElementById("sidebar")
    document.getElementById("toggle-sidemenu").addEventListener('click', function() {
        sidebar.classList.toggle("open");
        body.classList.toggle("sidebar-open")
    });

    var searchInput = document.getElementsByName("q")
    searchInput[1].value = searchInput[0].value

    for (var links = document.links, i = 0, a; a = links[i]; i++) {
        if (a.host !== location.host) {
                a.target = '_blank';
        }
    }
})

function toggle_darkmode(body, sel) {
    body.classList.toggle("dark", sel);
}
