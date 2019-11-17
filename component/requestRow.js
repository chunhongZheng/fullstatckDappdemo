import React from 'react';
import {Table} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
class requestRow extends React.Component{
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
        </Row>
      )
    }



}
export default requestRow;
