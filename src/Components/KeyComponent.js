import React, {Component} from 'react';
import store from '../store/store'

const KeyComponent = ({keypadValue,click}) => {


    return(
        <button type="button" className="numpad-key"
                value={keypadValue}
                onClick=
                    {()=> store.dispatch({type :"KEYPAD",value:0})}>{keypadValue}
        </button>
    );
};

export default KeyComponent;

/*
const KeyComponent = ({keypadValue,click}) => {


    return(
        <button type="button" className="numpad-key"
                value={keypadValue}
                onClick={click.bind(this,keypadValue)}>{keypadValue}
        </button>
    );
};
*/

