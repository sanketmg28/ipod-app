import React from 'react';
import "../assets/css/Themes.css"

class Themes extends React.Component {
    render() {
        const {active} = this.props;
        return (
            <div className="music">
                <h2>Theme Select</h2>
                <ul>
                    {["Snow White","Black","USC Gold","Space Gray","Pearl"].map((element,index)=>{
                        return active===index?<li key={index} className="active theme-li">{element}</li>:<li className="theme-li" key={index}>{element} </li>
                    })}
                </ul>
            </div>

        )
    }

}

export default Themes;