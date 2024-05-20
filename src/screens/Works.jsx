/* Works */

import Titulo from "../componentes/Titulo";
import WorksImg from "../componentes/WorksImg";

const Works = () => {
  return (
    <div id="Works">
      <Titulo title="My Works:" />
      <div className="Works__container">
        <WorksImg id="autofram" img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fautofram.webp?alt=media&token=148e4639-449b-4cd0-a042-dcdff088cd3b" titulo="autofram" href="https://e-autofram.netlify.app/" label="Project completed in the Web Development Course at CoderHouse, where I ranked within the top 1. The main tools utilized include HTML, CSS, Bootstrap, Sass, animate.style, GitHub and Google Fonts." go="Click and go to the Page"/>
        <WorksImg id="autoshop" img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fautoshop.webp?alt=media&token=63785780-4fb6-412a-a4c5-9a94dbaec82d" titulo="autoshop" href="https://e-autoshop.netlify.app/" label="Project completed in the JavaScript Course at CoderHouse, where I ranked within the top 1. The main tools utilized include HTML, CSS, Bootstrap, Sass, JavaScript, Sweet Alert 2, animate.style, GitHub and Google Fonts." go="Click and go to the Page"/>
        <WorksImg id="padel-store" img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fpadelstore.webp?alt=media&token=4f293d8b-d484-4655-b20a-3d5541e71ef3" titulo="padel store" href="https://padel-store.netlify.app/" label="Project completed in the React Js Course at CoderHouse, where I ranked within the top 1. The main tools utilized include React Js, Firebase, Bootstrap, Sass, JavaScript and GitHub." go="Click and go to the Page"/>
        <WorksImg id="lector-textos" img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Flector-de-textos.webp?alt=media&token=ccb82351-606e-419f-9f03-852f22e9e37d" titulo="lector de textos" href="https://lector-de-textos.netlify.app/" label="This project is a simple web page that allows you to enter text in a textarea, translate it, and reproduce it in different selectable languages. It uses JavaScript to interact dynamically with the HTML and CSS for design." go="Click and go to the Page"/>
        <WorksImg id="barra-central" img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2Fbarra-central.webp?alt=media&token=51e53007-28bb-4559-818d-cff72b7d5734" titulo="barra central" href="https://barra-central.netlify.app/" label="Project completed in the Application Development Course at CoderHouse, where I ranked within the top 1. The main tools utilized include React Native, Firebase, SQLite, Google Maps, Redux, Yup, Expo and others." go="Click and go to the Page"/>
      </div>
    </div>
  )
}; export default Works;
