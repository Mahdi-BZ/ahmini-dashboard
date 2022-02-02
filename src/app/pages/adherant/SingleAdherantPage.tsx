import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import {useHistory, useParams} from 'react-router-dom'
import {Adherant} from './AdherantPagination'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import {Carousel} from 'react-responsive-carousel'
import {deleteAdherant} from './AdherantCRUD'
import DeleteButton from '../../shared/buttons/deleteButton'
import EditButton from '../../shared/buttons/editButton'
import { GenerateImageFromObject } from '../../../_metronic/helpers/imageHelper'

type Props = {
  className: string
}
const SingleAdherantPage: React.FC<Props> = ({className}) => {
  const [apiData, setParticulars] = useState<Adherant>(null as any)
  const [validateApi, setValidateApi] = useState(null)
  const {id} = useParams<{id: string}>()
  const history = useHistory()
  console.log(apiData)

  useEffect(() => {
    if (!id) return
    axios.get(`/adherant/${id}`).then((e) => setParticulars(e.data))
  }, [id, validateApi])

  const Cmp: React.FC<{data: Adherant}> = ({data}) => {
    if (!data) return null
    else
      return (
        <div>
          <div>
            <h4> ID </h4>
            <p> {data.id} </p>

            <h4> State </h4>
            <p> {data.processingState} </p>

            <h4> nom </h4>
            <p> {data.data.firstName} </p>

            <h4> Prenom </h4>
            <p> {data.data.lastName} </p>

            <h4> Telephone </h4>
            <p> {data.data.phone} </p>

            <h4> Activite </h4>
            <p> {data.data.activity} </p>

            <h4> Nombre d'enfants </h4>
            <p> {data.data.childCount} </p>

            <h4> Date de naissance </h4>
            <p> {data.data.birthDate} </p>

            <h4> Gouvernorat </h4>
            <p> {data.data.governorate} </p>

            <h4> Date de livraison de la carte d'identité</h4>
            <p> {data.data.identityCardDeliveryDate} </p>

            <h4> Situation familiale </h4>
            <p> {data.data.familtySituation} </p>

            <h4> Code postale </h4>
            <p> {data.data.postalCode} </p>

            <h4> Rue </h4>
            <p> {data.data.street} </p>

            <h4> Ville </h4>
            <p> {data.data.town} </p>

            <h4> Code client Ahmini </h4>
            <p> {data.data.clientCodeAhmini} </p>
          </div>
        </div>
      )
  }

  const deleteParticular = (AdhesionId: number) => {
    deleteAdherant(AdhesionId).then((response) => {
      history.push('/crafted/adherant')
    })
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className="d-flex align-items-center">
          {apiData && <GenerateImageFromObject object={apiData} />}      
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>Adherant </span>
            <span className='text-muted mt-1 fw-bold fs-7'>Adherant detailed information</span>
          </h3>
        </div>
        <div className='card-toolbar' style={{width: '25%'}}>
          {apiData && (
            <div className='d-flex w-100 justify-content-around'>
              {/* Begin Edit Button  */}
              <EditButton clickHandler={() => history.push(`/crafted/adherant/update/${id}`)} />
              {/* End Edit Button  */}
              {/* Begin Delete Button  */}
              <DeleteButton clickHandler={() => deleteParticular(apiData.id)} />
            </div>
          )}
        </div>
      </div>
      {/* end::Header */}
      <div className='card-body py-3'>
        <div className='mt-4'>
          <Cmp data={apiData}> </Cmp>
        </div>
      </div>
      {/* begin::Body */}
    </div>
  )
}
export default SingleAdherantPage
