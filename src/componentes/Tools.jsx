/* Tools */

import Foto from "./Foto";
import Boton from "./Boton";
import { useMostrar } from "../hooks/useMostrar";

const Tools = () => {

  const {handleMostrar, mostrar, handleMostrar1, mostrar1, handleMostrar2, mostrar2} = useMostrar(true);

  return (
    <section id="Tools">
        <div className="Tools__botones">
          <Boton label="Front-End" className="front-end" handleClick={handleMostrar}/>
          <Boton label="Back-End" className="back-end" handleClick={handleMostrar1}/>
          <Boton label="Tools" className="tools" handleClick={handleMostrar2}/>
        </div>
        { mostrar && 
        <article className="Tools__front-end animate__animated animate__bounceIn">
            <h2>Front-End:</h2>
            <div className="front-end__contenedor">
                <Foto img="../src/img/html5.png" label="html"/>
                <Foto img="../src/img/css3.png" label="css"/>
                <Foto img="../src/img/bootstrap.jpeg" label="bootstrap" />
                <Foto img="../src/img/sass.png" label="sass"/>
                <Foto img="../src/img/js.png" label="javascript"/>
                <Foto img="../src/img/reactjs.png" label="react"/>
                <Foto img="../src/img/react-native.png" label="react native"/>
            </div>
        </article> }
        {mostrar1 && 
        <article className="Tools__back-end animate__animated animate__bounceIn">
          <h2>Back-End:</h2>
          <div className="back-end__contenedor">
              <Foto id="firebase" img="../src/img/firebase.png" label="firebase"/>
              <Foto id="api" img="../src/img/api.png" label="api"/>
          </div>
        </article> }
        { mostrar2 &&
        <article className="Tools__tools animate__animated animate__bounceIn">
          <h2>Tools:</h2>
          <div className="tools__contenedor">
            <Foto img="../src/img/github-2.png" label="github"/>
            <Foto img="../src/img/filezilla.png" label="filezilla"/>
        </div> 
        </article>}
    </section>
  )
}; export default Tools;
