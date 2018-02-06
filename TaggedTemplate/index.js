import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class App extends React.Component {

    static propTypes = {
        entidade: PropTypes.string,
        edicao: PropTypes.string
    };

    render() {
        const text = `Bem vindos ao ${this.props.edicao} meetup sobre React organizado pelo ${this.props.entidade}.`;
        return (
            <p>{text}</p>
        );
    }
}



ReactDOM.render(<App entidade={'Dev Paraná'} edicao={'sexto'}/>, document.getElementById('app'));



const boldFn = (text) => `<b>${text}</b>`;

const bold = (strings, ...values) => {
    console.log(strings, values);
    const result = [];
    strings.forEach(s =>{
        result.push(s);
        result.push(`<b>${values.shift() || ''}</b>`)
    });

    return result.join('');
};


// renderMarkup(html){
//     return {__html: html}
// }
//         <p dangerouslySetInnerHTML={this.renderMarkup(text)}></p>


        // const text = bold(['Bem vindos ao ', ' meetup sobre React organizado pelo ', '.'],this.props.edicao,this.props.entidade);
