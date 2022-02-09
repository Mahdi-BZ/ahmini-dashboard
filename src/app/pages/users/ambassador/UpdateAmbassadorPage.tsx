import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAmbassador } from './AmbassadorCRUD';
import AmbassadorForm from './AmbassadorForm';
import { AmbassadorModel } from './AmbassadorModel';

interface IUpdateAmbassadorPageProps {
}

const UpdateAmbassadorPage: React.FunctionComponent<IUpdateAmbassadorPageProps> = (props) => {
  const {id} = useParams<{id: string}>();
  const [ambassador, setAmbassador] = useState<AmbassadorModel>();
  useEffect(() => {
      if(!id || ambassador) return;
      getAmbassador(id).then(response => {
        const data = response.data;
        const ambassador: AmbassadorModel = {
          id: data.id,
          phoneNumber: data.phoneNumber,
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
          userName: data.userName,
          governorate: data.governorate
        }
        setAmbassador(ambassador);
      });
  });
  return (
      <div>
        {ambassador && <AmbassadorForm ambassador={ambassador}/>}
      </div>
  );
};

export default UpdateAmbassadorPage;
