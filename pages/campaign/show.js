import React from 'react';
import Layout from '../../component/Layout'
import Campaign from '../../ethereum/campaign';

class CompaignShow extends React.Component{

  static async getInitialProps(props){
  //  console.log(props.query.address);
   const campaign= Campaign(props.query.address);  //构建众筹实例
   const summary=await campaign.methods.getSummary().call();
   //console.log(summary);
   return {
     contractAddress: props.query.address,
     minunContribute: summary[0],
     balance: summary[1],
     requestCount:summary[2],
     approvesCount:summary[3],
     manager:summary[4]
   };  //存储在props对象里面
  }
   render(){

    const{
    contractAddress,
    minunContribute,
    balance,
    requestCount,
    approvesCount,
    manager
    }=this.props;

    console.log("contractAddress=="+contractAddress);
    console.log("minunContribute=="+minunContribute);
    console.log("manager=="+manager);

      return (
        <Layout>
          <h3>hello caspar</h3>
        </Layout>
      )


   }

}

export default CompaignShow;
