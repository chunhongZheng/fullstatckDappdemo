import React from 'react';
import Layout from '../../component/Layout'


class CompaignShow extends React.Component{

  static async getInitialProps(props){
    console.log(props.query.address);
    return {};
  }
   render(){

      return (
        <Layout>
          <h4>{this.props.url.query.address}</h4>
          <h3>hello caspar</h3>
        </Layout>
      )


   }

}

export default CompaignShow;
