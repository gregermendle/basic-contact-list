import styled from 'styled-components';

const ModalActionButton = styled.button`
  border: 0;
  background-color: #308efe;
  color: #fff;
  padding: 15px 0;
  &:hover,
  &:focus {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.75;
  }
`;

export default ModalActionButton;
