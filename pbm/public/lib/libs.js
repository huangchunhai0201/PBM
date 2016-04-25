(function () {
    var modules = [
        "jquery-1.12.3"
    ];
    var libs = [];
    if (modules.length > 0) {
        for (var i = 0; i < modules.length; i++) {
            var libItem = modules[i];
            libs.push("<script src='/public/lib/" + libItem + "'></script>");
        }
        document.write(libs.join('\n'));
    }
})();

