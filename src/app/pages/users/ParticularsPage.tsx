import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import {ParticularPagination} from './ParticularPaginationInterface'

type Props = {
  className: string
}
const ParticularsPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<ParticularPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const ITEMS_PER_PAGE = 10

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'nom', field: 'firstName'},
    {name: 'Prenom', field: 'lastName'},
    {name: 'User Name', field: 'userName'},
    {name: 'Email', field: 'email'},
  ]

  useEffect(() => {
    axios
      .get('/particular', {
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
          <span className='card-label fw-bolder fs-3 mb-1'>Particuliers</span>
          <span className='text-muted mt-1 fw-bold fs-7'> Liste des particuliers </span>
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
            Nouveau particulier
          </a>
        </div>
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
              {particularsTableData.map((particular) => (
                <tr key={particular.id}>
                  <th scope='row'>{particular.id}</th>
                  <td className='border-dashed border-t border-gray-50 py-5'>
                    {particular.lastName}
                  </td>
                  <td className='border-dashed border-t border-gray-200 '>
                    {particular.firstName}
                  </td>
                  <td className='border-dashed border-t border-gray-50 '>{particular.userName}</td>
                  <td className='border-dashed border-t border-gray-200 '>{particular.email}</td>
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
export default ParticularsPage
