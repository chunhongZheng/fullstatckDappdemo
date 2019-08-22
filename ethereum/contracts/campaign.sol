pragma solidity ^0.4.23;
contract CampaignFactory{
  address[]public deployedCampain;
  function createCampain(uint mininum)public{

    address newCampain = new Campaign(mininum,msg.sender);
    deployedCampain.push(newCampain);
  }
  function getDeployedCampaign()public view returns(address[]){
    return deployedCampain;
  }
}
/**众筹合约**/
contract Campaign{
   struct  Request{
     string description;//描述
     uint value;//项目筹款金额
     address reciptients;//受益人的地址
     bool complete;//项目是否完成
     uint  approvesCount; //给项目捐钱的投资人
     mapping (address => bool) approvers;

   }

    Request[] public requests;//管理员已经创建的请求
    address public manager; //众筹管理者地址
    uint public minunumContribute;//最小贡献量
    mapping (address => bool) public approvers;//存储所有已经捐钱的投资人的地址
    uint public  approvesCount;

    modifier restricted{
      require(msg.sender==manager);
      _;
    }
    //构造函数
    constructor(uint mininum, address _addr)public{
       manager=_addr;
       minunumContribute=mininum;
    }
        /**投资或者捐款**/
    function contribute() public payable{
      require(msg.value>minunumContribute);
      approvers[msg.sender]=true;
      approvesCount++;
    }
        //投资者创建请求函数
    function createRequest(string _desc,uint _value,address _addr) public restricted{
      Request memory newquest = Request({
        value:_value,
        description: _desc,
        reciptients: _addr,
        complete: false,
        approvesCount: 0
      }
     );
       requests.push(newquest);
    }
        //对请求投票
    function approvalRequest(uint index)public{
      Request storage request = requests[index];
      require (approvers[msg.sender]);
      require(!request.approvers[msg.sender]);
      request.approvers[msg.sender] = true;
      request.approvesCount++;
    }
        //当请求有足够的支持时，请求成立，发送地址给受益人账户
    function finalizeRequest(uint index)public restricted payable{
    Request storage request = requests[index];
    require(request.approvesCount>approvesCount/2);
    request.reciptients.transfer(request.value);
    request.complete = true;
    }
    function getSummary()public view returns(uint,uint,uint,uint,address){
     return(minunumContribute,address(this).balance,requests.length,approvesCount,manager);
    }
    function getRequestCount()public view returns(uint){
      return requests.length;
    }
}
