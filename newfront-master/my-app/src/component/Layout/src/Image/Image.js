import React, { useState, useEffect  } from 'react';

const Image = ({ src, alt, ...props }) => {
    const [state, setState] = useState({
        fallback: false
    });
    const { fallback } = state;

    useEffect(() => {
        if(src !== ""){
            setState({ fallback: false })
        }
    }, [src]);


    if (fallback) {
        return <img {...props} alt={alt} src="/icons/icon_sj_6.png" />;
    }
    /*
    if (!fallback) {
        return (
            <img
                {...props}
                src="/icons/icon_sj_7.png"
                alt={alt}
                onError={() => setState({ fallback: true })}
            />
        );
    }
    */
    return (
        <img
            {...props}
            src={src === "" ? "/icons/icon_sj_6.png" : src}
            alt={alt}
            onError={() => setState({ fallback: true })}
        />
    );
};

export default Image;
