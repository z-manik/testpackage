import React from 'react'
import "./box.css"
import CustomNavBar from './NavBar/CustomNavBar';

const Box = ({ color }) => {
 
  const styles = {
    box: {
        backgroundColor: color ?? "#00f2ff"
    }
  };   

  return (
    // <div className='box' style={styles.box} >Click Me </div>
    <CustomNavBar/>
  )
}

export default Box