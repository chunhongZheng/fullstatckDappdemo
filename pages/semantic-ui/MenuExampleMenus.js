import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleMenus extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    <Menu>
      <Menu.Item
        name='browse'
        active={activeItem === 'browse'}
        onClick={this.handleItemClick}
      >
        Browse
      </Menu.Item>

      <Menu.Item
        name='submit'
        active={activeItem === 'submit'}
        onClick={this.handleItemClick}
      >
        Submit
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item
          name='signup'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
        >
          Sign Up
        </Menu.Item>

        <Menu.Item
          name='help'
          active={activeItem === 'help'}
          onClick={this.handleItemClick}
        >
          Help
        </Menu.Item>
      </Menu.Menu>
    </Menu>
      </div>

    )
  }
}
