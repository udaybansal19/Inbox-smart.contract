const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(
 'direct consider rookie pipe curious enjoy start culture stick benefit surprise orchard',
 'https://rinkeby.infura.io/v3/774fc39457b34e77bf31de8d2046d404'
);

const web3 = new Web3(provider,null,options);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account',accounts[0]);
    
    const result = await new web3.eth.Contract(JSON.parse(interface))
              .deploy({data : bytecode, arguments : ['Hi there!']})
              .send({from: accounts[0],
              gas: 3000000,
              });

              result.setProvider(provider);

    console.log('Contract deployed to', result.options.address); 
};
deploy();