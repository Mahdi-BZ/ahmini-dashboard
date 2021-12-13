import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import {SinisterPagination} from './SinisterPagination'

type Props = {
  className: string
}
const SinisterPage: React.FC<Props> = ({className}) => {
  const [apiData, setApiData] = useState<SinisterPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const ITEMS_PER_PAGE = 10

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'Name', field: 'name'},
    {name: 'Type', field: 'type'},
    {name: 'Declared by', field: 'declaredBy'},
  ]

  useEffect(() => {
    axios
      .get('/sinister', {
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
    console.log(apiData)

    setTotalItems(totalElements)
    return apiData.data
  }, [apiData])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Adhesion Demands</span>
          <span className='text-muted mt-1 fw-bold fs-7'> Adhesion Demands list</span>
        </h3>
        <div className='card-toolbar'></div>
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
                  <td>{particular.name}</td>
                  <td className=''> TODO </td>
                  <td className=''> TODO </td>
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
export default SinisterPage
