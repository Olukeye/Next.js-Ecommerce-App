import React from 'react';
import { API } from '../config';


const Images = ({item, url}) => (
    <div className="product_img">
        <img src={`${API}/${url}/photo/${item._id}`}
        alt={item.name} className="mb-3" 
        style={{maxHeight:'50%', maxWidth:'70%'}} />
    </div>
)

export default Images;