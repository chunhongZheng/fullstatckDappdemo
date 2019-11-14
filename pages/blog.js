import React from 'react'
import {Router} from '../routes'

export default class Blog extends React.Component {
  // handleClick () {
  //   // With route name and params
  //   Router.pushRoute('blog', {slug: 'hello-world'})
  //   // With route URL
  //   Router.pushRoute('/blog/hello-world')
  // }
  //
  render () {
    return (
      <div>
        <div>{this.props.url.query.slug}</div>
          <div>{this.props.url.query.address}</div>
      </div>
    )
  }
}
