import React from 'react';
import Title from './Title.jsx';
import Text from './Text.jsx';
import TitleHover from "./TitleHover.jsx";


class App extends React.Component {
    render() {

        const style = {
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center'
        }
        return (
            <div style={style}>
                <Title />
                {/*<TitleHover/>*/}
                <Text/>
            </div>
        );
    }
}

export default App