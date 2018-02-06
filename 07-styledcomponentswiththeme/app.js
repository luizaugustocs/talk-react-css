import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title.jsx';
import Text from './Text.jsx';
import styled, {ThemeProvider} from 'styled-components';
import themes from "../05-jss/themes";

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

const theme = {
    mode: 'alternative'
}

class AppWithThemeProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: {
                mode: 'default'
            }
        }
    }

    onChangeTheme = (event) => {
        const {value} = event.target;
        this.setState({theme: {mode: value}, themeLabel: value})
    };
    render () {

        return (
            <ThemeProvider theme={this.state.theme}>
                <div >
                <StyledApp/>
                    <select value={this.state.themeLabel} onChange={this.onChangeTheme}>
                        <option value="default">Default</option>
                        <option value="alternative">Alternative</option>
                    </select>
                </div>
            </ThemeProvider>
        )
    }
}

export default AppWithThemeProvider;