import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import { useHistory } from 'react-router-dom'
import { KTSVG } from '../../../_metronic/helpers'
import AddButton from '../../shared/buttons/addButton'
import DataTable from '../../shared/generic-components/dataTable'
import Pagination from '../../shared/generic-components/Pagination'
import { deleteSponsorshipRequest } from './SponsorshipRequestCRUD'
import TableCardHeader from '../../shared/generic-components/tableCardHeader'
import { SponsorshipRequestPagination } from './SponsorshipRequestPagination'

type Props = {
  className: string
}
const SponsorshipRequestPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<SponsorshipRequestPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortParam, setSortParam] = useState('id');
  const [flag, setFlag] = useState(false);

  const ITEMS_PER_PAGE = 10


  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'Governorate', field: 'governorate'},
    {name: 'Nombres des femmes', field: 'womenCount'},
  ]

  useEffect(() => {
    axios
      .get('/sponsorship-request', {
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
  const deleteSponsorship = (id: number) => {
    deleteSponsorshipRequest(id).then(resp => setFlag(!flag));
  }


  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <TableCardHeader hasAdd={false} name={'Demandes de parrainages'} isFemale={false} />
      {particularsApiData && 
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Body */}
          <DataTable setData={setData} deleteAction={deleteSponsorshipRequest} headers={headers} setSortParam={setSortParam} sortParam={sortParam}
            data={particularsTableData} hasEdit={false}/>
          {/* begin::Body */}
          <Pagination 
            currentPage={currentPage} 
            totalItems={totalItems} 
            onPageChangeEventHandler={setCurrentPage} 
            itemsPerPage={ITEMS_PER_PAGE} />
        </div>
      }
      {/* end::Body */}
    </div>
  )
}
export default SponsorshipRequestPage
