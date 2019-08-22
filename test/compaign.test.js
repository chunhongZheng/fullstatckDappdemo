const assert = require("assert");
const ganache = require('ganache-cli');
const Web3 = require('web3');
/*const options = { gasLimit: 8000000 };
const provider = ganache.provider(options);
const web3 = new Web3(provider);*/
const web3 = new Web3(ganache.provider());
/*const EventEmitter = require('events');
const emitter = new EventEmitter();
console.log("getMaxListeners:::"+emitter.getMaxListeners());
emitter.setMaxListeners(100);
require('events').EventEmitter.prototype._maxListeners = 0;*/
require('events').EventEmitter.defaultMaxListeners = 0;

// or 0 to turn off the limit
//emitter.setMaxListeners(0)
const compileFactory = require('../ethereum/build/CampaignFactory.json');
const compileCampain = require('../ethereum/build/Campaign.json');
var accounts;
var factory;
var campaign;
var campaignAddress;
beforeEach(async ()=>{
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(compileFactory.interface)).deploy({data:'0x'+compileFactory.bytecode}).send({
      from:accounts[0],gas:'1000000'});
  //console.log("factory contract address=="+factory.options.address);
  const createResult=   await factory.methods.createCampain('100').send({from: accounts[0],gas:'1000000'});//用来向合约发送交易并执行方法，因此可以改变合约的状态
  [campainAddress] =  await factory.methods.getDeployedCampaign().call()
    //console.log("campainAddress=="+campainAddress);
  // console.log("campainAddress==="+campainAddress);
  // campaign = new web3.eth.Contract(JSON.parse(compileCampain.interface), "0x92A44e283601FAcc32a1C8465a379db075aDd3cf");
   campaign = await new web3.eth.Contract(JSON.parse(compileCampain.interface),campainAddress);
  // console.log("campain contract address=="+campaign.options.address);
}
)
describe('campaign',()=>{
  it('deploy a factory and campaign',()=>{
   assert.ok(factory.options.address);
   assert.ok(campaign.options.address);
 })
 it('manager address',async()=>{
  const manager = await campaign.methods.manager().call();
  //console.log("manager::"+manager);
  assert (manager,accounts[0]);
  })
  it('allow people to contribute',async()=>{
    await campaign.methods.contribute().send({
      from:accounts[1],
      value:'200'
    });
    const isContribute = await campaign.methods.approvers(accounts[1]).call();
    assert(isContribute);
  })
  it('require a minimum contribute',async()=>{
    try{
      await campaign.methods.contribute().send({
        from:accounts[1],
        value:'5'
      });
      const isContribute = await campaign.methods.approvers(accounts[1]).call();
    //  console.log("isContribute=="+isContribute);
      assert(isContribute);
    }catch(err){
    //  console.log("err=="+err);
      assert(err);
    }
  })
  it('allows a manager to make request',async()=>{
    await campaign.methods.createRequest('buy pig','100',accounts[1]).send({
      from:accounts[0],
      gas:'1000000'
    });
    const request = await campaign.methods.requests(0).call();
    assert.equal('buy pig',request.description);
  })
}


)
