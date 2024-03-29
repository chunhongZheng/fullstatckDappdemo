import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

const ButtonExampleLabeled = () => (
  <div>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    <Button as='div' labelPosition='right'>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic pointing='left'>
        2,048
      </Label>
    </Button>
    <Button as='div' labelPosition='left'>
      <Label as='a' basic pointing='right'>
        2,048
      </Label>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>
    </Button>
    <Button as='div' labelPosition='left'>
      <Label as='a' basic>
        2,048
      </Label>
      <Button icon>
        <Icon name='fork' />
      </Button>
    </Button>
  </div>
)

export default ButtonExampleLabeled
