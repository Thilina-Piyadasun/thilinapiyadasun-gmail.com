import React from 'react';
import KeyComponent from './KeyComponent'


const KeyPadComponent = () => {

    let keys =[[1,2,3],[4,5,6],[7,8,9]];
    return (
        <div>
            <div className="numpad-wrap">
                <div className="numpad-col-1">
                    <div className="numpad-row">
                        <KeyComponent keypadValue="1"></KeyComponent>
                        <KeyComponent keypadValue="2"></KeyComponent>
                        <KeyComponent keypadValue="3"></KeyComponent>
                    </div>
                    <div className="numpad-row">
                        <KeyComponent keypadValue="4"></KeyComponent>
                        <KeyComponent keypadValue="5"></KeyComponent>
                        <KeyComponent keypadValue="6"></KeyComponent>
                    </div>
                    <div className="numpad-row">
                        <KeyComponent keypadValue="7"></KeyComponent>
                        <KeyComponent keypadValue="8"></KeyComponent>
                        <KeyComponent keypadValue="9"></KeyComponent>
                    </div>
                    <div className="numpad-row">
                        <KeyComponent className="numpad-key zero" keypadValue="0"></KeyComponent>
                        <KeyComponent className="numpad-key" keypadValue="."></KeyComponent>
                    </div>
                </div>
                <div className="numpad-col-2">
                    <div className="numpad-row">
                        <KeyComponent className="numpad-key clear" keypadValue="CLR"></KeyComponent>
                        <KeyComponent className="numpad-key enter" keypadValue="ENT" ></KeyComponent>
                        <KeyComponent className="numpad-key keypad" keypadValue="KEYPAD"></KeyComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyPadComponent;