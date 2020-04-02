import React,{Component} from 'react';
import KeyPadComponent from'./Components/KeyPadComponent'
import LoginFormComponent from'./Components/LoginFormComponent'

const LoginWindow = ( {username,pass,click}) => {

        return (
            <div className="signon-box">
                <LoginFormComponent username={username} pass={pass}></LoginFormComponent>
                <KeyPadComponent click={click}/>
            </div>
        );

};

export default LoginWindow;

