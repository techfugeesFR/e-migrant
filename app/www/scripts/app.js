// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers'])

.run(function($ionicPlatform, $rootScope) {

  //EN ATTENDANT LA SELECTION DU MIGRANT/CIVIL
  $rootScope.type = 1;

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/Settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })

  .state('app.messages', {
      url: '/messages',
      views: {
        'menuContent': {
          templateUrl: 'templates/Messages.html',
          controller: 'MessagesCtrl'
        }
      }
    })

  .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/Login.html',
          controller: 'LoginCtrl'
        }
      }
    })

  .state('app.sign', {
      url: '/sign',
      views: {
        'menuContent': {
          templateUrl: 'templates/Sign.html'
          controller: 'SignCtrl'
        }
      }
    })


  .state('app.choice', {
      url: '/choice',
      views: {
        'menuContent': {
          templateUrl: 'templates/Choice.html',
          controller: 'ChoiceCtrl'
        }
      }
    })

    .state('app.serviceList', {
      url: '/service/list',
      views: {
        'menuContent': {
          templateUrl: 'templates/List.html',
          controller: 'ServiceListCtrl'
        }
      }
    })

  .state('app.serviceMap', {
    url: '/service/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'ServiceMapCtrl'
      }
    }
  })
    .state('app.needList', {
      url: '/need/list',
      views: {
        'menuContent': {
          templateUrl: 'templates/List.html',
          controller: 'ServiceListCtrl'
        }
      }
    })

  .state('app.needMap', {
    url: '/need/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'ServiceMapCtrl'
      }
    }
  })

  .state('app.engage', {
    url: '/engage',
    views: {
      'menuContent': {
        templateUrl: 'templates/Engage.html',
        controller: 'EngageCtrl'
      }
    }
  })

  .state('app.engageForm', {
    url: '/engage/form',
    views: {
      'menuContent': {
        templateUrl: 'templates/EngageForm.html',
        controller: 'EngageFormCtrl'
      }
    }
  })    

  .state('app.help', {
    url: '/help',
    views: {
      'menuContent': {
        templateUrl: 'templates/Help.html',
        controller: 'ĤelpCtrl'
      }
    }
  })

  .state('app.helpForm', {
    url: '/help/form',
    views: {
      'menuContent': {
        templateUrl: 'templates/HelpForm.html',
        controller: 'HelpFormCtrl'
      }
    }
  })  

  .state('app.chat', {
    url: '/chat/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/Chat.html',
        controller: 'ChatCtrl'
      }
    }
  }) 

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/service/list');
});
