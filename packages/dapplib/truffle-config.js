require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food town rice night mistake coral light army genuine'; 
let testAccounts = [
"0x90e0f396cde3e0b3a118661de566d39d70678545a044743cd289765921a2961f",
"0xb62d8b5b84ae8616d2f60b9c0c100c4c2f05c727cbe961ab9d8ac07998e441dd",
"0xd394bc231c5cf62c0d3e883fe7e43e52480ef053110c74b319bae6a07378143a",
"0xdb50bc1e411062c74483430fa88cc10284ce1a677079ad1f7437bd63e47eb096",
"0xf2c0fbcb2c6933b82b80e0cb59d7456682072310b12febbbeff2c1fa992b6b72",
"0xb2b6367a10900dbce3453bdb8387bdc170c8df7c414dd14bfc560db38c943186",
"0xb8982bbe682c42ca5e67bf34a5fb3f93ff3fb0fd94d6d22042539cadbf3066cd",
"0xd2d76a4f40e8c9e5d16d296457acd4ff6fd68028bbf46579984f7c873d33cda3",
"0x87975db1ff1be7fe78497393aaf1e500c63fe0bd9edc5ad96506d0621f5ca87b",
"0x3d201b2414a75e62a31b0a0d25569f48487cea58493a959aa885f118f9d8683c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

