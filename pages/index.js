import React,{Component} from 'react';
// export default()=>{
//   return <h1>hello index</h1>;
import factory from '../ethereum/factory';
class Compaindex extends Component{
/*  static async getInitialprops(){
    const compaign = await factory.methods.getDeployedCampaign().call();
    console.log(compaign);
    return{compaign};
  }*/

  async componentDidMount(){
   const campaignfactory= factory.options.address;
   console.log("campaignfactory=="+campaignfactory);

    const compaign = await factory.methods.getDeployedCampaign().call();
    console.log(compaign);
  }

  render(){
    return <h1>hello index</h1>;
  //  return <div>{this.props.compaign[0]}</div>;
  }
}
export default Compaindex;
