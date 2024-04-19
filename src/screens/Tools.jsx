/* Tools */

import Foto from "../componentes/Foto";
import Boton from "../componentes/Boton";
import Titulo from "../componentes/Titulo";
import { useMostrar } from "../hooks/useMostrar";

const Tools = () => {

  const {handleMostrar, mostrar, handleMostrar1, mostrar1, handleMostrar2, mostrar2} = useMostrar(true);

  return (
    <section id="Tools">
        <div className="Tools__botones">
          <Titulo title="My Tools:"/>
          <div className="botones__container">
            <Boton label="Front-End" className="front-end" handleClick={handleMostrar}/>
            <Boton label="Back-End" className="back-end" handleClick={handleMostrar1}/>
            <Boton label="Tools" className="tools" handleClick={handleMostrar2}/>
          </div>
        </div>
        <div className="Tools__Foto">
          { mostrar && 
          <article className="Tools__front-end animate__animated animate__bounceIn">
              <h2>Front-End:</h2>
              <div className="front-end__contenedor">
                  <Foto img="src/svg/html-5-svgrepo-com.svg" label="html"/>
                  <Foto img="src/svg/css-3-svgrepo-com.svg" label="css"/>
                  <Foto img="src/svg/bootstrap-svgrepo-com.svg" label="bootstrap" />
                  <Foto img="src/svg/sass-svgrepo-com.svg" label="sass"/>
                  <Foto img="src/svg/javascript-svgrepo-com.svg" label="javascript"/>
                  <Foto img="src/svg/react-svgrepo-com.svg" label="react"/>
                  <Foto img="src/svg/redux-svgrepo-com (2).svg" label="redux"/>
              </div>
          </article> }
          {mostrar1 && 
          <article className="Tools__back-end animate__animated animate__bounceIn">
            <h2>Back-End:</h2>
            <div className="back-end__contenedor">
                <Foto id="firebase" img="src/svg/firebase-svgrepo-com.svg" label="firebase"/>
            </div>
          </article> }
          { mostrar2 &&
          <article className="Tools__tools animate__animated animate__bounceIn">
            <h2>Tools:</h2>
            <div className="tools__contenedor">
              <Foto img="src/svg/github-icon-svgrepo-com.svg" label="github"/>
              <Foto img="src/svg/filezilla-ftp-software-svgrepo-com.svg" label="filezilla"/>
          </div> 
          </article>}
        </div>
    </section>
  )
}; export default Tools;
