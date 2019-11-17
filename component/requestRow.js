import React from 'react';
import {Table,Button,Message} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
class requestRow extends React.Component{

  constructor(props) {
     super(props);
     this.state = {
         loading : false,
         errorMessge : ""
     };
  }

  //投票
  onApprovalRequest = async event=>{
      try{
      this.setState({loading:true,errorMessge:""});
      //console.log("this.props.address=="+this.props.address);
      const campaign=Campaign(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.approvalRequest(this.props.id).send(
        {
          from : accounts[0]
        }
      );
      }catch(err){
        console.log(err);
        this.setState({errorMessge: err.message});
      }
      this.setState({loading: false});
  }


    render(){
      const {Row,Cell} =Table;
      const {id,request,approvesCount} =this.props;
      return(
        <Row>
         <Cell>{id}</Cell>
         <Cell>{request.description}</Cell>
         <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
         <Cell>{request.reciptients}</Cell>
         <Cell>{request.approvesCount}/{approvesCount}</Cell>
         <Cell><Button loading={this.state.loading} color="green" onClick={this.onApprovalRequest}>同意</Button></Cell>
        </Row>

      )
    }



}
export default requestRow;
