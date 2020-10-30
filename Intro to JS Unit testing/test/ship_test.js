var expect = require('chai').expect;

describe('Check for ship', () => {
  var checkForShip = require('../game_logic/ship_methods').checkForShip;

  it('Should correctly report no ship at a given player scoordenate', () => {
    player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
  it('Should correctly report hit at a given player scoordenate', () => {
    player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };
    expect(checkForShip(player, [0, 0])).to.be.true;
  });
  it('Should handle ships located at more than one coordinate', () => {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
      ],
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
    expect(checkForShip(player, [0, 0])).to.be.true;
  });
  it('Should be able to handle multiple ships', () => {
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
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
    expect(checkForShip(player, [8, 8])).to.be.true;
    expect(checkForShip(player, [6, 7])).to.be.true;
    expect(checkForShip(player, [6, 8])).to.be.true;
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

describe('Fire', () => {
  var fire = require('../game_logic/ship_methods').fire;
  it('Should record damage on a player ship at a given coordinate', () => {
    var player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: [],
        },
      ],
    };
    fire(player, [0, 0]);
    expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
  });
});
