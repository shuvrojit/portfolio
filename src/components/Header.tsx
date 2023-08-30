import "../styles/Header.css"

const Header = () => {
  return (
    <>
      <header>
      <div className="header-intro">
        <p>Shuvrojit Biswas</p>
        <p>Full Stack Web Developer</p>
      </div>
      <nav className="header-navigation">
        <a href="#"><li>About</li></a>
        <a href="#"><li>Works</li></a>
        <a href="#"><li>Blog</li></a>
      </nav>
      <a href="#"><button className="contact-btn">Contact</button></a>
      </header>
    </>
  )
}


export default Header
