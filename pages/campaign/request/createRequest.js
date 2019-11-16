import React from 'react';
import { Button,Form,Checkbox,Input,Message,Header,Icon,Label,Grid} from 'semantic-ui-react';
import Layout from '../../../component/Layout';
import web3 from '../../../ethereum/web3';
import Campaign from '../../../ethereum/campaign';
import {Router,Link} from '../../../routes';
class CompaignCreateRequest extends React.Component{
  constructor(props) {
     super(props);
     this.state = {
         description :"",
         amount:"",
         benefitAddress:"",
         loading : false,
         message:"",
         errorMessge : ""
     };

     // 为了在回调中使用 `this`，这个绑定是必不可少的
  //   this.handleClick = this.handleClick.bind(this);
//     this.handleChange = this.handleChange.bind(this);
  }
  //初始化
  static async getInitialProps(props){
     return {contractAddress:props.query.address}

  }
  onSubmit = async event=>{
       this.setState({errorMessge:'',loading: true});  //清空错误信息
       event.preventDefault();  //防止链接打开 URL 当点击提交按钮时阻止对表单的提交
       const {description,amount,benefitAddress}=this.state;
       try{
         const accounts = await web3.eth.getAccounts();
         this.setState({message:'开始创建请求.....'});
         //console.log("contractAddress=="+this.props.contractAddress);
         const campaign= Campaign(this.props.contractAddress);

         await campaign.methods.createRequest(description,web3.utils.toWei(amount,'ether'),benefitAddress).send(
           {
             from : accounts[0]
           }
         );
         this.setState({message:'创建请求成功.....'});
         Router.replaceRoute('viewRequestList',{address: this.props.contractAddress});
       }catch(err){
            this.setState({errorMessge: err.message});
            this.setState({message:'创建请求失败.....'});
       }
     this.setState({loading:false});


  }



    render(){

      return (
        <Layout>
        <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
          <Header as='h3' icon textAlign='center'>
           <Icon name='users' circular  size="mini"/>
           <Header.Content>创建请求页面</Header.Content>
          </Header>
          <Link route='viewRequestList' params={{address: this.props.contractAddress}}>
            <a> <Button primary content="返回"/> </a>
          </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
         <Grid.Column width={16}>
        <Form onSubmit={this.onSubmit}  error={!!this.state.errorMessge} >
          <Form.Field>
            <label>请输入项目描述内容</label>
            <Input  label={{ icon: 'file text outline' }} labelPosition='right' placeholder='请输入项目描述内容'
               value={this.state.description}
               onChange={event=>{
                 this.setState({
                   description: event.target.value
                 })
               }}

             />

       </Form.Field>
       <Form.Field>
         <label>项目所需金额(ether)</label>
         <Input  label="ether" labelPosition='right' placeholder='请输入项目所需要的金额'
            value={this.state.amount}
            onChange={event=>{
              this.setState({
                amount: event.target.value
              })
            }}

          />

       </Form.Field>
       <Form.Field>
        <label>受益人地址</label>
        <Input   placeholder='请输入受益人地址'
         value={this.state.benefitAddress}
         onChange={event=>{
           this.setState({
             benefitAddress: event.target.value
           })
         }}
         />
       </Form.Field>
      <Button  loading={this.state.loading}   primary type='submit'>确认</Button>
       <Message   error  header='错误原因'  content={this.state.errorMessge}  />
        <p>{this.state.message}</p>
    </Form>
    </Grid.Column>
    </Grid.Row>
    </Grid>
   </Layout>

      )


    }



}
export default CompaignCreateRequest;
