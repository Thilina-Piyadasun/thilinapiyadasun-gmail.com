import React, {Component} from 'react';
import './App.css';
import LoginWindow from './LoginWindow'
import KeyPadComponent from "./Components/KeyPadComponent";
import store from "./store/store";

class App extends Component{

    state = {
        username : "",
        password : "",
        globalKeyBoard : false
    };

    componentDidMount() {

        store.subscribe(()=> {
            this.setState(store.getState());
        })
    }

    render() {
        let globalKeyboard = null;

        if(this.state.globalKeyBoard){
            globalKeyboard = <div>
                                <KeyPadComponent/>
                            </div>
        }

        return (
            <div>
                <div className="App">
                    <LoginWindow username={this.state.username} pass={this.state.password}></LoginWindow>
                </div>
                {globalKeyboard}
            </div>
        )
    }
}

export default App;
