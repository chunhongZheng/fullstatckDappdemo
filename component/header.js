import React from 'react';
import { Menu } from 'semantic-ui-react'
import {Router,Link} from '../routes';
export  default ()=>{
   return (
     <Menu style={{marginTop:'20px'}}>
       <Menu.Item>
         <Link route='/'>
         首页
         </Link>
       </Menu.Item>
       <Menu.Menu position='right'>
         <Menu.Item>
         <Link route='/campaign/new'>
         众筹
         </Link>

         </Menu.Item>
         <Menu.Item>          
          <Link route='/campaign/new'>
          +
          </Link>
         </Menu.Item>
       </Menu.Menu>
     </Menu>

   )

}
