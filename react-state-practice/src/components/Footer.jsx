import React, { useContext } from 'react';
import ContextProvider, { AppContext } from '../context/UserContext';

function Footer(props) {

    const phone = useContext(AppContext)

    return (
        <div>
            <h2>Footer</h2>
            <h3>Phone : {phone} </h3>
        </div>
    );
}

export default Footer;