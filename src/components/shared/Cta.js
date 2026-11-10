import Link from 'next/link'

const Cta = ({ href, id, label, page, children, ...props }) => {
  // strapi does not support conditional fields
  // so do our error checking here
  if (!page && (!href && (!label || !children))) {
    return <></>
  }

  // default to linked pages with UGC overrides
  const path = href || page?.path
  const copy = children || label || page?.title

  return path.toLowerCase().startsWith('http') || path.toLowerCase().startsWith('mailto') || path.toLowerCase().startsWith('tel') ?
    <a href={path} target='_blank' rel='noreferrer' {...props} >
      { copy }
    </a> :
    <Link href={path} {...props}>
      { copy }
    </Link>
}

export default Cta
