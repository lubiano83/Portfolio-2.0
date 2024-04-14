/* Boton */

const Boton = ({label, handleClick, href, name, type}) => {
  return (
      <button id="Boton" onClick={handleClick} href={href} name={name} type={type}>{label}</button>
  )
}; export default Boton;