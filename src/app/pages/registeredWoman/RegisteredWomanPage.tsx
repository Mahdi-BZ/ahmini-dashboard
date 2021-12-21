import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import {RegisteredWomanPagination} from './RegisteredWomanPagination'

type Props = {
  className: string
}
const RegisteredWomanPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<RegisteredWomanPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const ITEMS_PER_PAGE = 10

  const exportData = () => {
    axios.get('/registered-woman/excel')
  }

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'nom', field: 'firstName'},
    {name: 'Prenom', field: 'lastName'},
    {name: 'Cin', field: 'cin'},
    {name: 'Work', field: 'work'},
  ]

  useEffect(() => {
    axios
      .get('/registered-woman', {
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
          <span className='card-label fw-bolder fs-3 mb-1'>Femmes inscrites</span>
          <span className='text-muted mt-1 fw-bold fs-7'>Liste des femmes inscrites</span>
        </h3>
        <div className='card-toolbar'>
          <Button onClick={() => exportData()}>Exporter la liste actuelle </Button>
        </div>
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
            {/* text-dark fw-bold text-muted d-block fs-7 */}

            <tbody>
              {particularsTableData.map((particular) => (
                <tr key={particular.id}>
                  <th scope='row'>{particular.id}</th>
                  <td>{particular.firstName}</td>
                  <td className=''>{particular.lastName}</td>
                  <td className=''>{particular.cin}</td>
                  <td className=''>{particular.work}</td>
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
export default RegisteredWomanPage
