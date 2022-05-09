import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {KTSVG} from '../../../_metronic/helpers'
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import DataTable from '../../shared/generic-components/dataTable'
import Pagination from '../../shared/generic-components/Pagination'
import SimpleTableCardHeader from '../../shared/generic-components/simpleTableCardHeader'


type Props = {
  className: string
}
const FemmeSuspendu: React.FC<Props> = ({className}) => {
    const randomData = [
        {id:4,firstName: 'amira',lastName:'netla',phoneNumber: '50384938',email: 'dsdqs@f.com'},
      ]
  const [particularsApiData, setParticulars] = useState(randomData)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortParam, setSortParam] = useState('id');
  const [flag, setFlag] = useState(false);

  const ITEMS_PER_PAGE = 10

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'Nom', field: 'firstName'},
    {name: 'Prènom', field: 'lastName'},
    {name: 'Téléphone', field: 'phoneNumber'},
    {name: 'Email', field: 'email'},
  ]
  const setData = () => {
    setFlag(!flag);
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Femme Suspendu</span>
          <span className='text-muted mt-1 fw-bold fs-7'>Liste des Femme Suspendu</span>
        </h3>

      </div>
      {/* end::Header */}
      <div className='card-body py-3'>
      {particularsApiData && 
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Body */}
          <DataTable setData={setData}  headers={headers} sortParam={sortParam}
            data={particularsApiData} setSortParam={setSortParam} />
          {/* begin::Body */}
          <Pagination 
            currentPage={currentPage} 
            totalItems={totalItems} 
            onPageChangeEventHandler={setCurrentPage} 
            itemsPerPage={ITEMS_PER_PAGE} />
        </div>
      }
      </div>
    </div>
  )
}
export default FemmeSuspendu
