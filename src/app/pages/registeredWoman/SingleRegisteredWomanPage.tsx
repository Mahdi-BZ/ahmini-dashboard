import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import {useHistory, useParams} from 'react-router-dom'
import { deleteWoman } from './WomanCRUD'
import { Datum } from './RegisteredWomanPagination'
import DeleteButton from '../../shared/buttons/deleteButton'
import EditButton from '../../shared/buttons/editButton'
import { GenerateImageFromObject } from '../../../_metronic/helpers/imageHelper'

type Props = {
  className: string
}
const SingleRegisteredWomanPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<Datum>(null as any)
  const [validateApi, setValidateApi] = useState(null)
  const {id} = useParams<{id: string}>()
  const history = useHistory();

  useEffect(() => {
    if (!id) return
    axios.get(`/registered-woman/${id}`).then((e) => setParticulars(e.data))
  }, [id, validateApi])

  const Cmp: React.FC<{data: Datum}> = ({data}) => {
    if (!data) return null
    else
      return (
        <div>
          <div>
            <h4> ID </h4>
            <p> {data.id} </p>
          </div>
          <div>
            <h4> Code </h4>
            <p> {data.womanCode} </p>
          </div>
          <div>
            <h4> CIN </h4>
            <p> {data.cin} </p>
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
            <h4> Governorate</h4>
            <p> {data.governorate} </p>
          </div>
          <div>
            <h4> Code Postal</h4>
            <p> {data.postalCode} </p>
          </div>
          <div>
            <h4> Travail</h4>
            <p> {data.work} </p>
          </div>
        </div>
      )
  }

  const deleteParticular = (id: number) => {
    deleteWoman(id).then(response => {
        history.push('/crafted/registered-woman');
    })
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className="d-flex align-items-center">
          {particularsApiData && <GenerateImageFromObject object={particularsApiData} />}      
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>Femme </span>
            <span className='text-muted mt-1 fw-bold fs-7'>Informations de la femme détailées</span>
          </h3>
        </div>
        <div className='card-toolbar w-25'>
          {particularsApiData && (
            <div className='d-flex w-50 justify-content-around'>
              {/* Begin Edit Button  */}
              <EditButton clickHandler={() => history.push(`/crafted/registered-woman/update/${id}`)} />
              {/* End Edit Button  */}
              {/* Begin Delete Button  */}
              <DeleteButton clickHandler={() => deleteParticular(particularsApiData.id)} />
              {/* End Delete Button  */}
            </div>
          )}
        </div>
      </div>
      {/* end::Header */}
      <div className='card-body py-3'>
        <div className='mt-4'>
          <Cmp data={particularsApiData}> </Cmp>
        </div>
      </div>
      {/* begin::Body */}
    </div>
  )
}
export default SingleRegisteredWomanPage
