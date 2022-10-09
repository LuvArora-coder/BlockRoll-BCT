// eslint-disable-next-line no-undef
var RupeeToken = artifacts.require("../src/contracts/RupeeToken.sol");
// eslint-disable-next-line no-undef
var freelance = artifacts.require("../src/contracts/freelance.sol");

module.exports = function(deployer) {
  deployer.deploy(RupeeToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    //var tokenPrice = 1000000000000000;
    return deployer.deploy(freelance, RupeeToken.address);
  });
};
