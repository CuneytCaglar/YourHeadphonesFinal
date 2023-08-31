import React from 'react'

export default function AboutUs(props) {
 return (
    <>
    
    <div className="card cardSize bg-transparent">
   <div className="card-body bg-transparent" >
     <h1 className="card-title bg-transparent">Project Designer</h1>
     <h2 className="card-text cardP"> Eva Raspoiasova </h2>
   </div>
   <ul className="list-group list-group-flush bg-transparent">
     <li className="list-group-item bg-transparent"><h3 className="adres">Behance Address: <a href="https://www.behance.net/evaraspoyasova1" className="btn btn-primary" target="_blank">Go Behance</a></h3></li>
     <li className="list-group-item bg-transparent"><h2 className="adres">Project Developer : <h2 className="cuneyt">Cüneyt Çağlar</h2></h2></li>
     <li className="list-group-item bg-transparent"><h3 className="adres">Project Github : <a href="https://github.com/CuneytCaglar/YourHeadphones" className="btn btn-primary" target="_blank">Go Github</a></h3></li>
   </ul>

 </div>
</>
  )
}
