import React, {Component} from 'react';
import './App.css';
import LoginWindow from './LoginWindow'
import KeyPadComponent from "./Components/KeyPadComponent";

class App extends Component{

    state = {
        username : "",
        password : "",
        globalKeyBoard : false
    };

    toggleGlobalKeyboard = (e) =>{
        return e === "KEYPAD" ? !this.state.globalKeyBoard : this.state.globalKeyBoard;
    };

    appendEmitValues = (e) => {

        if(e === 'CLR'){
            let endIndex = this.state.username.length-1;
            return endIndex > 0 ? this.state.username.substr(0,endIndex) : "";
        }
        else if( e === "KEYPAD")
        {
            return this.state.username;
        }
        return this.state.username + e;
    };

    buttonClickHandler = (e)=> {

        this.setState(
            {
                ...this.state,
                username : this.appendEmitValues(e),
                globalKeyBoard : this.toggleGlobalKeyboard(e)
            }
        );
    };

    render() {
        let globalKeyboard = null;

        if(this.state.globalKeyBoard){
            globalKeyboard = <div>
                                <KeyPadComponent click={this.buttonClickHandler}/>
                            </div>
        }

        return (
            <div>
                <div className="App">
                    <LoginWindow username={this.state.username} pass={this.state.password} click={this.buttonClickHandler}></LoginWindow>
                </div>
                {globalKeyboard}
            </div>
        )
    }
}

export default App;
