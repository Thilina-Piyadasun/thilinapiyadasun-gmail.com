import React from 'react';
import store from '../store/store'

const KeyComponent = ({keypadValue}) => {

    /**
     * Displatch key update action to the
     */
    const dispatcher = ()=> {
        store.dispatch({type: keypadValue, value: keypadValue})
    };

    return(
        <button type="button" className="numpad-key"
                    value={keypadValue}
                    onClick={dispatcher}>{keypadValue}
        </button>
);
};

export default KeyComponent;

