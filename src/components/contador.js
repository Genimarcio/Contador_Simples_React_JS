import React, {useState} from 'react';
import { Container, Text, Botao, SubContainer } from './estiloContador.js';


export default function Contador() {
    const [contador, SetContador] = useState(0);

    function aumentar(){
        SetContador(contador +1)
    }

    function diminuir(){
        SetContador(contador -1)
    }

 return (
   <Container>
       <Text cor="00FF7F" tamanho="80">{contador}</Text>
       <SubContainer>
            <Botao cor="00FF7F" onClick={diminuir}>
                <Text cor="FFFFFF" tamanho="20">Menos</Text>
            </Botao>
            <Botao cor="00FF7F" onClick={aumentar}>
                <Text cor="FFFFFF" tamanho="20">Mais</Text>
            </Botao>
       </SubContainer>
   </Container>
  );
}