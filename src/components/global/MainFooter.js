// import { cacheLife } from 'next/cache'
import Link from 'next/link'
import MainNav from './MainNav'
import * as styles from "./mainfooter.module.scss"

// async function getCurrentYear() {
//   'use cache'
//   cacheLife('max')
//   return new Date().getFullYear()
// }
// await getCurrentYear()


const MainFooter = () => {
  return (
    <footer id="main-footer" className={styles['footer']} aria-label="Global footer">
      <div className={styles['inner']}>
        <div className={styles['nav']}>
          <MainNav />
        </div>
        <div className={styles['social']}>
          <Link href='https://www.linkedin.com/in/drj8022/'>LinkedIn</Link>
          <Link href='https://github.com/drj8022'>GitHub</Link>
        </div>
        <div className={styles['legal']}>
          <div>Thanks for visiting!</div>
          <div>No rights reserved. Copyleft 2026.</div>
          <div>This text may not be clicked.</div>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter
