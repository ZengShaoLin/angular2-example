(function() {
    System.config({
        baseURL: 'hero/dist',
        paths: {
            // paths serve as alias
            'npm:': '../../node_modules/',
        },
        // depCache: {},  //define module dependencies
        // meta: {},   //just like shim of requirejs
        map: {  // map tells the System loader where to look for things
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
            // other libraries
            'rxjs': 'npm:rxjs'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            './': {
                format: 'cjs',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });

    System.import('main');
})();
