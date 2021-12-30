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
          setParticular(particular)
        });
  });
  return (
      <div>
        {particular && <ParticularForm particular={particular}/>}
      </div>
  );
};

export default UpdateParticularPage;
