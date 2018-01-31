import React from 'react';


import './styles/Text.css';

const Text = () => {

    const texto = 'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! Mé faiz elementum girarzis, nisi eros vermeio.'
    return (
        <div className="texto">
            <p >
                {texto}
            </p>
        </div>
    )
}

export default Text;