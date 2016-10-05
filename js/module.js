(function(app) {
    app.AppModule = ng.core.
        NgModule({
            imports: [ng.platformBrowser.BrowserModule, ng.forms.FormsModule],
            declarations: [app.AppComponent],
            bootstrap: [app.AppComponent]
        })
        .Class({
            constructor() {}
        });
})(window.app || (window.app = {}));
