import React,{Component} from 'react';
// export default()=>{
//   return <h1>hello index</h1>;
import factory from '../ethereum/factory';
import { Card,Button,Label,Icon} from 'semantic-ui-react';
//import 'semantic-ui-css/semantic.min.css';
import Layout from '../component/Layout';
import {Router,Link} from '../routes';

class Compaindex extends Component{
  //初如化函数,并没有调用javascript代码,next服务器依然会进行初始化
  static async getInitialProps(){
    const campaign = await factory.methods.getDeployedCampaign().call();
    console.log(campaign);

    return{campaign};
  }

  async componentDidMount(){
  // const campaignfactory= factory.options.address;
  // console.log("campaignfactory=="+campaignfactory);

  //  const compaign = await factory.methods.getDeployedCampaign().call();
  //  console.log(compaign);
  }

  renderCampaign(){
    const item=this.props.campaign.map(address=>{
         return {
           header: "合约地址:"+address,
           description:   <Link route='showCampaignDetail' params={{address: address}}><Label><Icon name='bitcoin' /> <a>查看众筹</a></Label></Link>,      
           fluid: true

         }
    })
    return <Card.Group items={item} />
  }


  render(){
  //  return <h1>hello index</h1>;
  //  return <div>{this.props.campaign[0]}</div>;
   return (
     <Layout>
     <div>
      <h3>众筹列表</h3>
      <Link route='/campaign/new'>
        <Button floated="right"  content='创建众筹' icon='add' labelPosition='right' primary/>
      </Link>


      {this.renderCampaign()}
     </div>
      </Layout>
   )
  }
}
export default Compaindex;
