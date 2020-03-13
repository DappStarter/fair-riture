require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot charge riot still erosion coral light army gather'; 
let testAccounts = [
"0x39e9504bd0a8a11c49dcfbbf6f8368a8e280e093079fc5b394b20671783c55bd",
"0x41ce8d8ae26e9b7fa078d6a02b2f170c66b8e8655fc15440577c1e684a93a798",
"0x81b740d76a6ce1d5980f3ec3ea44a2cebc09c7afc9585d7206aa76b1de501ade",
"0x67097d621b1361f921cbf4e37365e1b04f208fb86eaca4a63aa3aac2bb296749",
"0x91d0a264b6240121e6e9c247d5c679ea88e12b631880c06306e676fc4eca6863",
"0x371b39f8062dc877c9eb4b70e9c87a095138a91fdd3c16be1e0f5034ee5800bc",
"0x45906382a5e0ce8147c68fced1180e7237ce8c636c61798318bff127961d7b45",
"0xbc7059bbb6155e8e89ede5dc9934f903354bccb088607f031a1bb00af2eebae4",
"0x49ed6443d1b3eae20922b5e15c6f46a4bfc98d1b2b1491a273b74de79d2de9e8",
"0x1d4186b9371bddaf36ddd9cc8b93d1bb30b861b132be2df356e687943a340c95"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
