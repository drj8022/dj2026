'use client'

const scrollToHash = hash => {
  const el = document.getElementById(hash)
  el?.scrollIntoView({ behavior: "smooth" })
}

const MainNav = () => {
  return (
    <>
      <button onClick={() => scrollToHash('about')}>About</button>
      <button onClick={() => scrollToHash('skills')}>Skills</button>
      <button onClick={() => scrollToHash('work')}>Work</button>
      <button onClick={() => scrollToHash('contact')}>Contact</button>
    </>
  )
}

export default MainNav
