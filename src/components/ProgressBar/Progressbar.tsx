import React from 'react';
import './Progressbar.scss'

function Progressbar(props: any) {
    const containerStyles = {
        height: 5,
        width: '100%',
        backgroundColor: "#0f3d77",
        borderRadius: 50,
      }
    
      const fillerStyles: any = {
        height: '100%',
        width: `${props.completed}%`,
        backgroundColor: "#45b0e6",
        borderRadius: 'inherit',
        textAlign: 'right'
      }
    
      return (
         <div className="Progressbar-wrapper"> 
            <div className="Progressbar-title"><p>{props.title}</p><p>{props.completed}%</p></div>
        <div style={containerStyles}>
         
          <div style={fillerStyles}>
          </div>
        </div>
        </div>
       
      );
    };


export default Progressbar;