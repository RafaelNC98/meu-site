import React, { useState } from 'react';
import Zoom from 'react-img-zoom'
 
const Image = ({ src, alt, ...props }) => {
    const [state, setState] = useState({
        fallback: false,
    });
    const { fallback } = state;

    if (fallback) {
        return (
        <div>
              <Zoom
              {...props}
              img="/icons/icon_sj_6.png"
              zoomScale={3}
              width={400}
              height={300}
            />
        </div>)
    }
    /*
    if (!fallback) {
        return (
        <div>
            <Zoom
              {...props}
              img="/icons/icon_sj_7.png"
              zoomScale={3}
              width={400}
              height={300}
            />
        </div>)
      
    }
    */
    return (
      <div>
         <img
            style={{display: "none"}}
            {...props}
            src={src}
            alt={alt}
            onError={() => setState({ fallback: true })}
         />
        <Zoom
        {...props}
        img={src}
        zoomScale={3}
        width={400}
        height={300}
        onError={() => setState({ fallback: true })}
      />
      </div>
    );
};

export default Image;
