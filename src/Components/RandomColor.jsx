import React from "react";
import { useState } from "react";



const RandomColor = ()=>{

    const [colorType,setColorType] = useState("hex")
    const [color,setColor] = useState("#000000")
    const colorArray = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

    function handleHexColor(){
        setColorType("hex")
        let txt = "#"
        for(let i =0;i<6;i++){
            txt += colorArray[Math.floor(Math.random()*colorArray.length)]
        }
        console.log(txt)
        setColor(txt)

    }

    function handleRgbColor(){
        setColorType("rgb")
        let first = Math.floor(Math.random()*255)
        let second = Math.floor(Math.random()*255)
        let third = Math.floor(Math.random()*255)

        setColor(`rgb(${first},${second},${third})`)
        console.log(color)



    }





    return (
        <div style={{width:"100vw",height:"100vh",backgroundColor:color}} >
            <button className="btn-1" onClick={handleHexColor}>HEX Color</button>
            <button className="btn-2" onClick={handleRgbColor}>RGB Color</button>
            <button className="btn-3" onClick={colorType == "hex" ? handleHexColor : handleRgbColor}>RANDOM Color</button>
            <p className="color">{color}</p>
        </div>
    )
}

export default RandomColor