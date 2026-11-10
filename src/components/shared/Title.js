import { createElement } from 'react'

const Title = ({ children, copy, header='h3', ...props }) => {
  return createElement(header, props, children || copy)
}

export default Title
