import React from 'react';
import withBorder from "../hoc/WithBorder";

const LoginFormComponent = (props) => {
    return (

        <div className="signon-box-left" onClick={props.log}>
            <div className="signon-form-row">
                <div className="signon-form-txt">User ID</div>
                <input value={props.username}></input>
            </div>

            <div className="signon-form-row">
                <div className="signon-form-txt">Password</div>
                <input value={props.pass}></input>
            </div>
        </div>
        )
};

export default withBorder(LoginFormComponent,"dotted");