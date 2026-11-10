// import Link from 'next/link'
import MainNav from './MainNav'
import * as styles from "./mainheader.module.scss"

const MainHeader = () => {
  return (
    <header id="main-header" className={styles['header']} aria-label="Global header">
      <div className={styles["inner"]}>
        dan johnston dot com
        <nav>
          <MainNav />
        </nav>
      </div>
    </header>
  )
}

export default MainHeader
