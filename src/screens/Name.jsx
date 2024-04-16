/* Name */

import Boton from "../componentes/Boton";
import Titulo from "../componentes/Titulo";

const Name = () => {

  return (
    <section id="Name">
        <h1 className="display-1 animate__animated animate__backInLeft" id="nombre">José Pablo Lubiano</h1>
        <h1 className="display-4 animate__animated animate__backInRight" id="cargo">Full-Stack Developer Coming Soon</h1>
        <div className="Name__container">
          <Titulo title="My CV:"/>
          <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/CV-Jose%CC%81%20Pablo%20Lubiano%20conv.pdf?alt=media&token=ae8d8d1e-7b3a-49c9-ae02-edbc3159b93a" target="_blank">
            <Boton label="Link Here" />
          </a>
        </div>
    </section>
  )
}; export default Name;
