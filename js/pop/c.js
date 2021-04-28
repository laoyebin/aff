function doMyStuff($) { $(document).ready(function() {
        var ran_yet = false;
        $("a,body,input").click(function() {
            if (ran_yet) {
                return; }
            ran_yet = true;
            var cookiename = 'nopopchaturbate';
            var val = getCookie(cookiename);
            if (!val) { val = 1; } else { val = parseInt(val); }
            setCookie(cookiename, val + 1, 1);
            if (val != 1) {
                return; }
            var windowprops = "width=1024,height=768,location=yes,toolbar=yes,menubar=yes,status=yes,scrollbars=yes,resizable=yes,top=1,left=1";
            var url = "http://mymobi.info/go.php";
            var myWin = window.open(url, "", windowprops);
            myWin.blur();
            window.focus(); }); }); }

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value; }

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) { x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y); } } }

function check() {
    return window.jQuery && jQuery.fn && /^1\.[3-9]/.test(jQuery.fn.jquery); }
if (check()) { doMyStuff(jQuery); } else {
    var script = document.createElement('script'),
        timer = setInterval(function() {
            if (check()) { clearInterval(timer);
                document.body.removeChild(script);
                doMyStuff(jQuery.noConflict(true)); } }, 30);
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js';
    document.body.insertBefore(script, document.body.firstChild); }
