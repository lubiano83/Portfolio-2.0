/* Tools */

import Foto from "./Foto";
import Boton from "./Boton";
import Titulo from "./Titulo";
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
        { mostrar && 
        <article className="Tools__front-end animate__animated animate__bounceIn">
            <h2>Front-End:</h2>
            <div className="front-end__contenedor">
                <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fhtml5.webp?alt=media&token=ab785932-cba3-4222-a639-03d2090b4d16" label="html"/>
                <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fcss3.webp?alt=media&token=dab091b7-f701-454f-be75-077c538d2951" label="css"/>
                <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fbootstrap.webp?alt=media&token=39fff7a0-e92e-411d-b2ef-b8e08e628ed2" label="bootstrap" />
                <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fsass.webp?alt=media&token=c92a218b-3642-4bd1-81e6-1ed1ea9924dd" label="sass"/>
                <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fjs.webp?alt=media&token=0ae817a1-d034-40fb-b46d-f2a4d0212b6b" label="javascript"/>
                <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Freactjs.webp?alt=media&token=8d0af832-6de8-4b49-893c-3ce3ea6a01ef" label="react"/>
                <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Freact-native.webp?alt=media&token=ea48014c-0134-4173-a0de-c460d38133c6" label="react-native"/>
            </div>
        </article> }
        {mostrar1 && 
        <article className="Tools__back-end animate__animated animate__bounceIn">
          <h2>Back-End:</h2>
          <div className="back-end__contenedor">
              <Foto id="firebase" img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Ffirebase.webp?alt=media&token=e33c7216-209b-42e6-ac26-054d21fbeb38" label="firebase"/>
          </div>
        </article> }
        { mostrar2 &&
        <article className="Tools__tools animate__animated animate__bounceIn">
          <h2>Tools:</h2>
          <div className="tools__contenedor">
            <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fgithub-2.webp?alt=media&token=da09fa56-9e50-4116-8605-da7964655548" label="github"/>
            <Foto img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Ffilezilla.webp?alt=media&token=b85bd537-4698-4691-965b-7614d412def5" label="filezilla"/>
        </div> 
        </article>}
    </section>
  )
}; export default Tools;
