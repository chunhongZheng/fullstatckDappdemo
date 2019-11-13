import React from 'react';
import { Menu } from 'semantic-ui-react'

export  default ()=>{
      <Menu>
        <Menu.Item>
          首页
        </Menu.Item>
        <Menu.Item>
          订单页
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
          >
            Sign Up
          </Menu.Item>
          <Menu.Item
            name='help'
          >
            Help
          </Menu.Item>
        </Menu.Menu>
      </Menu>
}
