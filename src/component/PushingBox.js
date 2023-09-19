import React, { useState } from "react";
import './PushingBox.css'

const PushingBox =()=> {
    const [position, setPosition] = useState({top: 0, left: 0})


    //Handle clicking right button
    const clickRight= () => {
  
      const right = position.left + 50;
      if(right <= 450){
        setPosition({ top: position.top + 0, left: right })
      }
      
    }
  
    //Handle clicking left button
    const clickLeft= () => {
  
      const left = position.left - 50;
      if(left >= 0){
        setPosition({ top: position.top + 0, left: left })
      }
    }
  
  //Handle clicking bottom button
  const clickBottom= () => {
  
    const bottom = position.top + 50;
    if(bottom <= 450){
      setPosition({ top: bottom, left: position.left + 0 })
    }
    
  }
  
  //Handle clicking top button
  const clickTop= () => {
    
    const top = position.top - 50;
    if(top >= 0){
      setPosition({ top: top, left: position.left + 0 })
    }
    
  }
  
    return (
   
      <div class="main-container">
  
        <button class="horizontal-button" onClick={clickTop} disabled={position.top <= 0 ? true : false}>Up</button>
  
        <div class="container">
  
          <button class="vertical-button" onClick={clickLeft} disabled={position.left <=0 ? true : false} > Left</button>
  
          <div class="box">
  
            <div class="square" style={{top: `${position.top}px`,
            left: `${position.left}px`,}}></div>
  
          </div>
  
          <button class="vertical-button" onClick={clickRight} disabled={position.left >= 450 ? true : false}>Right</button>
  
        </div>
  
        <button class="horizontal-button" onClick={clickBottom} disabled={position.top >= 450 ? true : false}>Bottom</button>
  
      </div>
    
    );
  }

export default PushingBox;