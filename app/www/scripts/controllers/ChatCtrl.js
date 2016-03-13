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
app.controller('ChatCtrl', function($scope, $timeout, $stateParams, $ionicScrollDelegate, $rootScope)
{
  $rootScope.id = 1;
  $scope.messages = [
    {
      "userId": '12679',
      "text": "Je cherchais justement un plombier pour mon repère, quand seriez vous disponible ?",
      "image": "https://i.kinja-img.com/gawker-media/image/upload/s--7rFEsW95--/c_fill,fl_progressive,g_north,h_358,q_80,w_636/197gkt72jr0e1jpg.jpg"
    }
  ];

  $scope.sendMessage = function(messageForm){
    $scope.messages.push({
      "userId": $rootScope.id,
      "text": $scope.input.message,
      "image": "./img/5.jpg"
    })

    $scope.input.message = "";

    $timeout(function(){
      $scope.messages.push({
        "userId": '12679',
        "text": "Tiens je te laisse mon numéro, 0677683436, apelle moi !",
        "image": "https://i.kinja-img.com/gawker-media/image/upload/s--7rFEsW95--/c_fill,fl_progressive,g_north,h_358,q_80,w_636/197gkt72jr0e1jpg.jpg"
      });
    },4000);
  }
});
