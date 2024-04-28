/* Contact */

import Boton from "../componentes/Boton";
import Titulo from "../componentes/Titulo";

const Contact = () => {
  return (
    <form id="Contact" action="https://formsubmit.co/lubiano83@gmail.com" method="POST" target="_blank">
        <Titulo title="Contact Me:"/>
        <input type="email" name="email" className="form-control input" id="exampleFormControlInput1" placeholder="Coloca tu Email" required />
        <textarea className="form-control textarea" name="textarea" type="textarea" id="exampleFormControlTextarea1" rows="3" placeholder="Deja tu Mensaje" required />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:5173/" />
        <div className="Contact__botones">
          <Boton name="reset" type="reset" label="Reset" className="reset boton" />
          <Boton name="submit" type="submit" label="Enviar" className="submit boton" />
        </div>
    </form>
  )
}; export default Contact;
