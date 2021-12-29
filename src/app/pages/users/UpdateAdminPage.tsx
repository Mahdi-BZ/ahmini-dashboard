import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAdmin } from './AdminCRUD';
import AdminForm from './AdminForm';
import { AdminModel } from './AdminModel';

interface IUpdateAdminPageProps {
}

const UpdateAdminPage: React.FunctionComponent<IUpdateAdminPageProps> = (props) => {
  const {id} = useParams<{id: string}>();
  const [admin, setAdmin] = useState<AdminModel>();
  useEffect(() => {
      if(!id || admin) return;
      getAdmin(id).then(response => setAdmin(response.data));
  });
  return (
      <div>
        {admin && <AdminForm admin={admin}/>}
      </div>
  );
};

export default UpdateAdminPage;
