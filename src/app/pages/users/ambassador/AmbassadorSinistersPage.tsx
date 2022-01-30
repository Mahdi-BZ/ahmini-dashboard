import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import HeaderComponent from '../../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import {Sinister} from '../../sinister/SinisterPagination'

type Props = {
  className: string
}
const AmbassadorSinisterPage: React.FC<Props> = ({className}) => {
  const {id} = useParams<{id: string}>()
  const [apiData, setApiData] = useState<Sinister[]>([])

  const history = useHistory()

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'Nom', field: 'name'},
    {name: 'Type', field: 'type'},
  ]

  useEffect(() => {
    axios.get(`/ambassador/get-sinsiters/${id}`).then((e) => setApiData(e.data))
  }, [id])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Sinistres</span>
          <span className='text-muted mt-1 fw-bold fs-7'> Liste des sinistres</span>
        </h3>
        <div className='card-toolbar'></div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Table */}
          <table id='kt_datatable' className='table table-borderless table-striped gy-7 gs-7'>
            {/* begin::Table head */}
            <HeaderComponent headers={headers} />
            <tbody>
              {apiData.map((e) => (
                <tr
                  onClick={() => history.push(`/crafted/declaredsinister/${e.id}`)}
                  key={e.id}
                  className='cursor-pointer'
                >
                  <th scope='row'>{e.id}</th>
                  <td className='border-dashed border-t border-gray-200 px-3'>{e.name}</td>
                  <td className='border-dashed border-t border-gray-200 px-3'>{e.definition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default AmbassadorSinisterPage
