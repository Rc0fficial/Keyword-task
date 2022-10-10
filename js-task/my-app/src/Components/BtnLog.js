import React, {useState} from 'react'

function BtnLog() {
    const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

 let btnFunc =  <input
  className="form-check-input"
  type="checkbox"
  value=""
  id="flexCheckIndeterminate"
  onClick={handleClick}
/>
    
  return (
        <>
        
        </>
  )
}

export default BtnLog