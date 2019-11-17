const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
// const {interface,bytecode} = require('./compile');
const compileFactory = require('./build/CampaignFactory.json');
/**
此处provider配置实际metamask的助记词
*/
const provider = new HDWalletProvider(
  'shoe tool cat news broccoli neutral invest sure buyer rice alien smooth',
  //'silver trophy quarter faint cabin gasp then layer fatigue goat deny false',
  //'https://ropsten.infura.io/v3/92b23057d31f463c98b8c7266d47febb'
  'https://kovan.infura.io/v3/92b23057d31f463c98b8c7266d47febb'

);
const web3 = new Web3(provider);
const deploy = async()=>{
  // console.log(interface);
const accounts = await web3.eth.getAccounts();
const result = await new web3.eth.Contract(JSON.parse(compileFactory.interface)).deploy({data:'0x'+compileFactory.bytecode})
 //上式中helloworld合约中有参数，所以是{data:'0x'+bytecode,arguments:['jonson']}
 //而Lottery合约中是构造函数，所以是{data:'0x'+bytecode}
  .send({from:accounts[0],gas:'1000000'});
  console.log('contract deployed to',result.options.address);
}
deploy();
// 0xbd19A604c769552a169E00DEb3e2a9265927e86D
