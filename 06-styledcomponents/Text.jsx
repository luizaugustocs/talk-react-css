import React from 'react';
import styled from "styled-components";


const Text = ({className}) => {


    const texto = 'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! Mé faiz elementum girarzis, nisi eros vermeio.'
    return (
        <div className={className}>
            <p >
                {texto}
            </p>
        </div>
    )
};

const StyledText = styled(Text)`
    color: blue;
    flex: 0 0 50%;
    &:hover {
        color: white;
        background-color: blue;
    }
`;


export default StyledText;
