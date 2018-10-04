var Migrations = artifacts.require('./Migrations.sol')
var FoodSafe = artifacts.require('./FoodSafe.sol')

module.exports = function (deployer) {
  deployer.deploy(Migrations)
  deployer.deploy(FoodSafe)
}
