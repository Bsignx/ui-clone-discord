import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separador } from './styles';

const ServerList: React.FC = () => {
  return (
      <Container>
        <ServerButton isHome />

        <Separador />

        <ServerButton hasNotifications />
        <ServerButton mentions={3} />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton />
        <ServerButton mentions={3} />
        <ServerButton />
        <ServerButton />
        <ServerButton />
      </Container>
  )
}

export default ServerList;
