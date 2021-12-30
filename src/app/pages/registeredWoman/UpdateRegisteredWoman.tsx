import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getWoman } from './WomanCRUD';
import WomanForm from './RegisteredWomanForm';
import { WomanModel } from './WomanModel';

interface IUpdateWomanPageProps {
}

const UpdateRegisteredWomanPage: React.FunctionComponent<IUpdateWomanPageProps> = (props) => {
  const {id} = useParams<{id: string}>();
  const [woman, setWoman] = useState<WomanModel>();
  useEffect(() => {
      if(!id || woman) return;
      getWoman(id).then(response => setWoman(response.data));
  });
  return (
      <div>
        {woman && <WomanForm woman={woman}/>}
      </div>
  );
};

export default UpdateRegisteredWomanPage;
