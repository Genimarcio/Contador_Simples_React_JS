import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Botao = styled.button`
    width: 50%;
    background-color: ${props => `#${props.cor}`};
    border-radius: 5px;
    margin: 5px;
`;

export const Text = styled.text`
    color: ${props => `#${props.cor}`};
    font-size: ${props => `${props.tamanho}px`};
    text-align: center;
    padding: 10px 0px 10px 0px;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;