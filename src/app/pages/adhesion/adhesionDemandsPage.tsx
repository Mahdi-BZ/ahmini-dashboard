import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {useHistory} from 'react-router-dom'
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import {AdhesionDemandPagination} from './AdhesionDemandPagination'

type Props = {
  className?: string
}
const AdhesionDemandPage: React.FC<Props> = ({className}) => {
  const [apiData, setApiData] = useState<AdhesionDemandPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const history = useHistory()

  const ITEMS_PER_PAGE = 10

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'nom', field: 'firstName'},
    {name: 'Prenom', field: 'lastName'},
    {name: 'Telephone', field: 'phone'},
    {name: 'Etat de traitement', field: 'processingState'},
  ]

  useEffect(() => {
    axios
      .get('/adhesion-demand', {
        params: {
          page: currentPage,
          perPage: ITEMS_PER_PAGE,
          sort: 'desc',
          orderBy: 'id',
        },
      })
      .then((e) => setApiData(e.data))
  }, [currentPage])

  const particularsTableData = useMemo(() => {
    if (!apiData) return []

    const {totalElements} = apiData

    setTotalItems(totalElements)
    return apiData.data
  }, [apiData])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Demandes d'adhèsion</span>
          <span className='text-muted mt-1 fw-bold fs-7'> Liste des demandes d'adhèsion </span>
        </h3>
        <div className='card-toolbar'></div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Table */}
          <table id='kt_datatable' className='table table-striped gy-7 gs-7'>
            {/* begin::Table head */}
            <HeaderComponent headers={headers} />
            {/* text-dark fw-bold text-muted d-block fs-7 */}

            <tbody>
              {particularsTableData.map((e) => (
                <tr
                  style={{cursor: 'pointer'}}
                  onClick={() => history.push(`/crafted/adhesion/demands/${e.id}`)}
                  key={e.id}
                >
                  <th scope='row'>{e.id}</th>
                  <td className='border-dashed border-t border-gray-50 py-5'>{e.data.firstName}</td>
                  <td className='border-dashed border-t border-gray-200'>{e.data.lastName}</td>
                  <td className='border-dashed border-t border-gray-50'>{e.data.phone}</td>
                  <td className='border-dashed border-t border-gray-200'>{e.processingState}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <PaginationComponent
            total={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={(page: React.SetStateAction<number>) => setCurrentPage(page)}
          />
        </div>
        {/* end::Table container */}
      </div>

      {/* begin::Body */}
    </div>
  )
}
export default AdhesionDemandPage
