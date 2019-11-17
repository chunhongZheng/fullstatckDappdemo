import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  //'0xD9113179747503F1296e4b5F00039eaA0765243E'   //Ropsten 测试网络工厂地址
  '0x9f1dC496F3752A070C1926974A99cd0C14302f9D'   //kovan 测试网络工厂地址
);
export default instance;
