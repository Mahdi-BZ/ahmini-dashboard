import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getParticular } from './ParticularCRUD';
import ParticularForm from './ParticularForm';
import { ParticularModel } from './ParticularModel';

interface IUpdateParticularPageProps {
}

const UpdateParticularPage: React.FunctionComponent<IUpdateParticularPageProps> = (props) => {
  const {id} = useParams<{id: string}>();
  const [particular, setParticular] = useState<ParticularModel>();
  useEffect(() => {
      if(!id || particular) return;
      getParticular(id).then(response => {
          const particular = response.data;
          particular.password = "placeholderJustSoTheFormSubmits"
          const particularToSet: ParticularModel = {
            id: particular.id,
            password: particular.password,
            email: particular.email,
            firstName: particular.firstName,
            lastName: particular.lastName,
            phoneNumber: particular.phoneNumber,
            userName: particular.userName
          }
          setParticular(particularToSet)
        });
  });
  return (
      <div>
        {particular && <ParticularForm particular={particular}/>}
      </div>
  );
};

export default UpdateParticularPage;
