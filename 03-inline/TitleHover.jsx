import React from 'react';


class TitleHover extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hover: false
        }
    }

    changeHover = () => {
        this.setState({hover: !this.state.hover})
    }

    render() {

        const hoverStyle = this.state.hover ? {
            textDecoration: 'underline'
        } : {};

        const style = {
            ...hoverStyle,
            textAlign: 'center',
            color: 'green',
            flex: '1 100%'
        }

        return (
            <h1 style={style} onMouseEnter={this.changeHover} onMouseLeave={this.changeHover}
            >Meetup React Maringá</h1>

        )
    }
}

export default TitleHover;