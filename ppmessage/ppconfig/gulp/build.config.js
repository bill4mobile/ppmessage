module.exports = {

    html: ["../src/html/**/*.html", "../src/html/*.html"],
    icon: ['../../resource/share/ppconfig/bower_components/material-design-icons/*/svg/production/*.svg'],
    iconPath: "../../resource/assets/ppconfig/static/img/icon/",    
    buildPath: "../../resource/assets/ppconfig/static/dist/",

    scriptFiles: [
        "../src/js/version.js",
        "../src/js/global.js",
        "../src/js/thisapp.js",
        "../src/js/constants.js",
        "../src/js/route.js",

        "../src/js/services/ajax.js",
        "../src/js/controllers/app.js",
        "../src/js/controllers/config-dialog.js",        
        "../src/js/controllers/config.js",
        
        "../src/js/bootstrap.js"
    ],

    scriptLibFiles: [
        "../../resource/share/ppconfig/bower_components/js-sha1/build/sha1.min.js",
        "../../resource/share/ppconfig/bower_components/jquery/dist/jquery.min.js",        
        "../../resource/share/ppconfig/bower_components/angular/angular.min.js",
        
        "../../resource/share/ppconfig/bower_components/angular-aria/angular-aria.min.js",
        "../../resource/share/ppconfig/bower_components/angular-animate/angular-animate.min.js",
        "../../resource/share/ppconfig/bower_components/angular-messages/angular-messages.min.js",

        "../../resource/share/ppconfig/bower_components/angular-route/angular-route.min.js",
        "../../resource/share/ppconfig/bower_components/angular-ui-router/release/angular-ui-router.min.js",
        
        "../../resource/share/ppconfig/bower_components/angular-base64/angular-base64.min.js",
        "../../resource/share/ppconfig/bower_components/angular-material/angular-material.min.js"        
    ],
    
    cssFiles: [
        "../src/css/head.css",
        "../src/css/config.css",
    ],

    cssLibFiles: [
        "../../resource/share/ppconfig/bower_components/material-design-icons/iconfont/material-icons.css",
        "../../resource/share/ppconfig/bower_components/angular-material/angular-material.min.css"
    ],

    fontFiles: [
        "../../resource/share/ppconfig/bower_components/material-design-icons/iconfont/codepoints",
        "../../resource/share/ppconfig/bower_components/material-design-icons/iconfont/MaterialIcons-Regular.eot",
        "../../resource/share/ppconfig/bower_components/material-design-icons/iconfont/MaterialIcons-Regular.ttf",
        "../../resource/share/ppconfig/bower_components/material-design-icons/iconfont/MaterialIcons-Regular.ijmap",
        "../../resource/share/ppconfig/bower_components/material-design-icons/iconfont/MaterialIcons-Regular.woff",
        "../../resource/share/ppconfig/bower_components/material-design-icons/iconfont/MaterialIcons-Regular.svg",
        "../../resource/share/ppconfig/bower_components/material-design-icons/iconfont/MaterialIcons-Regular.woff2"
    ],
};
