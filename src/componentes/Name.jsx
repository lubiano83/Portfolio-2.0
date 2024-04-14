/* Name */

import Boton from "./Boton";
import Titulo from "./Titulo";

const Name = () => {

  return (
    <section id="Name">
        <h1 className="display-1 animate__animated animate__backInLeft" id="nombre">José Pablo Lubiano</h1>
        <h1 className="display-4 animate__animated animate__backInRight" id="cargo">Aspiring Full-Stack Developer</h1>
        <div className="Name__container">
          <Titulo title="My CV:"/>
          <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/CV-Jose%CC%81%20Pablo%20Lubiano%20conv.pdf?alt=media&token=192c9456-4401-4629-95f9-20eef0586b1c" target="_blank">
            <Boton label="Link" />
          </a>
        </div>
    </section>
  )
}; export default Name;
