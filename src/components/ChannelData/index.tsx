import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMesssage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current;

    if(div) { 
      div.scrollTop = div.scrollHeight;
    }

    }, [messagesRef])

  return (
      <Container>
        <Messages ref={messagesRef}>
          <ChannelMessage
            author="Bruno Mariano"
            date="28/06/2020"
            content={
              <>
                <Mention>@Mariana kawaii desu</Mention> TE AMO CARA
              </>
            }
          />
          <ChannelMessage
            author="Mariana kawaii desu"
            date="28/06/2020"
            content="foda-se"
          />
          <ChannelMessage
            author="Bruno Mariano"
            date="28/06/2020"
            content={
              <>
                <Mention>@Mariana kawaii desu</Mention> TE AMO CARA
                </>
            }
          />
          <ChannelMessage
            author="Mariana kawaii desu"
            date="28/06/2020"
            content="foda-se"
          />
          <ChannelMessage
            author="Bruno Mariano"
            date="28/06/2020"
            content={
              <>
                <Mention>@Mariana kawaii desu</Mention> TE AMO CARA
                </>
            }
          />
          <ChannelMessage
            author="Mariana kawaii desu"
            date="28/06/2020"
            content="foda-se"
          />
          <ChannelMessage
            author="Bruno Mariano"
            date="28/06/2020"
            content={
              <>
                <Mention>@Mariana kawaii desu</Mention> TE AMO CARA
                </>
            }
          />
          <ChannelMessage
            author="Mariana kawaii desu"
            date="28/06/2020"
            content="foda-se"
          />
          <ChannelMessage
            author="Bruno Mariano"
            date="28/06/2020"
            content={
              <>
                <Mention>@Mariana kawaii desu</Mention> TE AMO CARA
                </>
            }
          />
          <ChannelMessage
            author="Mariana kawaii desu"
            date="28/06/2020"
            content="foda-se"
          />
          <ChannelMessage
            author="Bruno Mariano"
            date="28/06/2020"
            content={
              <>
                <Mention>@Mariana kawaii desu</Mention> TE AMO CARA
                </>
            }
          />
          <ChannelMessage
            author="Mariana kawaii desu"
            date="28/06/2020"
            content="foda-se"
          />
          <ChannelMessage
            author="Bruno Mariano"
            date="28/06/2020"
            content={
              <>
                <Mention>@Mariana kawaii desu</Mention> TE AMO CARA
                </>
            }
          />
          <ChannelMessage
            author="Mariana kawaii desu"
            date="28/06/2020"
            content="foda-se"
          />
          <ChannelMessage
            author="Bruno Mariano"
            date="28/06/2020"
            content={
              <>
                <Mention>@Mariana kawaii desu</Mention> TE AMO CARA
                </>
            }
          />
          <ChannelMessage
            author="Mariana kawaii desu"
            date="28/06/2020"
            content="foda-se"
          />
          <ChannelMessage
            author="Bruno Mariano"
            date="28/06/2020"
            content={
              <>
                <Mention>@Mariana kawaii desu</Mention> TE AMO CARA
                </>
            }
          />
          <ChannelMessage
            author="Mariana kawaii desu"
            date="28/06/2020"
            content="foda-se"
          />
        </Messages>

        <InputWrapper>
          <Input type="text" placeholder="Conversar em #chat-livre" />
          <InputIcon />
        </InputWrapper>
      </Container>
  )
}

export default ChannelData;
 