import React from 'react';
import { Menu } from 'semantic-ui-react'
import {Router,Link} from '../routes';
export  default ()=>{
   return (
     <Menu style={{marginTop:'20px'}}>
       <Menu.Item>
         <Link route='/'>
         <a>首页</a>
         </Link>
       </Menu.Item>
       <Menu.Menu position='right'>
         <Menu.Item>
         <Link route='/campaign/new'>
         <a>众筹</a>
         </Link>

         </Menu.Item>
         <Menu.Item>
          <Link route='/campaign/new'>
          <a>+</a>
          </Link>
         </Menu.Item>
       </Menu.Menu>
     </Menu>

   )

}
