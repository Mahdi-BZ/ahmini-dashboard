import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {KTSVG} from '../../../../_metronic/helpers'
import HeaderComponent from '../../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import {AmbassadorPagination} from './AmbassadorPaginationModal'
import {useHistory} from 'react-router-dom'
import DataTable from '../../../shared/generic-components/dataTable'
import Pagination from '../../../shared/generic-components/Pagination'
import TableCardHeader from '../../../shared/generic-components/tableCardHeader'
import { deleteAmbassador } from './AmbassadorCRUD'

type Props = {
  className: string
}
const AmbassadorPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<AmbassadorPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortParam, setSortParam] = useState('id');
  const [flag, setFlag] = useState(false);

  const ITEMS_PER_PAGE = 10

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'Nom', field: 'firstName'},
    {name: 'Prénom', field: 'lastName'},
    {name: 'Email', field: 'email'},
    {name: 'Compte Validé', field: 'hasValidAccount'},
  ]

  useEffect(() => {
    axios
      .get('/ambassador', {
        params: {
          page: currentPage,
          perPage: ITEMS_PER_PAGE,
          sort: 'desc',
          orderBy: sortParam,
        },
      })
      .then((e) => setParticulars(e.data))
  }, [currentPage, sortParam,flag])

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
      <TableCardHeader name={'Ambassadeur'} isFemale={false} />
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        {particularsApiData && 
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Body */}
          <DataTable setData={setData} deleteAction={deleteAmbassador} headers={headers} sortParam={sortParam}
            data={particularsTableData}
            setSortParam={setSortParam} />
          {/* begin::Body */}
          <Pagination 
            currentPage={currentPage} 
            totalItems={totalItems} 
            onPageChangeEventHandler={setCurrentPage} 
            itemsPerPage={ITEMS_PER_PAGE} />
        </div>
      }
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}
export default AmbassadorPage
