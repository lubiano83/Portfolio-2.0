/* About */

import Titulo from "../componentes/Titulo";

const About = () => {
  return (
    <section id="About">
        <Titulo title="About Me:"/>
        <div className="About__container">
          <div className="About__img animate__animated animate__bounceInLeft">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Flugar-trabajo.webp?alt=media&token=83e02363-ea61-4f60-905f-c75413372b75" alt="oficina" />
          </div>
          <div className="About__texto animate__animated animate__bounceInRight">
              <h5>After working for 10 years in the position of Branch Manager in an automotive company in Viña del Mar, Chile, achieving excellent results, I decided to change direction in my professional career.</h5>
              <h5>Today I am studying a full stack web development career, which will not end there, but will continue specializing in the different tools that I consider essential.</h5>
              <h5 className="h5__last">In the short term, I intend to dedicate 100% of my time to web development and be able to make a difference with the rest of the developers, complementing it with my work experience and my business approach.</h5>
          </div>
        </div>
    </section>
  )
}; export default About;
