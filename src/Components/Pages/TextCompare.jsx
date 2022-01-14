import { TextField } from '@material-ui/core';
import React from 'react';

function TextCompare() {
    return (
        <div>
            <div className="textBox-left">
                <TextField label="First text" multiline rows={16} variant="filled" autoFocus={true} fullWidth={true}/>
            </div>
            <div className="textBox-right">
                <TextField label="Second text" multiline rows={16} variant="filled" fullWidth={true}/>
            </div>
        </div>
    );
}

export default TextCompare;