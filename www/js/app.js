// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
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
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })


  .state('app.home_init', {
    url: "/home/init",
    views: {
      'menuContent': {
        templateUrl: "sections/home/home.html"
      }
    }
  })


  //SECCION DE CAPACITACION
  .state('app.capacitacion_home', {
    url: "/capacitacion/home",
    views: {
      'menuContent': {
        templateUrl: "sections/capacitacion/home.html"
      }
    }
  })

  .state('app.capacitacion_como', {
    url: "/capacitacion/como",
    views: {
      'menuContent': {
        templateUrl: "sections/capacitacion/como.html"
      }
    }
  })

  .state('app.capacitacion_mensajeria', {
    url: "/capacitacion/mensajeria",
    views: {
      'menuContent': {
        templateUrl: "sections/capacitacion/mensajeria.html"
      }
    }
  })

  .state('app.capacitacion_ranking', {
    url: "/capacitacion/ranking",
    views: {
      'menuContent': {
        templateUrl: "sections/capacitacion/ranking.html"
      }
    }
  })

  .state('app.capacitacion_tutoriales', {
    url: "/capacitacion/tutoriales",
    views: {
      'menuContent': {
        templateUrl: "sections/capacitacion/tutoriales.html"
      }
    }
  })


  /*  ---  SECCION DE SOPORTE TECNICO  ---*/
  .state('app.soporte_home', {
    url: "/soporte/home",
    views: {
      'menuContent': {
        templateUrl: "sections/soporte/home.html"
      }
    }
  })

  .state('app.soporte_como', {
    url: "/soporte/como",
    views: {
      'menuContent': {
        templateUrl: "sections/soporte/como.html"
      }
    }
  })

  .state('app.soporte_chat', {
    url: "/soporte/chat",
    views: {
      'menuContent': {
        templateUrl: "sections/soporte/chat.html"
      }
    }
  })



  /*  ---  SECCION DE PROGRAMA DE INCENTIVOS  ---*/
  .state('app.incentivos_info', {
    url: "/incentivos/info",
    views: {
      'menuContent': {
        templateUrl: "sections/incentivos/info.html"
      }
    }
  })

  .state('app.incentivos_calculo', {
    url: "/incentivos/calculo",
    views: {
      'menuContent': {
        templateUrl: "sections/incentivos/calculo.html"
      }
    }
  })

  .state('app.incentivos_registro', {
    url: "/incentivos/registro",
    views: {
      'menuContent': {
        templateUrl: "sections/incentivos/registro.html"
      }
    }
  })

  /*  ---  SECCION DE REGISTRO Y PERFIL  ---*/
  .state('app.perfil_registro', {
    url: "/perfil/registro",
    views: {
      'menuContent': {
        templateUrl: "sections/perfil/registro.html"
      }
    }
  })

  .state('app.perfil_codigo', {
    url: "/perfil/codigo",
    views: {
      'menuContent': {
        templateUrl: "sections/perfil/codigo.html"
      }
    }
  })

  .state('app.perfil', {
    url: "/perfil",
    views: {
      'menuContent': {
        templateUrl: "sections/perfil/perfil.html"
      }
    }
  })

  .state('app.perfil_login', {
    url: "/perfil/login",
    views: {
      'menuContent': {
        templateUrl: "sections/perfil/login.html"
      }
    }
  })

  /*  ---  SECCION DE CONSULTA DE PREMIOS  ---*/
  .state('app.premios_consulta', {
    url: "/premios/consulta",
    views: {
      'menuContent': {
        templateUrl: "sections/premios/consulta.html"
      }
    }
  })

  /*
  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });*/;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home/init');
});
