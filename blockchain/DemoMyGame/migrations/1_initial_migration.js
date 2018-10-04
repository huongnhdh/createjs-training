var Migrations = artifacts.require("./Migrations.sol");
var MyGame = artifacts.require("./MyGame.sol");


module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MyGame);
};
