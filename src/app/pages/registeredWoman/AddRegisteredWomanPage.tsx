import * as React from 'react';
import RegisteredWomanForm from './RegisteredWomanForm';

interface IAddRegisteredWomanPageProps {
}

const AddRegisteredWomanPage: React.FunctionComponent<IAddRegisteredWomanPageProps> = (props) => {
  return (
      <RegisteredWomanForm />
  );
};

export default AddRegisteredWomanPage;
