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
      getAdmin(id).then(response => {
        const data = response.data;
        const admin: AdminModel = {
          id: data.id,
          password: data.password,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber
        }  
        setAdmin(admin)
      });
  });
  return (
      <div>
        {admin && <AdminForm admin={admin}/>}
      </div>
  );
};

export default UpdateAdminPage;
