import React from 'react';

class Songs extends React.Component {
    render() {
        const {songItems,active} = this.props;
        return (
            <div className="music">
                <h3>Songs</h3>
                <ul>
                {songItems.map((element, index)=>{
                            return active===index?<li key={index} className="active">&nbsp;{element}</li>:<li  id="song1" key={index}>&nbsp;{element}</li>
                        })}
                </ul>
            </div>

        )
    }

}

export default Songs;