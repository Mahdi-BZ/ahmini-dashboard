import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {KTSVG} from '../../../_metronic/helpers'
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import DataTable from '../../shared/generic-components/dataTable'
import Pagination from '../../shared/generic-components/Pagination'
import {AdherantPagination} from './AdherantPagination'

type Props = {
  className?: string
}
const AdherantPage: React.FC<Props> = ({className}) => {
  const [apiData, setApiData] = useState<AdherantPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const history = useHistory()

  const ITEMS_PER_PAGE = 10
  const oldDate = new Date(1900 , 1 , 1 )

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'nom', field: 'firstName'},
    {name: 'Prenom', field: 'lastName'},
    {name: 'Telephone', field: 'phone'},
  ]

  useEffect(() => {
    axios
      .get('/adherant', {
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
          <span className='card-label fw-bolder fs-3 mb-1'>Adhérants</span>
          <span className='text-muted mt-1 fw-bold fs-7'> Liste des adhérants </span>
        </h3>
        <div className='card-toolbar'>
            <a
              className='btn btn-sm btn-light-primary px-3'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_create_app'
              
              id='kt_toolbar_primary_button'
              href={`${
                process.env.REACT_APP_API_URL
              }/adherant/export?startDate=${oldDate.toISOString()}&endDate=${new Date().toISOString()}`}
              download
            >
              Export To CSV
            </a>
        </div>
        <div className='card-toolbar'>
          <a
            onClick={() => history.push('/crafted/adherant/add')}
            className='btn btn-sm btn-light-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
            id='kt_toolbar_primary_button'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            Nouvelle adhérant
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        {apiData && (
          <div className='dataTables_wrapper dataTables_paginate table-responsive'>
            {/* begin::Body */}
            <DataTable headers={headers} data={particularsTableData} />
            {/* end::Body */}
            <Pagination
              currentPage={currentPage}
              totalItems={totalItems}
              onPageChangeEventHandler={setCurrentPage}
              itemsPerPage={ITEMS_PER_PAGE}
            />
          </div>
        )}
      </div>
        {/* end::Table container */}

      {/* begin::Body */}
    </div>
  )
}
export default AdherantPage
