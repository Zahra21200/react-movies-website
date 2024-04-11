import React from "react";

class Title extends React.Component{
    constructor(props)
    {
        super();
    }
    render()
    {
        return (

<h1 style={{ textShadow: this.props.Shadow, color: this.props.color ,fontSize:this.props.fontSize }}>{this.props.title}</h1>
        )
    }
}

export default Title;