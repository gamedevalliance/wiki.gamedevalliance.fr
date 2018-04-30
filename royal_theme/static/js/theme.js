$(document).ready(function() {
    var sel = Cookies.get("darkmode");
    sel = sel == "true";
    toggle_darkmode(sel);
    $("body")[0].offsetHeight; // https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    $("body").toggleClass("disable-transition", false);

    var $searchInput = $("input[name='q']");
    $searchInput[1].value = $searchInput[0].value

    $("#toggle-darkmode").on("click", function() {
        var $this = $(this);
        sel = !sel;
        toggle_darkmode(sel)
        Cookies.set("darkmode", sel, {
            expires: 365,
            path: '/'
        });
    });

    $("#toggle-sidemenu").on("click", function() {
        $("#sidebar").toggleClass("open");
        $("body").toggleClass("sidebar-open");
    });
})

function toggle_darkmode(sel) {
    $("body").toggleClass("dark", sel);
}
