import React from 'react';
import styled from "styled-components";
import theme from 'styled-theming';

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

const color = theme('mode', {
    'default': 'blue',
    alternative: 'black'
});

const hoverColor = theme('mode', {
    'default': 'white',
    alternative: 'grey'
    }
);

const StyledText = styled(Text)`
    color: ${color};
    flex: 0 0 50%;
    &:hover {
        color: ${hoverColor};
        background-color: ${color};
    }
`;


export default StyledText;
