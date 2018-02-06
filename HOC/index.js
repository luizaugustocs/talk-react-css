import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {

        const text = `Hello ${this.props.wrapped ? 'wrapped' : ''} ${this.props.text}`
        return (
            <h1>{text}</h1>
        );
    }
}

const wrap = (Component) => {
    return (props) => (
        <Component wrapped={true} {...props} />
    );
}

const WrappedApp = wrap(App);

ReactDOM.render(<App text={'Dev Paraná'}/>, document.getElementById('app'));