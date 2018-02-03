import React from 'react';

const Text = () => {

    const style = {
        flex: '0 0 50%',
        color: 'blue'
    }


    const texto = 'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! Mé faiz elementum girarzis, nisi eros vermeio.'
    return (
        <div style={style}>
            <p >
                {texto}
            </p>
        </div>
    )
}

export default Text;