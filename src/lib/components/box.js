import React from 'react'
import "./box.css"

const Box = ({ color }) => {
 
  const styles = {
    box: {
        backgroundColor: color ?? "#00f2ff"
    }
  };   

  return (
    <div className='box' style={styles.box} >Click</div>
  )
}

export default Box