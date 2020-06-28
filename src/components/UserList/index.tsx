import React from 'react';

import { Container, Role, User, Avatar } from './styles';

export interface UserProps {
  nickname: String;
  isBot?: Boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserName: React.FC = () => {
  return (
      <Container>
        <Role>Disponível - 1</Role>
        <UserRow nickname="Mariana gostosaaaaaaaaaa" />

        <Role>offline - 12</Role>
        <UserRow nickname="Michel" isBot />
        <UserRow nickname="Mariana gostosaaaaaaaaaa" />
        <UserRow nickname="Mariana gostosaaaaaaaaaa" />
        <UserRow nickname="Mariana gostosaaaaaaaaaa" />
        <UserRow nickname="Mariana gostosaaaaaaaaaa" />
        <UserRow nickname="Mariana gostosaaaaaaaaaa" />
        <UserRow nickname="Mariana gostosaaaaaaaaaa" />
        <UserRow nickname="Mariana gostosaaaaaaaaaa" />
        <UserRow nickname="Mariana gostosaaaaaaaaaa" />
        <UserRow nickname="Mariana gostosaaaaaaaaaa" />
        <UserRow nickname="Mariana gostosaaaaaaaaaa" />
      </Container>
  )
}

export default UserName;
 