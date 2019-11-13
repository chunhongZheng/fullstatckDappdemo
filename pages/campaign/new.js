import React from 'react';
import { Button,Form,Checkbox,Input} from 'semantic-ui-react';
import Layout from '../../component/Layout';
import web3 from '../../ethereum/web3';
import factory from '../../ethereum/factory';
class CreateCampaignForm extends React.Component{
  constructor(props) {
     super(props);
     this.state = {
         minunum : "",
         message : ""
     };

     // 为了在回调中使用 `this`，这个绑定是必不可少的
  //   this.handleClick = this.handleClick.bind(this);
//     this.handleChange = this.handleChange.bind(this);
  }

  onSubmit = async event=>{
       event.preventDefault();  //防止链接打开 URL 当点击提交按钮时阻止对表单的提交
       const accounts = await web3.eth.getAccounts();
       console.log(accounts);
       this.setState({message:'开始创建众筹项目.....'});
       await factory.methods.createCampain(this.state.minunum).send(
         {
           from : accounts[0]
         }
       )
       this.setState({message:'创建众筹项目成功.....'});


  }

 //console.log(this.state.minunum);
  render(){
    console.log(this.state.minunum);
    return (
    <Layout>
      <h3>创建你的众筹项目</h3>
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>请输入最小贡献量</label>
          <Input label='wei'  labelPosition='right' placeholder='请输入最小贡献量'
             value={this.state.minunum}
             onChange={event=>{
               this.setState({
                 minunum: event.target.value
               })
             }}

           />
        </Form.Field>
        <Button  primary type='submit'>确认</Button>
        <p>{this.state.message}</p>
      </Form>
    </Layout>
    )

  }



}

export default CreateCampaignForm;
