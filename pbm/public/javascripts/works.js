(function () {
    var modules = [];

    if (modules.length > 0) {
        var scripts = [];
        for (var i = 0; i < modules.length; i++) {
            var scriptItem = modules[i];
            scripts.push("<script src='/public/javascripts/" + scriptItem + "'></script>");
        }
        document.write();
    }
})();