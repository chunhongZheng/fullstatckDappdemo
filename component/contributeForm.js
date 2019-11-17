import React from 'react';
import { Button,Form,Checkbox,Input,Message} from 'semantic-ui-react';
import  Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';
class ContributeForm extends React.Component{
  constructor(props) {
     super(props);
     this.state = {
         value : "",
         loading : false,
         errorMessge : ""
     };

     // 为了在回调中使用 `this`，这个绑定是必不可少的
  //   this.handleClick = this.handleClick.bind(this);
//     this.handleChange = this.handleChange.bind(this);
  }
  onSubmit = async event=>{
    event.preventDefault();  //防止链接打开 URL 当点击提交按钮时阻止对表单的提交


    this.setState({loading: true});
    this.setState({errorMessge: ""});
    try{
     const campaign=Campaign(this.props.address);
     const accounts = await web3.eth.getAccounts();
     await campaign.methods.contribute().send(
       {
         from : accounts[0],
         value:web3.utils.toWei(this.state.value,'ether')
       }
     )
     //成功刷新页面
    console.log("投资成功，刷新页面")
    this.setState({value: ""});
    Router.replaceRoute('showCampaignDetail',{address: this.props.address});
    }catch(err){
      this.setState({errorMessge: err.message});
    }
   this.setState({loading: false});

  }
     render(){
    //    console.log("contributeForm.js==合约地址"+this.props.address);
     return(
       <Form   onSubmit={this.onSubmit}  error={!!this.state.errorMessge}>
         <Form.Field>
           <label>您想投资的金额</label>
           <Input label='ether'  labelPosition='right' placeholder='请输入您想投资的金额'
              value={this.state.value}
              onChange={event=>{
                this.setState({
                  value:  event.target.value
                })
              }}

            />
         <Button  loading={this.state.loading}   primary type='submit'>投资</Button>
         <Message   error  header='错误提示'  content={this.state.errorMessge}  />
      </Form.Field>
       </Form>
     )

     }

}

export default ContributeForm;
