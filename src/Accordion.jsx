import { useState } from "react"

// eslint-disable-next-line react/prop-types, no-unused-vars
function Accordion({title,message,status}) {
    // eslint-disable-next-line no-unused-vars
    const [etat,setEtat]=useState(status);
    function handleClick()
    {
        setEtat(e=> !e);
    }
  return (
    <div>
      <header className={etat ? 'header fond' : 'header'} onClick={handleClick}>
        {title}
        <span style={{float:'right',fontWeight:'bold',fontSize:'20px'}}>{etat ? "-" : "+"}</span>
      </header>
      {etat && <section style={{padding: '10px'}}>{message}</section>}
    </div>
  )
}

export default Accordion
