import React from 'react';
import {Link} from '../../../routes';
import Layout from '../../../component/Layout';
import Campaign from '../../../ethereum/campaign';
import { Icon,Label,Menu,Table,Button} from 'semantic-ui-react';
import RequestRow from '../../../component/requestRow';
class CompaignRequestIndex extends React.Component{

    static async getInitialProps(props){
       const {address}=props.query;
       const campaign= Campaign(address);
       const requestCount=await campaign.methods.getRequestCount().call();//请求数量
       const approvesCount=await campaign.methods.approvesCount().call();//获取投资人的数量
      // console.log("requestCount=="+requestCount);
       //获取所有的requests,并将之填充至数组变量requests
       //现在一直是只有返回一条数据，并不会加载所有
       const requests = await Promise.all(
           Array(requestCount).fill().map(async(element,index)=>{
          //   console.log("fill index=="+index);
          //    console.log("requestCount=="+requestCount);
              return await campaign.methods.requests(index).call();
           })
       );
    //  console.log("888=="+requests.length);
       return {address,requestCount,requests,approvesCount};
    }
    renderRow(){
      //console.log(this.props.requests);
       return this.props.requests.map(
         (request,index)=>{
           return (
              <RequestRow
               key={index}
               id={index}
               request={request}
               approvesCount={this.props.approvesCount}
               address={this.props.address}/>
           );  //此处分号不能少，少了会报错，神坑
         }
       )
    }





    //string -> jsonObj JSON.parse(jsonString);
    //jsonObj -> string JSON.stringify(jsArr);
    render(){
    //console.log("请求列表数据"+JSON.stringify(this.props.requests));
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
            <Table celled>
              <Table.Header>
               <Table.Row>
                 <Table.HeaderCell>序号</Table.HeaderCell>
                 <Table.HeaderCell>项目描述</Table.HeaderCell>
                 <Table.HeaderCell>请求金额(ether)</Table.HeaderCell>
                 <Table.HeaderCell>受益人地址</Table.HeaderCell>
                 <Table.HeaderCell>投票人数/总人数</Table.HeaderCell>
                 <Table.HeaderCell>是否投票</Table.HeaderCell>
                 <Table.HeaderCell>是否完成</Table.HeaderCell>
               </Table.Row>
              </Table.Header>
              <Table.Body>
                 {this.renderRow()}
              </Table.Body>
            </Table>






















       </Layout>
    )
    }



}
export default CompaignRequestIndex;
