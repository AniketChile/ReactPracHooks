import React from 'react';

function Header(props) {
    console.log('Header got re-endered');
    return (
        <div>
            <h2>Header</h2>

            
        </div>
        
    );
}

export default React.memo(Header);