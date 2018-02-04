import React from 'react';
import styled from "styled-components";
import theme from 'styled-theming';

const Title = ({className}) => {

    return (
            <h1 className={className}>Meetup React Maringá</h1>

    )
};

const color = theme('mode', {
    'default': 'green',
    alternative: 'darkorange'
});

const textTransformation = theme('mode', {
        'default': 'underline',
        alternative: 'overline'
    }
);

const StyledTitle = styled(Title)`
    color: ${color};
    text-align: center;
    flex: 1 100%;
    &:hover {
        text-decoration: ${(props) => props.hover ? textTransformation : 'none'}
    }
`;

export default StyledTitle;