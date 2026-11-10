import { kebabize } from "@/libs/helpers"
import Animations from '@/components/shared/Animations'
import ConditionalWrap from "@/components/shared/ConditionalWrap"
import Cta from '@/components/shared/Cta'
import Description from '@/components/shared/Description'
import Image from '@/components/shared/Image'
import Title from '@/components/shared/Title'
import * as styles from './teaser.module.scss'

const Teaser = ({ animation=null, children, ctas=[], description, eyebrow, images=[], jumplink=null, layout='Basic', meta, props, title }) => {
  jumplink = kebabize(jumplink)
  layout = kebabize(layout)

  return (
    <section id={jumplink} className={styles[layout]} {...props}>
      <div className={styles['inner']}>
        { images && images.length > 0 &&
        <div className={styles['images']}>
          { images.map((image, i) => (
          <ConditionalWrap condition={animation} key={image.id}
            wrap={(wrapped) => <Animations animation={animation} i={i} rootMargin={'-200px 0px'}>{wrapped}</Animations>}
          >
            <Image {...image} key={image.id} />
          </ConditionalWrap>
          ))}
        </div>
        }
        <div className={styles['copy']}>
          { eyebrow &&
          <ConditionalWrap condition={animation}
            wrap={(wrapped) => <Animations animation={animation} rootMargin={'-50px 0px'}>{wrapped}</Animations>}
          >
            <div className={styles['eyebrow']}>{eyebrow}</div>
          </ConditionalWrap>
          }
          { title &&
          <ConditionalWrap condition={animation}
            wrap={(wrapped) => <Animations animation={animation} rootMargin={'-50px 0px'}>{wrapped}</Animations>}
          >
            <Title {...title} className={styles['title']} />
          </ConditionalWrap>
          }
          { meta &&
          <ConditionalWrap condition={animation}
            wrap={(wrapped) => <Animations animation={animation}>{wrapped}</Animations>}
          >
            <div className={styles['meta']}>
              { meta.role &&
              <div>
                <span>Role:</span>
                <strong>{meta.role}</strong>
              </div>
              }
              { meta.client &&
              <div>
                <span>Client:</span>
                <strong>{meta.client}</strong>
              </div>
              }
              { meta.office &&
              <div>
                <span>Office:</span>
                <strong>{meta.office}</strong>
              </div>
              }
              { meta.time &&
              <div>
                <span>Build:</span>
                <strong>{meta.time}</strong>
              </div>
              }
              { meta.launch &&
              <div>
                <span>Launch:</span>
                <strong>{meta.launch}</strong>
              </div>
              }
              { meta.tech &&
              <div>
                <span>Tech:</span>
                <strong>{meta.tech}</strong>
              </div>
              }
            </div>
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

export default Teaser
