import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import $ from "jquery";
 
class AwesomeComponent extends React.Component {
 
componentDidMount=()=>{

    $(window).on("load", ()=>{
        $(".sweet-loading").fadeOut(3000);
      });
}
    
  render() {
    
    return (
      
      <div className='sweet-loading'>
        <ClimbingBoxLoader
          color={'#11CC91'} 
          size={30}
          loading={true} 
          
        />
      </div>
      
    )
  }
}
export default AwesomeComponent;