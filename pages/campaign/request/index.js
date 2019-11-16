import React from 'react';
import {Link} from '../../../routes';
import {Button} from 'semantic-ui-react';
import Layout from '../../../component/Layout';
class CompaignRequestIndex extends React.Component{

    static async getInitialProps(props){
       const {address}=props.query;
       return {address};
    }
    render(){
  //  console.log("请求页面::合约地址"+this.props.address);
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
