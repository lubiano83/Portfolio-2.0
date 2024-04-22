/* Name */

import Boton from "../componentes/Boton";
import Titulo from "../componentes/Titulo";

const Name = () => {

  return (
    <section id="Name">
        <h1 className="display-1 animate__animated animate__backInLeft" id="nombre">José Pablo Lubiano</h1>
        <h1 className="display-4 animate__animated animate__backInRight" id="cargo">Front-End Developer</h1>
        <div className="Name__container">
          <Titulo title="My CV:"/>
          <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/Jose%CC%81%20Pablo%20Lubiano.pdf?alt=media&token=0f0e2221-e638-4544-9e4c-8062bc092ebe" target="_blank">
            <Boton label="Link Here" />
          </a>
        </div>
    </section>
  )
}; export default Name;
