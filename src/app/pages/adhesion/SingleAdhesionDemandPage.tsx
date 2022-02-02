import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import {useHistory, useParams} from 'react-router-dom'
import {AdhesionDemand} from './AdhesionDemandPagination'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import {Carousel} from 'react-responsive-carousel'
import { deleteAdhesionDemand } from './AdhesionDemandCRUD'
import DeleteButton from '../../shared/buttons/deleteButton'
import EditButton from '../../shared/buttons/editButton'
import { GenerateImageFromObject } from '../../../_metronic/helpers/imageHelper'

type Props = {
  className: string
}
const SingleAdhesionDemandPage: React.FC<Props> = ({className}) => {
  const [apiData, setParticulars] = useState<AdhesionDemand>(null as any)
  const [validateApi, setValidateApi] = useState(null)
  const {id} = useParams<{id: string}>()
  const history = useHistory()
  console.log(apiData)

  useEffect(() => {
    if (!id) return
    axios.get(`/adhesion-demand/${id}`).then((e) => setParticulars(e.data))
  }, [id, validateApi])

  const Cmp: React.FC<{data: AdhesionDemand}> = ({data}) => {
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

            <h4> Fate de livraison de la carte d'identité</h4>
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

            <h4 style={{display: 'flex'}}>
              <span>Documents</span> <div style={{flexGrow: '1'}} />
              {!!data.documents.length && <Button> Download all Document </Button>}
            </h4>

            {!data?.documents?.length && <p> No documents to show </p>}

            <Carousel>
              {data.documents.map((e) => (
                <div style={{display: 'flex', justifyContent: 'center'}} key={e.id}>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    href={`${process.env.REACT_APP_FILE_SERVER_URL}/images/${e.filename}${process.env.REACT_APP_FILE_SERVER_TOKEN}`}
                  >
                    <img
                      height={500}
                      width={500}
                      style={{objectFit: 'cover'}}
                      alt='document'
                      src={`${process.env.REACT_APP_FILE_SERVER_URL}/images/${e.filename}${process.env.REACT_APP_FILE_SERVER_TOKEN}`}
                    ></img>
                  </a>
                </div>
              ))}
            </Carousel>

            {/* <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'}}>
              {data.documents.map((e) => (
                <div key={e.id}>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    href={`${process.env.REACT_APP_FILE_SERVER_URL}/images/${e.filename}${process.env.REACT_APP_FILE_SERVER_TOKEN}`}
                  >
                    <img
                      width={300}
                      height={300}
                      alt='document'
                      src={`${process.env.REACT_APP_FILE_SERVER_URL}/images/${e.filename}${process.env.REACT_APP_FILE_SERVER_TOKEN}`}
                    ></img>
                  </a>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      )
  }

  const validateApiFunc = (e: boolean) => {
    axios
      .patch(`/adhesion-demand/${e ? 'verify' : 'deny'}/${id}`)
      .then((e) => setValidateApi(e.data.processingState === 'accepted'))
  }
  const deleteParticular = (AdhesionId: number) => {
    deleteAdhesionDemand(AdhesionId).then(response => {
      history.push('/crafted/adhesion/demands');
    })
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className="d-flex align-items-center">
          {apiData && <GenerateImageFromObject object={apiData} />}      
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>Adhesion Demand </span>
            <span className='text-muted mt-1 fw-bold fs-7'>Adhesion Demand detailed information</span>
          </h3>
        </div>
        <div className='card-toolbar' style={{width: '35%'}}>
          {apiData && (
            <div className='d-flex w-100 justify-content-around'>
            {/* Begin Edit Button  */}
            <EditButton clickHandler={() => history.push(`/crafted/adhesion/demands/update/${id}`)}/>
            {/* End Edit Button  */}
            <DeleteButton clickHandler={() => deleteParticular(apiData.id)}/>
            <Button
              onClick={() => validateApiFunc('accepted' !== apiData.processingState)}
              variant={'accepted' === apiData.processingState ? 'danger' : 'success'}
            >
              {'accepted' === apiData.processingState ? 'Unvalidate demand' : 'Validate demand'}
            </Button>
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
export default SingleAdhesionDemandPage
