import React from 'react';
import styled from 'styled-components';
import Item from '../Item';
import  ImageFilter  from '../ImageFilter';

 const Itens = styled.div `

    box-shadow: 4px 4px 20px 0px rgba(0,0,0.1);
    border-radius: 10px;
    margin: 10px 0;
    display: flex;
    align-itens: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 16px;
    
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return(
        <Itens>
            {ImageFilter(props.type)}
            <Item {...props} />
            <span>{props.date}</span>
        </Itens>    
    )

}