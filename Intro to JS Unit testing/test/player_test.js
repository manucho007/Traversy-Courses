var expect = require('chai').expect;

describe('PLAYER METHODS', function () {
  describe('validateLocation', function () {
    var validateLocation = require('../game_logic/player_methods.js')
      .validateLocation;
    var player;
    beforeEach(function () {
      player = {
        ships: [
          {
            locations: [[9, 9]],
          },
        ],
      };
    });

    it('shoud confirm valid for unoccupied locations in range', function () {
      var location = [0, 0];
      var actual = validateLocation(player, location);

      expect(actual).to.be.ok;
    });

    it('shoud confirm INvalid for occupied locations in range', function () {
      var location = [9, 9];
      var actual = validateLocation(player, location);

      expect(actual).to.be.false;
    });

    it('shoud confirm INvalid for UNoccupied locations OUT of range', function () {
      var locationHigh = [10, 10];
      var locationLow = [-1, -1];

      expect(validateLocation(player, locationHigh)).to.be.false;
      expect(validateLocation(player, locationLow)).to.be.false;
    });
  });

  describe('validateLocations', function () {
    var validateLocations = require('../game_logic/player_methods.js')
      .validateLocations;
    var player;

    beforeEach(function () {
      player = {
        ships: [
          {
            locations: [[0, 0]],
          },
        ],
      };
    });

    it('should correctly report a list of unoccupied locations is valid', function () {
      var locations = [
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
      ];
      expect(validateLocations(player, locations)).to.be.ok;
    });

    it('should correctly report a a problem if any location in the list is invalid', function () {
      var locations = [
        [1, 1],
        [1, 2],
        [1, 3],
        [10, 10],
      ];
      expect(validateLocations(player, locations)).to.be.false;

      locations = [
        [1, 1],
        [1, 2],
        [1, 3],
        [0, 0],
      ];
      expect(validateLocations(player, locations)).to.be.false;
    });
  });

  describe('placeShip', function () {
    var placeShip = require('../game_logic/player_methods.js').placeShip;
    var player;

    beforeEach(function () {
      player = {
        ships: [
          {
            size: 1,
            locations: [],
          },
          {
            size: 2,
            locations: [
              [1, 0],
              [1, 1],
            ],
          },
        ],
      };
    });

    it('should update a ship with a valid starting location', function () {
      var ship = player.ships[0];
      var coordinates = [0, 1];

      placeShip(player, ship, coordinates, 'horizontal');
      var actual = ship.locations;

      expect(actual).to.be.ok;
      expect(actual).to.have.length(1);
      expect(actual[0]).to.deep.equal([0, 1]);
    });

    it('should throw an error if no direction is specified', function () {
      var ship = player.ships[0];
      var coordinates = [0, 1];
      var handler = function () {
        placeShip(player, ship, coordinates);
      };

      expect(handler).to.throw(Error);
      expect(handler).to.throw(
        'Direction was not provided and is required to place ship'
      );
    });
  });
});
