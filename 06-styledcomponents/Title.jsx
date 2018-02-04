import React from 'react';
import styled from "styled-components";

const Title = ({className}) => {

    return (
            <h1 className={className}>Meetup React Maringá</h1>

    )
};

const StyledTitle = styled(Title)`
    color: green;
    text-align: center;
    flex: 1 100%;
    &:hover {
        text-decoration: ${(props) => props.hover ? 'underline' : 'none'}
    }
`;

export default StyledTitle;