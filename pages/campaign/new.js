import React from 'react';
import { Button,Form,Checkbox } from 'semantic-ui-react';
import Layout from '../../component/Layout';

const CreateCampaignForm = () => {
  return (
  <Layout>
    <h3>创建你的众筹项目</h3>
    <Form>
      <Form.Field>
        <label>请输入最小贡献量</label>
        <input placeholder='请输入最小贡献量' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button  primary type='submit'>确认</Button>
    </Form>
  </Layout>
  )


}

export default CreateCampaignForm;
