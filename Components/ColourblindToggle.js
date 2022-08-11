import React from 'react'
import {Switch} from "@chakra-ui/react"
import { useState, useEffect } from 'react'

const ColourblindToggle = () => {


    function findToggle(entry){
        if (entry === 'true'){
            return true
        }
        else if (entry === 'false'){
            return false
        }
        else {
            return null
        }
    }
    
    let storedState = localStorage.getItem('colourBlind')

    const toggled = findToggle(storedState)
    const [colourBlind, setColourBlind] = useState(toggled)


    useEffect(()=>{
      if (colourBlind === true){
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
        r.style.setProperty('--main-color', '#122746');
        r.style.setProperty('--second-color', '#8ea3c6');
      }
    },[])

    useEffect(() => {
        localStorage.setItem('colourBlind', colourBlind);
      }, [colourBlind]);


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