import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import {AmbassadorPagination} from './AmbassadorPaginationModal'

type Props = {
  className: string
}
const AmbassadorPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<AmbassadorPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const ITEMS_PER_PAGE = 10

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'First Name', field: 'firstName'},
    {name: 'Last Name', field: 'lastName'},
    {name: 'Email', field: 'email'},
    {name: 'Valid Account', field: 'hasValidAccount'},
  ]

  useEffect(() => {
    axios
      .get('/ambassador', {
        params: {
          page: currentPage,
          perPage: ITEMS_PER_PAGE,
          sort: 'desc',
          orderBy: 'id',
        },
      })
      .then((e) => setParticulars(e.data))
  }, [currentPage])

  const particularsTableData = useMemo(() => {
    if (!particularsApiData) return []

    const {totalElements} = particularsApiData

    setTotalItems(totalElements)
    return particularsApiData.data
  }, [particularsApiData])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Ambassadors</span>
          <span className='text-muted mt-1 fw-bold fs-7'> Ambassador acocunt list</span>
        </h3>
        <div className='card-toolbar'>
          <a
            href='#'
            className='btn btn-sm btn-light-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
            id='kt_toolbar_primary_button'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            New Administrator
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Table */}
          <table id='kt_datatable' className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <HeaderComponent headers={headers} />
            {/* text-dark fw-bold text-muted d-block fs-7 */}

            <tbody>
              {particularsTableData.map((particular) => (
                <tr key={particular.id}>
                  <th scope='row'>{particular.id}</th>
                  <td>{particular.firstName}</td>
                  <td className=''>{particular.lastName}</td>
                  <td className=''>{particular.email}</td>
                  <td className=''>{particular.hasValidAccount ? 'Yes' : 'No'}</td>
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
export default AmbassadorPage