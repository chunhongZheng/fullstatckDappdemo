import {Link} from '../../routes'

export default () => (
  <div>
    <div>Welcome to Next.js!</div>
    <Link route='blog' params={{slug: 'hello-world'}}>
      <a>Hello world</a>
    </Link>
    or
    <Link route='/blog/hello-world'>
      <a>Hello world</a>
    </Link>
  </div>
)
