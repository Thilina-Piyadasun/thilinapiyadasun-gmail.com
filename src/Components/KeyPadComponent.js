import React from 'react';
import KeyComponent from './KeyComponent'


const KeyPadComponent = ({click}) => {

    let keys =[[1,2,3],[4,5,6],[7,8,9]];
    return (
        <div>
            <div className="numpad-wrap">
                <div className="numpad-col-1">
                        <div className="numpad-row">
                            <KeyComponent keypadValue="1" click={click}></KeyComponent>
                            <KeyComponent keypadValue="2" click={click}></KeyComponent>
                            <KeyComponent keypadValue="3" click={click}></KeyComponent>
                        </div>
                        <div className="numpad-row">
                            <KeyComponent keypadValue="4" click={click}></KeyComponent>
                            <KeyComponent keypadValue="5" click={click}></KeyComponent>
                            <KeyComponent keypadValue="6" click={click}></KeyComponent>
                        </div>
                        <div className="numpad-row">
                            <KeyComponent keypadValue="7" click={click}></KeyComponent>
                            <KeyComponent keypadValue="8" click={click}></KeyComponent>
                            <KeyComponent keypadValue="9" click={click}></KeyComponent>
                        </div>
                        <div className="numpad-row">
                            <KeyComponent className="numpad-key zero" keypadValue="0" click={click}></KeyComponent>
                            <KeyComponent className="numpad-key" keypadValue="." click={click}></KeyComponent>
                        </div>
                </div>
                <div className="numpad-col-2">
                    <div className="numpad-row">
                        <KeyComponent className="numpad-key clear" keypadValue="CLR" click={click}></KeyComponent>
                        <KeyComponent className="numpad-key enter" keypadValue="ENT" click={click}></KeyComponent>
                        <KeyComponent className="numpad-key keypad" keypadValue="KEYPAD" click={click}></KeyComponent>
                    </div>
                </div>

                <p onClick=>hooooo</p>
            </div>
        </div>
    );
};

export default KeyPadComponent;