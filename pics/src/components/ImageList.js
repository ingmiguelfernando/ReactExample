import './ImageList.css';
import React from 'react';

const ImageList = (props) => {

    const images = props.images.map(({ id, description, urls }) => {
        return <div><img key={id} src={urls.regular} alt={description} /></div>        
    });

    return <div className = "image-list">{images}</div>;
};

export default ImageList;