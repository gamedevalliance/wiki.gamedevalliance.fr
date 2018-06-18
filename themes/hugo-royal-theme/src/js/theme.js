document.addEventListener("DOMContentLoaded", function() {
    var body = document.getElementsByTagName("body")[0];
    var sel = getCookie("darkmode");
    sel = sel == "true";
    toggleDarkmode(body, sel);
    body.offsetHeight; // https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    body.classList.toggle("disable-transition", false);

    document.getElementById("toggle-darkmode").addEventListener('click', function() {
        sel = !sel;
        toggleDarkmode(body, sel);
        var nowDate = new Date();
        nowDate.setDate(nowDate.getDate() + 365);
        document.cookie = "darkmode=" + sel + ";expires=" + nowDate.toUTCString()+";path=/";
    });

    sidebar = document.getElementById("sidebar")
    document.getElementById("toggle-sidemenu").addEventListener('click', function() {
        sidebar.classList.toggle("open");
        body.classList.toggle("sidebar-open");
    });

    for (var links = document.links, i = 0, a; a = links[i]; i++) {
        if (a.host !== location.host) {
                a.target = '_blank';
                a.classList.add("external");
        }
    }

    content = document.getElementById("page-content")
    for (var level = 0; level <= 4; level++) {
        addHeaderLinks(level, content);
    }

})

function getCookie(name) {
    return ('; ' + document.cookie).split('; ' + name + '=').pop().split(';').shift() // ???
}

function toggleDarkmode(body, sel) {
    body.classList.toggle("dark", sel);
}

function addHeaderLinks(level, content) {
    var headers = content.getElementsByTagName("h" + level);
    for (var i = 0; i < headers.length; i++) {
        var header = headers[i];

        if (typeof header.id !== "undefined" && header.id !== "") {
            var headerlink = document.createElement("a");
            headerlink.className = "headerlink";
            headerlink.href = "#" + header.id;
            headerlink.innerHTML = "";
            header.appendChild(headerlink);
        }
    }
}
