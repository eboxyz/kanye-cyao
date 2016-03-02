// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Kanye', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('home', {
    url:'/',
    templateUrl: 'frontState.html'
  })

  $stateProvider.state('firstLife', {
    url:'/firstlife',
    templateUrl: 'firstState.html'
  })

  $stateProvider.state('firstDeath', {
    url: '/firstdeath',
    templateUrl: 'fdState.html'
  })

  $stateProvider.state('secondLife', {
    url:'/secondlife',
    templateUrl: 'secondLife.html'
  })

  $stateProvider.state('thirdLife', {
    url:'/thirdlife',
    templateUrl: 'thirdLife.html'
  })

  $stateProvider.state('secondDeath', {
    url:'/seconddeath',
    templateUrl: 'secondDeath.html'
  })

  $stateProvider.state('fourthLife', {
    url:'/fourthlife',
    templateUrl: "fourthLife.html"
  })

  $stateProvider.state('thirdDeath', {
    url: '/thirddeath',
    templateUrl: 'thirdDeath.html'
  })

  $stateProvider.state('fifthLife', {
    url:'/fifthlife',
    templateUrl: 'fifthLife.html'
  })

  $stateProvider.state('fourthDeath', {
    url:'/fourthdeath',
    templateUrl: 'fourthDeath.html'
  })

  $stateProvider.state('sixthLife', {
    url:'/sixthlife',
    templateUrl: 'sixthLife.html'
  })

  $stateProvider.state('fifthDeath', {
    url:'/fifthdeath',
    templateUrl: 'fifthDeath.html'
  })

  $stateProvider.state('seventhLife', {
    url: '/seventhlife',
    templateUrl: 'seventhLife.html'
  })

  $stateProvider.state('sixthDeath', {
    url: '/sixthdeath',
    templateUrl: 'sixthDeath.html'
  })

  $stateProvider.state('eighthLife', {
    url: '/eightlife',
    templateUrl: 'eighthLife.html'
  })

  $stateProvider.state('seventhDeath', {
    url: '/seventhdeath',
    templateUrl: 'seventhDeath.html'
  })

  $stateProvider.state('ninthLife', {
    url: '/ninthlife',
    templateUrl: 'ninthLife.html'
  })

  $stateProvider.state('eighthDeath', {
    url: '/eighthdeath',
    templateUrl: 'eighthDeath.html'
  })

  $stateProvider.state('tenthLife', {
    url: '/tenthlife',
    templateUrl: 'tenthLife.html'
  })

  $stateProvider.state('ninthDeath', {
    url: '/ninthdeath',
    templateUrl: 'ninthDeath.html'
  })

  $stateProvider.state('eleventhLife', {
    url: '/eleventhlife',
    templateUrl: 'eleventhLife.html'
  })

  $stateProvider.state('tenthDeath', {
    url: '/tenthdeath',
    templateUrl: 'tenthDeath.html'
  })

  $stateProvider.state('twelfthLife', {
    url: '/twelfthlife',
    templateUrl: 'twelfthLife.html'
  })

  $stateProvider.state('eleventhDeath', {
    url: '/eleventhdeath',
    templateUrl: 'eleventhDeath.html'
  })

  $stateProvider.state('thirteenthLife', {
    url: '/thirteenthlife',
    templateUrl: 'thirteenthLife.html'
  })

  $stateProvider.state('twelfthDeath', {
    url: '/twelfthdeath',
    templateUrl: 'twelfthDeath.html'
  })

  $stateProvider.state('fourteenthLife', {
    url: '/fourteenthlife',
    templateUrl: 'fourteenthLife.html'
  })

  $stateProvider.state('thirteenthDeath', {
    url: '/thirteenthdeath',
    templateUrl: 'thirteenthDeath.html'
  })

  $stateProvider.state('fifteenthLife', {
    url: '/fifteenthlife',
    templateUrl: 'fifteenthLife.html'
  })

  $stateProvider.state('fourteenthDeath', {
    url: '/fourteenthdeath',
    templateUrl: 'fourteenthDeath.html'
  })

  $stateProvider.state('sixteenthLife', {
    url: '/sixteenthlife',
    templateUrl: 'sixteenthLife.html'
  })

  $stateProvider.state('fifteenthDeath', {
    url: '/fifteenthdeath',
    templateUrl: 'fifteenthDeath.html'
  })

  $stateProvider.state('win', {
    url: '/win',
    templateUrl: 'win.html'
  })

  $stateProvider.state('sixteenthDeath', {
    url: '/sixteenthdeath',
    templateUrl: 'sixteenthDeath.html'
  })

  $stateProvider.state('why', {
    url: '/why',
    templateUrl: 'why.html'
  })
})










