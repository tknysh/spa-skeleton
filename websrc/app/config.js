require.config({
    baseUrl: '/app/',
    paths : {
        angular: 'lib/angular/angular',
        angularResource: 'lib/angular-resource/angular-resource',
        angularUIRouter: 'lib/angular-ui-router/release/angular-ui-router',
        domReady: 'lib/requirejs-domready/domReady'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        angularResource: {
            deps: ['angular']
        },
        angularUIRouter: {
            deps: ['angular']
        }
    },
    priority: [
        "angular"
    ],
    deps: ['bootstrap']
});