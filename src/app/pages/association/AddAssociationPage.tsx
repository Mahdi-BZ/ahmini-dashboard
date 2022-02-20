import * as React from 'react';
import AssociationForm from './AssociationForm';

interface IAddAssociationPageProps {
}

const AddAssociationPage: React.FunctionComponent<IAddAssociationPageProps> = (props) => {
  return (
      <AssociationForm />
  );
};

export default AddAssociationPage;
