import style from "./Egg.module.css"

const eggOneStyle = {
  height: "600px"
}

const eggTwoStyle = {
  backgroundImage: "url(../../../public/image-transform.jpg)",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "auto"
}

export default function EggSection(){
  return(
    <section className="w-100 bg-black h-auto d-flex flex-row">
      <EggOne />
      <EggTwo />
    </section>
  )
}

function EggOne(){
  return(
    <div style={eggOneStyle} className="w-50 bg-white text-black d-flex flex-column justify-content-center align-items-center px-5">
      <h1 className="fw-bold">Transform your brand</h1>
      <p className="mt-3">Assign responsive-friendly margin or padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from .25rem to 3rem.</p>
    </div>
  )
}

function EggTwo(){
  return(
    <div style={eggTwoStyle} className="w-50">
    </div>
  )
}