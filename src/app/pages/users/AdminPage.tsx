import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {KTSVG} from '../../../_metronic/helpers'
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import DataTable from '../../shared/generic-components/dataTable'
import Pagination from '../../shared/generic-components/Pagination'
import TableCardHeader from '../../shared/generic-components/tableCardHeader'
import { deleteAdmin } from './AdminCRUD'
import {AdminPaginationInterface} from './AdminPaginationInterface'

type Props = {
  className: string
}
const AdminPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<AdminPaginationInterface>(null as any)
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
  
  useEffect(() => {
    axios
      .get('/admin', {
        params: {
          page: currentPage,
          perPage: ITEMS_PER_PAGE,
          sort: 'desc',
          orderBy: sortParam,
        },
      })
      .then((e) => setParticulars(e.data))
  }, [currentPage, sortParam, flag])

  const particularsTableData = useMemo(() => {
    if (!particularsApiData) return []

    const {totalElements} = particularsApiData

    setTotalItems(totalElements)
    return particularsApiData.data
  }, [particularsApiData])

  const setData = () => {
    setFlag(!flag);
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <TableCardHeader name={'Administrateur'} isFemale={false} />
      {/* end::Header */}
      <div className='card-body py-3'>
      {particularsApiData && 
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Body */}
          <DataTable setData={setData} deleteAction={deleteAdmin} headers={headers} sortParam={sortParam}
            data={particularsTableData} setSortParam={setSortParam} />
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
export default AdminPage
