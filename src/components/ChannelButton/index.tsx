import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  channelName: String;
  Selected?: Boolean;
}

const ChannelButton: React.FC<Props> = ({channelName, Selected}) => {
  return (
      <Container className={Selected ? 'active' : ''} >
        <div>
          <HashtagIcon />
          <span>{channelName}</span>
        </div>

        <div>
          {
             Selected && <InviteIcon />
          }
          <SettingsIcon />
        </div>
      </Container>
  )
}

export default ChannelButton;
 