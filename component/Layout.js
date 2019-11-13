import React from 'react';
import Header from './header';
import { Container } from 'semantic-ui-react'

export default props=>{
    return (
      <Container>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <div>
        {
          /**
          React推荐在父组件与子组件间写注释的时候，要加{}
          引进semantic样式
          ***/
        }
          <Header/>
           {props.children}
        </div>
    </Container>

    )


}
