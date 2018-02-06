import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title.jsx';
import Text from './Text.jsx';
import styled from 'styled-components';



class App extends React.Component {

    static propTypes = {
        className: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state ={
            hover: true
        }
    }

    changeHover = () => {
        this.setState({hover: !this.state.hover})
    };


    render() {
        return (
            <div className={this.props.className}>
                <Title hover={this.state.hover}/>
                <Text/>
                <div style={{flex: '1 100%'}}>
                    <input type="checkbox" checked={this.state.hover} onChange={this.changeHover}/> Hover
                </div>
            </div>
        );
    }
}

const StyledApp = styled(App)`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;     
`;


export default StyledApp;