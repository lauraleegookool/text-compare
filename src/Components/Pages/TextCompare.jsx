import { Button, TextField } from '@material-ui/core';
import React from 'react';
import textCompare from '../../actions/textCompareActions';

function TextCompare() {

    const [textBoxes, setText] = React.useState({text1: '', text2: ''});

    function handleChange(event) {
        const { value, id } = event.target;
        setText(prev => {
            return {...prev, [id]: value}
        });
    }

    function handleSubmit() {
        textCompare(textBoxes);
    }

    return (
        <div>
            <div className="textBox-left">
                <TextField label="First text" multiline rows={16} variant="filled" autoFocus={true} fullWidth={true} value={textBoxes.text1} id={'text1'} onChange={handleChange}/>
            </div>
            <div className="textBox-right">
                <TextField label="Second text" multiline rows={16} variant="filled" fullWidth={true} value={textBoxes.text2} id={'text2'} onChange={handleChange}/>
            </div>
            <div className="myButton">
                <Button variant="contained" color="secondary" onClick={handleSubmit}>Compare</Button>
            </div>
        </div>
    );
}

export default TextCompare;