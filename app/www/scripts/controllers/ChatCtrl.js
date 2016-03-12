app.directive('input', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      'returnClose': '=',
      'onReturn': '&',
      'onFocus': '&',
      'onBlur': '&'
    },
    link: function(scope, element, attr) {
      element.bind('focus', function(e) {
        if (scope.onFocus) {
          $timeout(function() {
            scope.onFocus();
          });
        }
      });
      element.bind('blur', function(e) {
        if (scope.onBlur) {
          $timeout(function() {
            scope.onBlur();
          });
        }
      });
      element.bind('keydown', function(e) {
        if (e.which == 13) {
          if (scope.returnClose) element[0].blur();
          if (scope.onReturn) {
            $timeout(function() {
              scope.onReturn();
            });
          }
        }
      });
    }
  }
});
app.controller('ChatCtrl', function($scope, $stateParams, $ionicScrollDelegate)
{

  var socket = io.connect('http://localhost:8080');

  $scope.hideTime = true;

  var alternate,
    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();


  $scope.sendMessage = function(data) {
    var d = new Date();
    d = d.toLocaleTimeString().replace(/:\d+ /, ' ');
    alternate = !alternate;
    var object = {
      userId: alternate ? '12345' : '54321',
      text: $scope.input.message,
      time: d
    };
    $scope.messages.push(object);

    socket.emit('message', {"userId": 1, "message": $scope.data.message, "time": d});
    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);

  };

  socket.on('server_message', function($data)
  {

  });


  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };


  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];
});
