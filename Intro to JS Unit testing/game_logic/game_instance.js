var fireAtLocation = require('./ship_methods.js').fireAtLocation;

function checkGameStatus(players) {
  return false;
}

function takeTurn(opposingPlayer, guessFunction) {
  var coordinates = guessFunction();
  fireAtLocation(opposingPlayer, coordinates);

  var gameOver = checkGameStatus();

  return gameOver;
}

module.exports = {
  checkGameStatus,
  takeTurn,
};
