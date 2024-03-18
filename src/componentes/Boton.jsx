/* Boton */

const Boton = ({label, handleClick}) => {
  return (
      <button id="Boton" onClick={handleClick}>{label}</button>
  )
}; export default Boton;