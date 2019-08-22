import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xD9113179747503F1296e4b5F00039eaA0765243E'
);
export default instance;
