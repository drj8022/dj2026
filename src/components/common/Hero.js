import { kebabize } from "@/libs/helpers"
import Animations from '@/components/shared/Animations'
import ConditionalWrap from "@/components/shared/ConditionalWrap"
import Cta from '@/components/shared/Cta'
import Description from '@/components/shared/Description'
// import Image from '@/components/shared/Image'
import Title from '@/components/shared/Title'
import * as styles from './hero.module.scss'
import Image from "next/image"

const Hero = ({ animation=null, children, ctas=[], description, bgImage, jumplink=null, layout='Basic', title }) => {
  jumplink = kebabize(jumplink)
  layout = kebabize(layout)

  return (
    <section id={jumplink} className={styles[layout]}>
      { bgImage &&
      <Image
        loading="eager"
        src={bgImage.src}
        alt={bgImage.alt}
        fill={true}
        style={{objectFit:'cover'}}
      />
      }
      <div className={styles['inner']}>
        <div className={styles['copy']}>
          { title &&
          <ConditionalWrap condition={animation}
            wrap={(wrapped) => <Animations animation={animation} rootMargin={'-50px 0px'}>{wrapped}</Animations>}
          >
            <Title {...{copy: title, header: "h1"}} className={styles['title']} />
          </ConditionalWrap>
          }
          { description &&
          <ConditionalWrap condition={animation}
            wrap={(wrapped) => <Animations animation={animation}>{wrapped}</Animations>}
          >
            <Description content={description} className={styles['description']} />
          </ConditionalWrap>
          }
          { children &&
            children
          }
          { ctas && ctas.length > 0 &&
            <div className={styles['cta-group']}>
              { ctas.map((cta, i) => (
              <ConditionalWrap condition={animation} key={cta.id}
                wrap={(wrapped) => <Animations animation={animation} i={i} rootMargin={'-50px 0px'}>{wrapped}</Animations>}
              >
                <Cta {...cta} key={cta.id} data-gtm="teaser-cta" />
              </ConditionalWrap>
              ))}
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default Hero
