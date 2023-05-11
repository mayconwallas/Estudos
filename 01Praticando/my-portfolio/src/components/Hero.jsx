import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile.jpg' className="profile-img" width={300} height={300} alt="foto do Maycon Wallas" />
      <div className="hero-text">
        <h1>Olá, Eu sou Maycon Wallas</h1>
        <p>
        Apaixonado por programação, há mais de 1 ano tenho me empenhado em adquirir habilidades e competências no ramo, em especial na área de Front-end, com o objetivo de desenvolver sites e aplicações que possibilitem uma experiência inovadora ao usuário.
        </p>
        <div className="social-icons">
        <a
              href="https://github.com/mayconwallas"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/maycon-wallas-balbino-da-silva-702710179/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;