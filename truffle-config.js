// https://docs.avax.network/build/tutorials/smart-contracts/verify-smart-contracts-with-truffle-verify#fuji-testnet

const HDWalletProvider = require('@truffle/hdwallet-provider');
const { snowtraceApiKey, mnemonic } = require('./secrets.json');

module.exports = {
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    snowtrace: snowtraceApiKey,
  },
  networks: {
    fuji: {
      provider: () => new HDWalletProvider(mnemonic, `https://api.avax-test.network/ext/bc/C/rpc`),
      network_id: 1,
      timeoutBlocks: 200,
      confirmations: 5,
    },
  },
  compilers: {
    solc: {
      version: '^0.8.0',
    },
  },
};
