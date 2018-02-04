import React from 'react';
import Title from './Title.jsx';
import Text from './Text.jsx';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider} from 'react-jss';


const theme = {
    title : {
        hoverTransformation: 'underline',
        color: 'green'
    },
    text: {
        color: 'blue',
        hoverColor: 'white'
    }
};

class App extends React.Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {
        return (
                <div className={this.props.classes.container}>
                    <Title />
                    <Text/>
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
}

class AppWithThemeProvider extends React.Component {
    render () {

        const AppWithThemeProvider = injectSheet(styles)(App);
        return (
            <ThemeProvider theme={theme}>
                <AppWithThemeProvider />
            </ThemeProvider>
        )
    }
}

export default AppWithThemeProvider
