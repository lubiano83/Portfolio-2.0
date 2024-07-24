/* Studies */

import Diploma from "../componentes/Diploma";
import Titulo from "../componentes/Titulo";

const Courses = () => {
  return (
    <div id="Courses">
      <Titulo title="My Certificates:"/>
      <div className="Courses__container">
        <Diploma img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2FDesarrollo-Web.png?alt=media&token=d99e91e5-fc34-4281-b9fc-cc9ebe3d7f40" titulo="Desarrollo-Web"/>
        <Diploma img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2FJavaScript.png?alt=media&token=28edb74b-2a6d-42ee-9cfd-88601bb604bc" titulo="JavaScript"/>
        <Diploma img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2FDiploma%20React%20Js.png?alt=media&token=d3b78ca1-1680-46ce-b60f-d0b644aaee94" titulo="React Js"/>
        <Diploma img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2FDesarrollo%20de%20Aplicaciones.webp?alt=media&token=43945756-2fa2-4492-bf19-891ec6a6178d" titulo="Desarrollo de Aplicaciones"/>
        <Diploma img="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/img%2FBackEnd-1.webp?alt=media&token=0099d3c2-fc0c-4985-a866-d44a0891a0f3" titulo="Programacion BackEnd 1: Desarrollo Avanzado de BackEnd"/>
      </div>
    </div>
  )
}; export default Courses;
