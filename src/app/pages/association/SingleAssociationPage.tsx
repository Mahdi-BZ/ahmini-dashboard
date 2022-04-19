import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import {useHistory, useParams} from 'react-router-dom'
import { GenerateImageFromObject } from '../../../_metronic/helpers/imageHelper'
import DeleteButton from '../../shared/buttons/deleteButton'
import EditButton from '../../shared/buttons/editButton'
import { deleteAss } from './AssociationCRUD'
import { AssociationModel } from './AssociationModel'

type Props = {
  className: string
}
const SingleAssociationPage: React.FC<Props> = ({className}) => {
  const [associationsApiData, setAssociations] = useState<AssociationModel>(null as any)
  const {id} = useParams<{id: string}>()
  const history = useHistory()

  useEffect(() => {
    if (!id) return
    axios.get(`/association/${id}`).then((e) => setAssociations(e.data))
  }, [id,])

  const deleteAssociation = (id: number) => deleteAss(id).then(() => history.push('/crafted/users/association'))

  const Cmp: React.FC<{data: AssociationModel}> = ({data}) => {
    if (!data) return null
    else
      return (
        <div>
          <div>
            <h4> ID </h4>
            <p> {data.id} </p>
          </div>

          <div>
            <h4> Nom utilisateur </h4>
            <p> {data.associationName} </p>
          </div>
          <div>
            <h4> Responsable</h4>
            <p> {data.responsible} </p>
          </div>
          <div>
            <h4> Nom</h4>
            <p> {data.firstName} </p>
          </div>
          <div>
            <h4> Prénom</h4>
            <p> {data.lastName} </p>
          </div>
          <div>
            <h4> Email</h4>
            <p> {data.email} </p>
          </div>
          <div>
            <h4> Téléphone</h4>
            <p> {data.phoneNumber} </p>
          </div>
          <div>
            <h4> FAX</h4>
            <p> {data.faxNumber} </p>
          </div>
        </div>
      )
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className="d-flex align-items-center">
          {associationsApiData && <GenerateImageFromObject object={associationsApiData} />}    
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>Association </span>
            <span className='text-muted mt-1 fw-bold fs-7'>Informations de l'association détailées</span>
          </h3>
        </div>
        <div className='card-toolbar' style={{width: '35%'}}>
          {associationsApiData && (
            <div className='d-flex w-100 justify-content-around'>
              {/* End Edit Button  */}
              {/* Begin Delete Button  */}

              <DeleteButton clickHandler={() => deleteAssociation(associationsApiData.id)} />
              {/* End Delete Button  */}
            </div>
          )}
        </div>
      </div>
      {/* end::Header */}
      <div className='card-body py-3'>
        <div className='mt-4'>
          <Cmp data={associationsApiData}> </Cmp>
        </div>
      </div>
      {/* begin::Body */}
    </div>
  )
}
export default SingleAssociationPage
