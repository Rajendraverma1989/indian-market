import React from 'react';
import { connect } from 'react-redux';

import CustomBotton from '../custom-button';
import { addItem } from '../../redux/cart/cart.action';

import './styles.scss';

const CollectionItem = ({ props, addItem}) => {
    return(
    <div className="collection-item">
        <div className="image"
        style={{
            backgroundImage:`url(${props.imageUrl})`
        }}
        />
        <div className="collection-footer">
            <span className="name">{props.name}</span>
            <span className="price">{props.price}</span>
        </div> 
        <CustomBotton onClick={() => addItem(props)} inverted>Add to cart </CustomBotton> 
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);