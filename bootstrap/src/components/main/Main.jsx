import React from "react";


const navStyle = {
  marginBottom: "0px",
}
const MainStyle = {
  backgroundImage: "url(../../../public/image-header.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
}

export default function Main() {
  return (
    <section style={MainStyle} className="vh-100 w-100">
      <Header />
    </section>
  )
}

function Header(){
  return(
    <header style={{ height: '120px' }}
            className="d-flex flex-row  justify-content-between align-items-center w-100 px-5 text-white">
      <h1 style={{ cursor: "pointer" }} className="fw-bold">sunnyside</h1>
      <ul style={navStyle} className="d-flex flex-row align-items-center h-100 list-inline gap-5">
        <li style={{ cursor: "pointer" }}>Projects</li>
        <li style={{ cursor: "pointer" }}>Client</li>
        <li style={{ cursor: "pointer" }}>Services</li>
        <li style={{ cursor: "pointer" }}>Contact</li>
      </ul>
    </header>
  )
}

