import React,{Component} from 'react';
// export default()=>{
//   return <h1>hello index</h1>;
import factory from '../ethereum/factory';
class Compaindex extends Component{
  //初如化函数
  static async getInitialProps(){
    const campaign = await factory.methods.getDeployedCampaign().call();
    console.log(campaign);
    return{campaign};
  }

  async componentDidMount(){
   const campaignfactory= factory.options.address;
   console.log("campaignfactory=="+campaignfactory);

    const compaign = await factory.methods.getDeployedCampaign().call();
    console.log(compaign);
  }

  render(){
  //  return <h1>hello index</h1>;
    return <div>{this.props.campaign[0]}</div>;
  }
}
export default Compaindex;
