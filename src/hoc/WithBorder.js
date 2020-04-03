import React, {Component} from 'react';
import '../App.css';

const withBorder = (InnerComponent, styleClass) => {

    class WithBorder extends Component{

        logHandler = (e) => {
            console.log("[log handler]", e.target);
        };

        render() {
            return(
                <div className={styleClass}>
                    <InnerComponent log={this.logHandler} {...this.props}/>
                </div>
            ) ;

        }
    }

    return WithBorder;
};

export default withBorder;