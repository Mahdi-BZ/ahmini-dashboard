import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAdhesionDemand } from './AdhesionDemandCRUD';
import AdhesionDemandForm from './AdhesionDemandForm';
import { AdhesionDemandModel } from './AdhesionDemandModel';

interface IUpdateAdhesionDemandPageProps {
}

const UpdateAdhesionDemandPage: React.FunctionComponent<IUpdateAdhesionDemandPageProps> = (props) => {
  const {id} = useParams<{id: string}>();
  const [adhesionDemand, setAdhesionDemand] = useState<AdhesionDemandModel>();
  useEffect(() => {
      if(!id || adhesionDemand) return;
      getAdhesionDemand(id).then(response => setAdhesionDemand(response.data));
  });
  return (
      <div>
        {adhesionDemand && <AdhesionDemandForm adhesionDemand={adhesionDemand}/>}
      </div>
  );
};

export default UpdateAdhesionDemandPage;
