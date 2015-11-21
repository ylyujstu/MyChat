angular.module('myChatApp').controller('RoomCtrl', function($scope, socket) {
  $scope.messages = []
  socket.on('messages.read', function (messages) {
    $scope.messages = messages
  })
  socket.on('messages.add', function (message) {
    $scope.messages.push(message)
  })
  socket.emit('messages.read')
})