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
                  <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fhtml-5-svgrepo-com.svg?alt=media&token=1b29d3a6-b8f2-4b2a-abb0-b63ca37d2008" label="html"/>
                  <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fcss-3-svgrepo-com.svg?alt=media&token=8dfa4fb6-ddf9-4c3e-ad08-aab61205f2fe" label="css"/>
                  <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fbootstrap-svgrepo-com.svg?alt=media&token=a7b5f665-bc60-4df2-998f-b915e2114968" label="bootstrap" />
                  <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fsass-svgrepo-com.svg?alt=media&token=beac4649-02ac-4d72-b677-5da54f725efc" label="sass"/>
                  <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fjavascript-svgrepo-com.svg?alt=media&token=7eea10c9-fb07-4220-bf7c-b514913e9acd" label="javascript"/>
                  <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Freact-svgrepo-com.svg?alt=media&token=58a8ce64-09cb-4d13-b16e-ea74ac932c27" label="react"/>
                  <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fredux-svgrepo-com%20(2).svg?alt=media&token=aa9529d8-ea28-4c02-8d46-37878aed3297" label="redux"/>
              </div>
          </article> }
          {mostrar1 && 
          <article className="Tools__back-end animate__animated animate__bounceIn">
            <h2>Back-End:</h2>
            <div className="back-end__contenedor">
                <Foto id="firebase" img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Ffirebase-svgrepo-com.svg?alt=media&token=ffe90477-653b-4046-9277-d05bf3c91901" label="firebase"/>
                <Foto id="nodeJs" img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fnode-js-svgrepo-com.svg?alt=media&token=5066c33a-41a9-40e0-93c9-0ece291dc0a3" label="nodeJs"/>
                <Foto id="express" img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fexpress-svgrepo-com.svg?alt=media&token=974a9cf8-2f27-463d-8a30-5cd1382c2f61" label="express"/>
            </div>
          </article> }
          { mostrar2 &&
          <article className="Tools__tools animate__animated animate__bounceIn">
            <h2>Tools:</h2>
            <div className="tools__contenedor">
              <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fgithub-icon-svgrepo-com.svg?alt=media&token=825ad433-cee0-4d6c-94b3-ca0500bd31b2" label="github"/>
              <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Ffilezilla-ftp-software-svgrepo-com.svg?alt=media&token=3eeadd5b-cb2e-45bb-8418-6198574b0d57" label="filezilla"/>
              <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fpostman-icon-svgrepo-com.svg?alt=media&token=fa003ef0-4cd1-421b-8342-5f035c171881" label="postman"/>
          </div> 
          </article>}
        </div>
    </section>
  )
}; export default Tools;
