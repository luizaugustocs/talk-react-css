import React from 'react';
import CSSModules from 'react-css-modules'

import styles from './styles/Text.css';

console.log('text', styles)

const Text = ({styles}) => {

    const texto = 'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! Mé faiz elementum girarzis, nisi eros vermeio.'
    return (
        <div className={styles.texto}>
            <p >
                {texto}
            </p>
        </div>
    )
}

export default CSSModules(Text, styles);