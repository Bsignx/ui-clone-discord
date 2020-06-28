import React from 'react';

import { Container, HashtagIcon, Title, Separador, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
      <Container>
        <HashtagIcon />

        <Title>chat-livre</Title>

        <Separador />

        <Description>Canal aberto para conversas</Description>
      </Container>
  )
}

export default ChannelInfo;
 