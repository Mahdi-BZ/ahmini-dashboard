import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import {useHistory, useParams} from 'react-router-dom'
import {SponsorshipRequest} from './SponsorshipRequestPagination'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import {Carousel} from 'react-responsive-carousel'
import { deleteSponsorshipRequest } from './SponsorshipRequestCRUD'
import DeleteButton from '../../shared/buttons/deleteButton'
import EditButton from '../../shared/buttons/editButton'
import { GenerateImageFromObject } from '../../../_metronic/helpers/imageHelper'

type Props = {
  className: string
}
const SingleSponsorshipRequestPage: React.FC<Props> = ({className}) => {
  const [apiData, setParticulars] = useState<SponsorshipRequest>(null as any)
  const [validateApi, setValidateApi] = useState(null)
  const {id} = useParams<{id: string}>()
  const history = useHistory()
  console.log(apiData)

  useEffect(() => {
    if (!id) return
    axios.get(`/adhesion-demand/${id}`).then((e) => setParticulars(e.data))
  }, [id, validateApi])

  const Cmp: React.FC<{data: SponsorshipRequest}> = ({data}) => {
    if (!data) return null
    else
      return (
        <div>
          <div>
            <h4> ID </h4>
            <p> {data.id} </p>

            <h4> State </h4>
            <p> {data.processingState} </p>

            <h4> Nombre des femmes </h4>
            <p> {data.womenCount} </p>


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

  const deleteParticular = (AdhesionId: number) => {
    deleteSponsorshipRequest(AdhesionId).then(response => {
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
            <span className='card-label fw-bolder fs-3 mb-1'>Demande Parrainage </span>
            <span className='text-muted mt-1 fw-bold fs-7'>Demande Parrainage information detaillée</span>
          </h3>
        </div>
        <div className='card-toolbar' style={{width: '35%'}}>
          {apiData && (
            <div className='d-flex w-100 justify-content-around'>
            {/* Begin Edit Button  */}
            <EditButton clickHandler={() => history.push(`/crafted/adhesion/demands/update/${id}`)}/>
            {/* End Edit Button  */}
            <DeleteButton clickHandler={() => deleteParticular(apiData.id)}/>
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
export default SingleSponsorshipRequestPage
