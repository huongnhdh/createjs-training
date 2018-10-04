var Migrations = artifacts.require("./Migrations.sol");
var HelloWorlds = artifacts.require("./HelloWorld.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(HelloWorlds);
};
