
function Card({title,children}) {
  return (
      <div className="bg-[#FAFAFA] w-75  mt-3.5 h-auto p-4 ml-3 lg:ml-50 rounded-xl" >
          {title && <div className="mt-1 text-xl lg:text-2xl font-sans ml-1 font-semibold mb-2">{title}</div>}
          {children}
    </div>
  )   
}

export default Card