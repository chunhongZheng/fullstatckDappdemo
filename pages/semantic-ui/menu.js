import React from 'react'
import { Menu } from 'semantic-ui-react'

const items = [
  { key: 'editorials', active: true, name: 'Editorials' },
  { key: 'review', name: 'Reviews' },
  { key: 'events', name: 'Upcoming Events' },
]

const MenuExampleProps = () =>(
  <div>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />  
   <Menu items={items} />
  </div>
)

export default MenuExampleProps
