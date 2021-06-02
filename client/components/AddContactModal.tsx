import * as React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import ModalTitle from './ModalTitle';
import ModalActionButton from './ModalActionButton';
import TextField from './TextField';
import useLazyFetch from '../hooks/useLazyFetch';
import Errors from './Errors';
import { useHistory } from 'react-router';

interface IProps {}

const SectionHeading = styled.h3`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.56);
  padding: 0 30px;
`;

const Form = styled.form`
  flex-grow: 1;
  padding: 20px 0;
  overflow-y: auto;
`;

const SplitFields = styled.div`
  display: flex;
`;

const AddContactModal: React.FunctionComponent<IProps> = ({}) => {
  const history = useHistory();
  const [doFetch, response] = useLazyFetch<any>();
  const formRef = React.useRef<HTMLFormElement>();
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    city: '',
    zipCode: '',
  });

  const handleInputChange = React.useCallback((e) => {
    setInputs((x) => ({
      ...x,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSaveClick = () => {
    formRef.current.dispatchEvent(
      new Event('submit', { cancelable: true, bubbles: true })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await doFetch('http://localhost:3000/contact', {
      method: 'POST',
      body: JSON.stringify(inputs),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (response.type === 'success') {
      history.push('/');
    }
  };

  return (
    <Modal>
      <ModalTitle>Add Contact</ModalTitle>
      <Form ref={formRef} onSubmit={handleSubmit}>
        {response.type === 'error' && response.data?.formInputErrors && (
          <Errors formInputErrors={response.data.formInputErrors} />
        )}
        <SectionHeading>Basic Information [required]</SectionHeading>
        <TextField
          onChange={handleInputChange}
          name="name"
          required
          placeholder="Name"
          value={inputs.name}
        />
        <TextField
          onChange={handleInputChange}
          name="email"
          required
          placeholder="Email"
          value={inputs.email}
        />
        <SectionHeading>Address [optional]</SectionHeading>
        <TextField
          onChange={handleInputChange}
          name="addressLine1"
          required
          placeholder="Address Line 1"
          value={inputs.addressLine1}
        />
        <TextField
          onChange={handleInputChange}
          name="addressLine2"
          required
          placeholder="Address Line 2"
          value={inputs.addressLine2}
        />
        <TextField
          onChange={handleInputChange}
          name="city"
          required
          placeholder="City"
          value={inputs.city}
        />
        <SplitFields>
          <TextField
            onChange={handleInputChange}
            name="state"
            required
            placeholder="State"
            value={inputs.state}
          />
          <TextField
            onChange={handleInputChange}
            name="zipCode"
            required
            placeholder="Zip Code"
            value={inputs.zipCode}
          />
        </SplitFields>
      </Form>
      <ModalActionButton onClick={handleSaveClick}>Save</ModalActionButton>
    </Modal>
  );
};

export default AddContactModal;
