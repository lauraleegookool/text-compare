import React from 'react';
import { Typography } from '@material-ui/core';

function Header(props) {
    return (
        <div className="header">
            <Typography variant="h2">{props.text}</Typography>
        </div>
    );
}

export default Header;