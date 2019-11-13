import React from 'react';
import { Menu } from 'semantic-ui-react'

export  default ()=>{
   return (
     <Menu>
       <Menu.Item>
         首页
       </Menu.Item>
       <Menu.Menu position='right'>
         <Menu.Item
         >
          众筹
         </Menu.Item>
         <Menu.Item
         >
          +
         </Menu.Item>
       </Menu.Menu>
     </Menu>

   )

}
