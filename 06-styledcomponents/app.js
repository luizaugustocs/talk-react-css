import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title.jsx';
import Text from './Text.jsx';
import styled from 'styled-components';



class App extends React.Component {

    static propTypes = {
        className: PropTypes.string.isRequired
    };


    render() {
        return (
            <div className={this.props.className}>
                <Title />
                <Text/>
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