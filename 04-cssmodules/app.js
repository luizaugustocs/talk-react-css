import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from'./styles/app.css';
import Title from './Title.jsx';
import Text from './Text.jsx';

class App extends React.Component {

    static propTypes = {
        style: PropTypes.object
    };

    render() {
        console.log(this.props)
        return (
            <div className={this.props.styles.container}>
                <Title />
                <Text/>
            </div>
        );
    }
}

export default CSSModules(App, styles);