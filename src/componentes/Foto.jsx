/* Foto */

const Foto = ({img, label}) => {
  return (      
    <div id="Foto">
      <img className="img rounded-circle" src={img} alt={label} />
    </div>
  )
}; export default Foto;
