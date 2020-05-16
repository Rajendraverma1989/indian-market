import React from 'react';
import "./styles.scss";
import Directory from '../../components/directory'

const Homepage = (props) => {
    console.log(props)
return(
    <div className="homepage">
        <Directory />
    </div>
);
}
export default Homepage;