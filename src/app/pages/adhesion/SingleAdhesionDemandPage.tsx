import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import {useHistory, useParams} from 'react-router-dom'
import {AdhesionDemand} from './AdhesionDemandPagination'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import {Carousel} from 'react-responsive-carousel'
import { deleteAdhesionDemand } from './AdhesionDemandCRUD'

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
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Adhesion Demand </span>
          <span className='text-muted mt-1 fw-bold fs-7'>Adhesion Demand detailed information</span>
        </h3>
        <div className='card-toolbar' style={{width: '35%'}}>
          {apiData && (
            <div className='d-flex w-100 justify-content-around'>
            {/* Begin Edit Button  */}
            <Button title='Modifier' 
              onClick={() => history.push(`/crafted/adhesion/demands/update/${id}`)}
            >
              <span className="svg-icon svg-icon-muted svg-icon-2hx"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 4.63158C2 3.1782 3.1782 2 4.63158 2H13.47C14.0155 2 14.278 2.66919 13.8778 3.04006L12.4556 4.35821C11.9009 4.87228 11.1726 5.15789 10.4163 5.15789H7.1579C6.05333 5.15789 5.15789 6.05333 5.15789 7.1579V16.8421C5.15789 17.9467 6.05333 18.8421 7.1579 18.8421H16.8421C17.9467 18.8421 18.8421 17.9467 18.8421 16.8421V13.7518C18.8421 12.927 19.1817 12.1387 19.7809 11.572L20.9878 10.4308C21.3703 10.0691 22 10.3403 22 10.8668V19.3684C22 20.8218 20.8218 22 19.3684 22H4.63158C3.1782 22 2 20.8218 2 19.3684V4.63158Z" fill="black"/>
              <path d="M10.9256 11.1882C10.5351 10.7977 10.5351 10.1645 10.9256 9.77397L18.0669 2.6327C18.8479 1.85165 20.1143 1.85165 20.8953 2.6327L21.3665 3.10391C22.1476 3.88496 22.1476 5.15129 21.3665 5.93234L14.2252 13.0736C13.8347 13.4641 13.2016 13.4641 12.811 13.0736L10.9256 11.1882Z" fill="black"/>
              <path d="M8.82343 12.0064L8.08852 14.3348C7.8655 15.0414 8.46151 15.7366 9.19388 15.6242L11.8974 15.2092C12.4642 15.1222 12.6916 14.4278 12.2861 14.0223L9.98595 11.7221C9.61452 11.3507 8.98154 11.5055 8.82343 12.0064Z" fill="black"/>
              </svg></span>
            </Button>
            {/* End Edit Button  */}
            {/* Begin Delete Button  */}
            <Button title='Supprimer' 
              onClick={() => deleteParticular(apiData.id)}
              variant="danger"
            >
              <span className="svg-icon svg-icon-muted svg-icon-2hx"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"/>
              <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"/>
              <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"/>
              </svg></span>
            </Button>
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
