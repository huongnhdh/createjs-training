var Migrations = artifacts.require("./Migrations.sol");
var ScoreStore = artifacts.require("./ScoreStore");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ScoreStore);
};
