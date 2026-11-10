'use client'

import { InView } from "react-intersection-observer"
import { kebabize } from "@/libs/helpers"

const Animations = ({ animation='Slide Up', children, i=0, rootMargin='-100px 0px', ...props }) => {
  animation = kebabize(animation)

  const handleInView = (inView, entry) => {
    if (inView) {
      entry.target.classList.add('active')
    }
  }

  return (
    <InView
      className={`animation-${animation}`}
      triggerOnce={true}
      rootMargin={rootMargin}
      onChange={(inView, entry) => handleInView(inView, entry)}
      style={{'--i': i}}
      {...props}
    >
      { children }
    </InView>
  )
}

export default Animations
