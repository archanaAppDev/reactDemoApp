import React from 'react'
import { useState,useCallback } from 'react'
import 'react-medium-image-zoom/dist/styles.css';
import logo from '../assets/logo.jpeg';
import Zoom from 'react-medium-image-zoom';

export const Zoomable = () => {

      const [isZoomed, setIsZoomed] = useState(false);
        const handleZoomChange = useCallback((shouldZoom) => {
            setIsZoomed(shouldZoom);
        }, []);
  return (
    <div> 
        <Zoom 
        isZoomed={isZoomed} 
        onZoomChange={handleZoomChange}
      >
        <img 
          alt="Zoomable" 
          src={logo} 
          width={40} 
          style={{ cursor: 'pointer', borderRadius: '8px' }}
        />
      </Zoom>
      </div>
  )
}
