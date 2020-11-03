var expect = require('chai').expect;

// x in front of describe or it can flag for pending specs
describe('GAME INSTANCE FUNCTIONS', function () {
  describe('checkGameStatus', function () {
    var checkGameStatus = require('../game_logic/game_instance.js')
      .checkGameStatus;

    // pending test spec, does not include callback
    it('should tell me when the game is over', function () {
      var players = [
        {
          ships: [
            {
              locations: [[0, 0]],
              damage: [[0, 0]],
            },
          ],
        },
      ];
      var actual = checkGameStatus(players);
      expect(actual).to.be.false;
    });
  });

  describe('takeTurn', function () {
    var takeTurn = require('../game_logic/game_instance').takeTurn;
    var guess, player;

    beforeEach(function () {
      guess = function () {
        return [0, 0];
      };
      player = {
        ships: [
          {
            locations: [[0, 0]],
            damage: [],
          },
        ],
      };
    });

    it('should return false if the game ends', function () {
      var actual = takeTurn(player, guess);

      expect(actual).to.be.false;
    });
  });

  // mock database call
  function saveGame(callback) {
    setTimeout(function () {
      callback();
    }, 1000);
  }

  describe('saveGame', function () {
    it('should update save status', function (done) {
      var status = 'game not saved...';

      saveGame(function () {
        status = 'game saved!';

        done();

        expect(status).to.equal('game saved!');
      });
    });
  });
});
