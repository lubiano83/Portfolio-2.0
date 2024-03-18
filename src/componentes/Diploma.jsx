/* Diploma */

const Diploma = ({img, titulo}) => {
  return (
    <div id="Diploma" className="animate__animated animate__fadeIn">
        <img className="Diploma__foto" src={img} alt={titulo} />
    </div>
  )
}; export default Diploma;