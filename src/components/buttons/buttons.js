import styled from 'styled-components'

export const Button = styled.a`
    border: 1px solid ${props => props.search ? '#51d2e0' : '#f68f50'};
    border-radius: 12px;
    color: #fff;
    background: ${props => props.search ? '#51d2e0' : '#f68f50'};
    padding: 8px;
    cursor: pointer; 
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 14px;

    
    &:hover {
        border: 1px solid ${props => props.search ? '#3fbcc2' : '#d25844'};
        background: ${props => props.search ? '#3fbcc2' : '#d25844'};
    }

    &:active {
        background-color: green;
    }
`

