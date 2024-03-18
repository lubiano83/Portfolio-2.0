/* WorksImg */

const WorksImg = ({img, titulo, label, href, go}) => {
  return (
    <a id="WorksImg" className="animate__animated animate__tada" href={href} target="_blank">
      <img className="WorksImg__foto" src={img} alt={titulo}/>
      <div className="WorksImg__texto">
        <h5>{label}</h5>
        <h5>{go}</h5>
      </div>
    </a>
  )
}; export default WorksImg;
