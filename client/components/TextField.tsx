import * as React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
  border: 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 9px 14px;
  border-radius: 6px;
  display: block;
  margin-bottom: 20px;
  width: calc(100% - 28px);
`;

const TextInputContainer = styled.div`
  width: calc(100%-60px);
  margin: 0 30px;
`;

type Props = React.ComponentProps<typeof TextInput>;

const TextField: React.FunctionComponent<Props> = (props) => {
  return (
    <TextInputContainer>
      <TextInput {...props} />
    </TextInputContainer>
  );
};

export default TextField;
