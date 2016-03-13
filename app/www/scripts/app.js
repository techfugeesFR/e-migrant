// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('app', ['ionic', 'jett.ionic.filter.bar', 'ionMdInput']);

app.run(function($ionicPlatform, $rootScope, $ionicModal, $location, $state, Translate) {


  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  $ionicModal.fromTemplateUrl('lang.html', {
      scope: $rootScope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $rootScope.modal = modal;
$rootScope.goHome = function() {
        $state.go('app.home');
    };

  //EN ATTENDANT LA SELECTION DU MIGRANT/CIVIL
  $rootScope.type = 0;

  $rootScope.translate = Translate.get()[$rootScope.lang];

  $rootScope.lang = 'france';

  $rootScope.langChange = function(lang) {
    $rootScope.lang = lang;
    $rootScope.translate = Translate.get()[$rootScope.lang];
    $rootScope.closeModal();
  };

    $rootScope.openModal = function() {
      $rootScope.modal.show();
    };
    $rootScope.closeModal = function() {
      $rootScope.modal.hide();
    };
    
    $rootScope.openModal();
    });

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
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
          templateUrl: 'templates/Sign.html',
          controller: 'SignCtrl'
        }
      }
    })

  .state('app.sign1', {
      url: '/sign/1',
      views: {
        'menuContent': {
          templateUrl: 'templates/Sign1.html',
          controller: 'Sign1Ctrl'
        }
      }
    })

    .state('app.sign2', {
      url: '/sign/2',
      views: {
        'menuContent': {
          templateUrl: 'templates/Sign2.html',
          controller: 'Sign2Ctrl'
        }
      }
    })

  .state('app.sign3', {
      url: '/sign/3',
      views: {
        'menuContent': {
          templateUrl: 'templates/Sign3.html',
          controller: 'Sign3Ctrl'
        }
      }
    })

    .state('app.sign4', {
      url: '/sign/4',
      views: {
        'menuContent': {
          templateUrl: 'templates/Sign4.html',
          controller: 'Sign4Ctrl'
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
          controller: 'ServicesListCtrl'
        }
      }
    })

  .state('app.serviceMap', {
    url: '/service/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/Map.html',
        controller: 'ServiceMapCtrl'
      }
    }
  })
    .state('app.needList', {
      url: '/need/list',
      views: {
        'menuContent': {
          templateUrl: 'templates/List.html',
          controller: 'NeedListCtrl'
        }
      }
    })

  .state('app.needMap', {
    url: '/need/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/Map.html',
        controller: 'ServiceMapCtrl'
      }
    }
  })

  .state('app.engage', {
    url: '/engage/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/Engage.html',
        controller: 'EngageCtrl'
      }
    }
  })

  .state('app.engageForm', {
    url: '/engage/form/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/EngageForm.html',
        controller: 'EngageFormCtrl'
      }
    }
  })

  .state('app.help', {
    url: '/help/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/Help.html',
        controller: 'ĤelpCtrl'
      }
    }
  })

  .state('app.helpForm', {
    url: '/help/form/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/HelpForm.html',
        controller: 'HelpFormCtrl'
      }
    }
  })
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/Profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/Home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  .state('app.news', {
    url: '/home/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/News.html',
        controller: 'NewsCtrl'
      }
    }
  })
  .state('app.chatList', {
    url: '/chat/list',
    views: {
      'menuContent': {
        templateUrl: 'templates/ChatList.html',
        controller: 'ChatListCtrl'
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
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
