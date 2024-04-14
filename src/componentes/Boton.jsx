/* Boton */

const Boton = ({label, handleClick, href}) => {
  return (
      <button id="Boton" onClick={handleClick} href={href}>{label}</button>
  )
}; export default Boton;