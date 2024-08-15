import React, { useState } from 'react'; 

  

function FormInput() { 

  const [inputText, setInputText] = useState(''); 

  

  const handleInputChange = (event) => { 

    setInputText(event.target.value); 

  }; 

  

  return ( 

    <div> 

      <input  

        type="text"  

        placeholder="Enter text"  

        value={inputText}  

        onChange={handleInputChange}  

      /> 

      <p>You entered: {inputText}</p> 

    </div> 

  ); 

} 

  

export default FormInput; 