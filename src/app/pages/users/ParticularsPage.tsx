import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {KTSVG} from '../../../_metronic/helpers'
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import DataTable from '../../shared/generic-components/dataTable'
import Pagination from '../../shared/generic-components/Pagination'
import TableCardHeader from '../../shared/generic-components/tableCardHeader'
import { deleteParticular } from './ParticularCRUD'
import {ParticularPagination} from './ParticularPaginationInterface'

type Props = {
  className: string
}
const ParticularsPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<ParticularPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortParam, setSortParam] = useState('id');
  const [flag, setFlag] = useState(false);


  const ITEMS_PER_PAGE = 10

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'nom', field: 'firstName'},
    {name: 'Prenom', field: 'lastName'},
    {name: 'User Name', field: 'userName'},
    {name: 'Email', field: 'email'},
  ]

  useEffect(() => {
    console.log("h");
    axios
      .get('/particular', {
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
      <TableCardHeader name={'Particulier'} isFemale={false} />
      {/* end::Header */}
      <div className='card-body py-3'>
      {particularsApiData && 
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Body */}
          <DataTable setData={setData} deleteAction={deleteParticular} headers={headers} setSortParam={setSortParam} sortParam={sortParam}
            data={particularsTableData} />
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
export default ParticularsPage
