function checkForShip(player, coordinates) {
  var shipPresent, ship;

  for (var i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];
    shipPresent = ship.locations.filter(function (actualCoordinate) {
      return (
        actualCoordinate[0] === coordinates[0] &&
        actualCoordinate[1] === coordinates[1]
      );
    })[0];
    if (shipPresent) {
      return ship;
    }
  }
  return false;
}

function damageShip(ship, coordinates) {
  ship.damage.push(coordinates);
}

function fireAtLocation(opposingPlayer, guessedCoordinates) {
  var ship = checkForShip(opposingPlayer, guessedCoordinates);
  if (ship) {
    damageShip(ship, guessedCoordinates);
    // return true;
  } else {
    return false;
  }
}

module.exports = {
  checkForShip,
  damageShip,
  fireAtLocation,
};
