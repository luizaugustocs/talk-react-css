import React from 'react';
import Title from './Title.jsx';
import Text from './Text.jsx';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider} from 'react-jss';
import themes from './themes';

class App extends React.Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
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
                <div className={this.props.classes.container}>
                    <Title hover={this.state.hover}/>
                    <Text/>
                    <div style={{flex: '1 100%'}}>
                        <input type="checkbox" checked={this.state.hover} onChange={this.changeHover}/> Hover
                    </div>
                </div>


        );
    }
}

const styles = {
    container : {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
    }
};

class AppWithThemeProvider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            themeLabel: 'default',
            theme: themes.default
        }
    }

    onChangeTheme = (event) => {
        const {value} = event.target;
        this.setState({theme: themes[value], themeLabel: value})
    };

    render() {

        const AppWithThemeProvider = injectSheet(styles)(App);
        return (
            <ThemeProvider theme={this.state.theme}>
                <div>
                    <AppWithThemeProvider />
                    <div >
                        <select value={this.state.themeLabel} onChange={this.onChangeTheme}>
                            <option value="default">Default</option>
                            <option value="alternative">Alternative</option>
                        </select>
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

export default AppWithThemeProvider
