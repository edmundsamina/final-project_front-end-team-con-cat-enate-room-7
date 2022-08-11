import React from 'react'
import {Switch} from "@chakra-ui/react"
import { useState, useEffect } from 'react'

const ColourblindToggle = () => {


    const [colourBlind, setColourBlind] = useState(false)


    useEffect(()=>{
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
        if(r.style.getPropertyValue('--main-color') === '#122746'){
          setColourBlind(true)
        }
    },[])

    function changeColour(e){
      if (colourBlind === false){
        var r = document.querySelector(':root');
      var rs = getComputedStyle(r);
      r.style.setProperty('--main-color', '#122746');
      r.style.setProperty('--second-color', '#8ea3c6');
      setColourBlind(true)
      } 
      if(colourBlind ===true){
        var r = document.querySelector(':root');
      var rs = getComputedStyle(r);
      r.style.setProperty('--main-color', '#448FFF');
      r.style.setProperty('--second-color', '#B2D1FF');
      setColourBlind(false)
      }
    }

    return (
        <div className="colour-toggle">
            <label>Colourblind Mode</label>
            <Switch onChange={changeColour} isChecked={colourBlind===true}></Switch>
        </div>
    )
}

export default ColourblindToggle