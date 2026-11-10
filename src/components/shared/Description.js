// import { BlocksRenderer } from '@strapi/blocks-react-renderer'
// import Cta from './Cta'

const Description = ({ children, content, ...props }) => {
  return (
    <div {...props}>
      { typeof content === 'string' &&
      <div dangerouslySetInnerHTML={{ __html: content }} />
      }
      {/* { typeof content === 'object' &&
      <BlocksRenderer content={content} />
      } */}
      { children }
    </div>
    // <div {...props}>
    //   <BlocksRenderer content={content} />
    //   {/* <BlocksRenderer content={content} blocks={{
    //     link: ({ children, url }) => <Cta href={url}>{children}</Cta>,
    //     // paragraph: ({ children }) => <p>{children}</p>
    //   }}/> */}
    // </div>
  )
}

export default Description
