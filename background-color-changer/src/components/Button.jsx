import React, { useState } from "react";

function Button(props){
    const [Background, setBackground] = useState("white");

    const handleChange = () => {
         
    }
    return (
        <Button onclick={handleChange}>{props.btnName}</Button>
    )
}

export default Button;