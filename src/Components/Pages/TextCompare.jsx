import { Button, TextField } from '@material-ui/core';
import React from 'react';
import axios from 'axios';

function TextCompare() {

    const [textBoxes, setText] = React.useState({text1: '', text2: ''});
    const [textsEqual, setEqual] = React.useState(false);
    const [isSubmitted, setSubmit] = React.useState(false);

    function handleChange(event) {
        const { value, id } = event.target;
        setText(prev => {
            return {...prev, [id]: value}
        });
    }

    function resetComparison() {
        setSubmit(false);
    }

    function clearRight() {
        setText(prev => {
            return {...prev, text2: ''}
        });
        resetComparison();
    }

    function clearLeft() {
        setText(prev => {
            return {...prev, text1: ''}
        });
        resetComparison();
    }

    function clearBoxes() {
        clearLeft();
        clearRight();
    }

    function handleSubmit() {
        const { text1, text2 } = textBoxes;
        const data = {
            'right': text1,
            'left': text2,
        };
    
        const header = {
            'Content-Type': 'application/json'
        };
        axios.post('https://api.diffchecker.com/public/text?output_type=json&email=lauraleelovesthesmurfs@gmail.com', data, header)
        .then(function (response) {
            const { added, removed } = response.data;
            if ((added + removed) === 0) {
                setEqual(true);
            } else {
                setEqual(false);
            }
            setSubmit(true);
        });
    }

    let style = {}
    if (isSubmitted) {
        if (textsEqual) {
            style = {
                backgroundColor: '#98fb98'
            }
        } else {
            style = {
                backgroundColor: 'pink'
            }
        }
    }

    return (
        <div>
            <div className="textBox-left" style={style}>
                <TextField label="First text" multiline rows={16} variant="filled" autoFocus={true} fullWidth={true} value={textBoxes.text1} id={'text1'} onChange={handleChange}/>
            </div>
            <div className="textBox-right" style={style}>
                <TextField label="Second text" multiline rows={16} variant="filled" fullWidth={true} value={textBoxes.text2} id={'text2'} onChange={handleChange}/>
            </div>
            <div className="myButton">
                <Button variant="contained" color="secondary" onClick={handleSubmit}>Compare</Button>
            </div>
            <div className="myClearButtonLeft">
                <Button variant="outlined" color="primary" id={'text1'} onClick={clearLeft}>Clear Left</Button>
            </div>
            <div className="myButton">
                <Button variant="contained" color="primary" id={'both'} onClick={clearBoxes}>Clear Both</Button>
            </div>
            <div className="myButton">
                <Button variant="outlined" color="primary" id={'text2'} onClick={clearRight}>Clear Right</Button>
            </div>
        </div>
    );
}

export default TextCompare;