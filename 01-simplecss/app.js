import React from 'react';
import Title from './Title.jsx';
import Text from './Text.jsx';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Title />
                <Text/>
            </div>
        );
    }
}

export default App