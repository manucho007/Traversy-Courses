var expect = require('chai').expect;

describe('SHIP METHODS', () => {
  describe('Check for ship', () => {
    var checkForShip = require('../game_logic/ship_methods').checkForShip;
    var player;
    // Hook to reuse the player object
    before(() => {
      player = {
        ships: [
          {
            locations: [
              [0, 0],
              [0, 1],
            ],
          },
          {
            locations: [
              [8, 8],
              [8, 9],
            ],
          },
          {
            locations: [
              [6, 6],
              [6, 7],
              [6, 8],
            ],
          },
        ],
      };
    });
    it('Should correctly report no ship at a given player coordinate', () => {
      expect(checkForShip(player, [9, 9])).to.be.false;
    });
    it('Should correctly report hit at a given player coordinate', () => {
      expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    });
    it('Should handle ships located at more than one coordinate', () => {
      expect(checkForShip(player, [9, 9])).to.be.false;
      expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    });
    it('Should be able to handle multiple ships', () => {
      expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
      expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
      expect(checkForShip(player, [9, 9])).to.be.false;
      expect(checkForShip(player, [8, 8])).to.deep.equal(player.ships[1]);
      expect(checkForShip(player, [6, 7])).to.deep.equal(player.ships[2]);
      expect(checkForShip(player, [6, 8])).to.deep.equal(player.ships[2]);
    });
  });

  describe('Damage Ship', () => {
    var damageShip = require('../game_logic/ship_methods').damageShip;
    it('Should register damage on a given ship at a given location', () => {
      var ship = {
        locations: [[0, 0]],
        damage: [],
      };
      damageShip(ship, [0, 0]);
      expect(ship.damage).to.not.be.empty;
      expect(ship.damage[0]).to.deep.equal([0, 0]);
    });
  });

  describe('fire a shot at an opposing player', function () {
    var fireAtLocation = require('../game_logic/ship_methods').fireAtLocation;
    var player2;

    beforeEach(function () {
      player2 = {
        ships: [
          {
            locations: [[0, 0]],
            damage: [],
          },
        ],
      };
    });

    // reference for teardown, to be used with databases
    // after(function() {
    //   console.log('entire test suite completed');
    // });
    //
    // afterEach(function() {
    //   console.log('one unit test completed');
    // });

    it('should add to ship damage array at guessed coordinates on confirmed hit', function () {
      var player1Guess = [0, 0];
      fireAtLocation(player2, player1Guess);

      expect(player2.ships[0].damage[0]).to.deep.equal(player1Guess);
    });

    it('should confirm if the guess is a miss', function () {
      var player1Guess = [0, 1];

      expect(fireAtLocation(player2, player1Guess)).to.be.false;
    });

    it('should NOT record damage if there is no ship at the guessed coordinate', function () {
      var player1Guess = [1, 1];
      fireAtLocation(player2, player1Guess);

      expect(player2.ships[0].damage).to.be.empty;
    });
  });
});
