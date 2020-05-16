import React from 'react';
import './styles.scss';

const MenuIten = (props) => {
    return (
       <div className={`${props.section.size} menu-item`}>
           <div className="background-image" style={{
           backgroundImage:`url(${props.section.imageUrl})`
       }} />
              <div className="content">
                     <h1 className="title">{props.section.title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
              </div>
        </div>          
    );
}
export default MenuIten;