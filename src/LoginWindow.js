import React from 'react';
import KeyPadComponent from'./Components/KeyPadComponent'
import LoginFormComponent from'./Components/LoginFormComponent'

const LoginWindow = ( {username,pass,click}) => {

        return (
            <div className="signon-box">
                <LoginFormComponent username={username} pass={pass}></LoginFormComponent>
                <KeyPadComponent/>
            </div>
        );
};

export default LoginWindow;

