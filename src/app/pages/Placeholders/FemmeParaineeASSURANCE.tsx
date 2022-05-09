import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {KTSVG} from '../../../_metronic/helpers'
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import DataTable from '../../shared/generic-components/dataTable'
import Pagination from '../../shared/generic-components/Pagination'
import TableCardHeader from '../../shared/generic-components/tableCardHeader'

type Props = {
  className: string
}
const FemmeParaineeASSURANCE: React.FC<Props> = ({className}) => {
  const randomData = [{id:1,firstName: 'bb',lastName:'bb',phoneNumber: '5555',email: 'dsdqs@f.com'}]
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
      <TableCardHeader hasAdd={false} name={'Femmes Parrainées'} isFemale={true} />
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
export default FemmeParaineeASSURANCE
