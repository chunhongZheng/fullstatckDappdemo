import React from 'react';
import {Table,Button,Message} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import {Router,Link} from '../routes';
class requestRow extends React.Component{

  constructor(props) {
     super(props);
     this.state = {
         approveLoading : false,
         finalizeRequestLoading:false,
         errorMessge : ""
     };
  }

  //投票
  onApprovalRequest = async event=>{
      try{
      this.setState({approveloading:true,errorMessge:""});
      //console.log("this.props.address=="+this.props.address);
      const campaign=Campaign(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.approvalRequest(this.props.id).send(
        {
          from : accounts[0]
        }
      );
      this.setState({approveloading:false});
      }catch(err){
        console.log(err);
        this.setState({errorMessge: err.message});
        this.setState({approveloading:false});
      }
    Router.replaceRoute('viewRequestList',{address: this.props.address});
   }
  onFinalizeRequest = async event=>{
    try{
    this.setState({finalizeRequestLoading:true,errorMessge:""});
    const campaign=Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send(
      {
        from : accounts[0]
      }
    );
      this.setState({finalizeRequestLoading:false});
    }catch(err){
      console.log(err);
      this.setState({finalizeRequestLoading:false});
      this.setState({errorMessge: err.message});
    }
    Router.replaceRoute('viewRequestList',{address: this.props.address});
  }


    render(){
      const {Row,Cell} =Table;
      const {id,request,approvesCount} =this.props;
      return(
        <Row disabled={request.complete}>
         <Cell>{parseInt(id)+1}</Cell>
         <Cell>{request.description}</Cell>
         <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
         <Cell>{request.reciptients}</Cell>
         <Cell>{request.approvesCount}/{approvesCount}</Cell>

         <Cell>
         {
           request.complete?null:<Button loading={this.state.approveloading} color="green" onClick={this.onApprovalRequest}>同意</Button>
         }
         </Cell>
         <Cell>
         {
           request.complete?null:<Button loading={this.state.finalizeRequestLoading} color="purple" onClick={this.onFinalizeRequest}>完成</Button>
         }
         </Cell>
        </Row>

      )
    }



}
export default requestRow;
