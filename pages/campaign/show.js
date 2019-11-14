import React from 'react';
import Layout from '../../component/Layout'
import Campaign from '../../ethereum/campaign';
import { Card} from 'semantic-ui-react';
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

  renderCampaignCard(){

    const{
    contractAddress,
    minunContribute,
    balance,
    requestCount,
    approvesCount,
    manager
    }=this.props;
    // const items = [
    //   (
    //      header : manager,
    //      meta : '管理员地址',
    //      description : '当前管理者创建了众筹列表'
    //
    //   )
    // ];


const items2 = [
  {
    header: manager,
    description:'当前管理者创建了众筹列表',
    meta: '管理员地址',
    style: {overflowWrap:'break-word'}
  },
  {
    header: minunContribute,
    description:'如果你想对此进行投资，至少需要投资大于当前的金额',
    meta: '最小贡献量',
    style: {overflowWrap:'break-word'}
  },
  {
    header: requestCount,
    description:'当前的管理者创建请求从合约中提钱，必须要大于50%的投资人同意',
    meta: '请求数量',
    style: {overflowWrap:'break-word'}
  },
  {
    header: approvesCount,
    description:'已经为当前众筹项目投资的投资人数量',
    meta: '投资人数量',
    style: {overflowWrap:'break-word'}
  },{
    header: balance,
    description:'当前众筹中，还剩下多少余额',
    meta: '众筹总的金额',
    style: {overflowWrap:'break-word'}
  }

]
     return <Card.Group items={items2} />;
  }



   render(){



      return (
        <Layout>
          <h3>众筹详情页面</h3>
          {this.renderCampaignCard()}
        </Layout>
      )


   }

}

export default CompaignShow;
