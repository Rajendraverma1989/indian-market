import React from 'react';
import CollectionItem from '../collection-item'
import './styles.scss';

const CollectionPreview = (props)=> (

    <div className="collection-preview">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <div className="preview">
            {
                props.items.filter((item, idx)=> idx < 4)
                .map((item) =>(
                <CollectionItem key={item.id} props={item} />
                ))
            }
        </div>
    </div> 
);
export default CollectionPreview;