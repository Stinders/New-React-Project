function Card ({name, children}){
  return(
  <div>
    <article className="card">
       <h2> {name}</h2>
       {children}
     
    </article>
  </div>

  )
}
export default Card