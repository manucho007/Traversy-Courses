var expect = require('chai').expect;

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

describe('Fire', () => {
  var fire = require('../game_logic/ship_methods').fire;
  var player;
  beforeEach(() => {
    player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: [],
        },
      ],
    };
  });
  // Teardown phase
  after(() => {
    console.log('Entire test suite completed');
  });

  afterEach(() => {
    console.log('One unit test completed');
  });
  it('Should record damage on a player ship at a given coordinate', () => {
    fire(player, [0, 0]);
    expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
  });
  it('Should not record damage if there is no ship at a given coordinate', () => {
    fire(player, [9, 9]);
    expect(player.ships[0].damage).to.be.empty;
  });
});
