import React from 'react';
import CSSModules from 'react-css-modules'

import styles from './styles/Title.css';


const Title = ({styles}) => {
    return (
            <h1 className={styles.titulo}>Meetup React Maringá</h1>

    )
};

export default CSSModules(Title, styles);