(function() {
    var OriginTitile = document.title,
        titleTime;
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = '死鬼去哪里了？';
            clearTimeout(titleTime);
        } else {
            document.title = '终于回来了 <(￣︶￣)>';
            titleTime = setTimeout(function() {
                document.title = OriginTitile;
            }, 1000);
        }
    });
})();