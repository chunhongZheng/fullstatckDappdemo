import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  //'0xD9113179747503F1296e4b5F00039eaA0765243E'   //Ropsten 测试网络工厂地址
  '0x4D6257B0EeCD7fE5577AF05782fA25c5b8751d8B'   //kovan 测试网络工厂地址
);
export default instance;
