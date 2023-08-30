import "../styles/Home.css"
// import ProfilePic from "../assets/profile-pic.svg"
import ProfilePic from "../assets/profile.svg"

const Home = () => {
  return (
    <>
      <main>
        <div className="main-section">
        <h1>Full Stack Developer<br />& Designer <br />
        based in Bangladesh</h1>
      <p>I help clients translate ideas into business products. I have worked with a lot of cool people. Most recently @Lorem and @Ipsum</p>
          <div className="main-section-btn">
            <button id="see-works-btn">See Works</button>
            <button id="hire-me-btn">Hire Me</button>
          </div>
          </div>

        <img id="profile-pic" src={ProfilePic} alt="profile" />
      </main>
    </>

  )

}

export default Home
