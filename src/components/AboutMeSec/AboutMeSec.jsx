import React from "react";
import HeroImg2 from "../../images/projectPics/Aaditya1.png";
import DotsFrame1 from "../../images/SVGs/DotsFrame1.svg";
import DotsFrame2 from "../../images/SVGs/DotsFrame2.svg";
import "./aboutmesec.css";

function AboutMeSec() {
  return (
    <div className="abtMeParent">
      <section className="abtMeSec">
        <div className="abtMeHead">
          <p>
            <span>#</span>about-me
          </p>
        </div>
        <div className="abtMeDesc">
          <p>Hello, i'm Aaditya!</p>
          <br />
          <p>
            A passionate web developer who embarked on a journey into the
            ever-evolving world of web technologies. With my foundation in
            HTML5, CSS3, and JavaScript, I've delved into the exciting realm of
            React.js and the MERN stack.
            <br />
            As a recent 2023 graduate, I am driven by a relentless desire to
            create engaging and dynamic web experiences. I've honed my skills
            through a variety of projects, each one pushing the boundaries of
            what's possible on the web.
          </p>
          <br />
          <p>
            My enthusiasm for web development knows no bounds, and I'm
            constantly seeking new challenges to conquer and innovative projects
            to build. Whether it's crafting sleek user interfaces, optimizing
            website performance, or tackling complex data-driven applications,
            I'm always up for the task.
            <br />
            Join me on this exciting journey as we create digital experiences
            that leave a lasting impression. Let's connect and bring your web
            development ideas to life! Feel free to customize and expand upon
            this bio to make it truly reflect your personality and aspirations
            as a web developer. Good luck with your job search and future
            projects!
          </p>
          <br />
          <br />
          <a
            href="https://drive.google.com/file/d/11o9THa4BZLC9bQxLqW7bWFKKtLOszpMi/view?usp=sharing"
            download="Aaditya_Resume.pdf"
            target="_"
          >
            <button>Download Resume {"<~~>"}</button>
          </a>
        </div>
        <img id="abtMeImg1" src={DotsFrame1} alt="" />
        <img id="abtMeImg2" src={DotsFrame2} alt="" />
        <img id="abtMeImg3" src={HeroImg2} alt="" />
      </section>
    </div>
  );
}

export default AboutMeSec;
