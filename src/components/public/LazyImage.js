import React from 'react';

const LazyImage = (props) => {
    return (
        <img className={props.nameOfClass} src={props.src} alt={props.name}/>
    );
};

export default LazyImage;