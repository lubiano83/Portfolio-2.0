/* Foto */

const Foto = ({img, label}) => {
  return (      
    <div id={label}>
      <img className="img" src={img} alt={label} id={`${label}__foto`}/>
    </div>
  )
}; export default Foto;
