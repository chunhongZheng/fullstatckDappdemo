import React from 'react';
import {Link} from '../../../routes';
import {Button} from 'semantic-ui-react';
import Layout from '../../../component/Layout';
import Campaign from '../../../ethereum/campaign';
class CompaignRequestIndex extends React.Component{

    static async getInitialProps(props){
       const {address}=props.query;
       const campaign= Campaign(address);
       const requestCount=await campaign.methods.getRequestCount().call();
       //获取所有的requests,并将之填充至数组变量requests
       const requests = await Promise.all(
           Array(requestCount).fill().map((element,index)=>{
              return campaign.methods.requests(index).call();
           })
       );
       return {address,requestCount,requests};
    }
    render(){
    console.log("请求列表数据"+this.props.requests);
    return (
       <Layout>
            <h3>请求列表</h3>
            {/*
             //第一种写法
            // <Link route='createRequest' params={{address: this.props.address}}>
            //   <a> <Button primary content="增加请求"/> </a>
            // </Link> */
          }
          {/**
             第二种写法
            **/}
            <Link  route={`/campaign/${this.props.address}/request/createRequest`} >
               <a> <Button primary content="增加请求"/> </a>
            </Link>
       </Layout>
    )
    }



}
export default CompaignRequestIndex;
