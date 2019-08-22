import Web3 from 'web3';
var web3;
if(typeof window != 'undefined' && window.web3 != 'undefined'){
  web3 = new Web3(window.web3.currentProvider);
}else{
  const provider = new Web3.providers.HttpProvider(
    'https://ropsten.infura.io/v3/92b23057d31f463c98b8c7266d47febb'
  );
  web3 = new Web3(provider);
}
export default web3;
