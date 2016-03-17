export default function routeConfig($locationProvider, $routeProvider, templateProvider) {
    $locationProvider.html5Mode(true);
    const templateCache = templateProvider.$get();

    $routeProvider
        .when('/', {
            template: templateCache.Main,
            controller: 'Main',
        })
        .otherwise({redirectTo: '/'});
}

routeConfig.$inject = ['$locationProvider', '$routeProvider', 'templateProvider'];
