import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import DataTable from '../../shared/generic-components/dataTable'
import Pagination from '../../shared/generic-components/Pagination'
import TableCardHeader from '../../shared/generic-components/tableCardHeader'
import { deleteAdhesionDemand } from './AdhesionDemandCRUD'
import {AdhesionDemandPagination} from './AdhesionDemandPagination'

type Props = {
  className?: string
}
const AdhesionDemandPage: React.FC<Props> = ({className}) => {
  const [apiData, setApiData] = useState<AdhesionDemandPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortParam, setSortParam] = useState('id');
  const [flag, setFlag] = useState(false);

  const ITEMS_PER_PAGE = 10

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'nom', field: 'firstName'},
    {name: 'Prenom', field: 'lastName'},
    {name: 'Etat de traitement', field: 'processingState'},
  ]

  useEffect(() => {
    axios
      .get('/adhesion-demand', {
        params: {
          page: currentPage,
          perPage: ITEMS_PER_PAGE,
          sort: 'desc',
          orderBy: sortParam,
        },
      })
      .then((e) => setApiData(e.data))
  }, [currentPage, sortParam, flag])

  const particularsTableData = useMemo(() => {
    if (!apiData) return []

    const {totalElements} = apiData

    setTotalItems(totalElements)
    return apiData.data
  }, [apiData])

  const setData = () => {
    setFlag(!flag);
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <TableCardHeader hasAdd name={"Demandes d'adhèsion"} isFemale={true} />
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        {apiData && (
          <div className='dataTables_wrapper dataTables_paginate table-responsive'>
            {/* begin::Body */}
            <DataTable setData={setData} deleteAction={deleteAdhesionDemand} sortParam={sortParam} headers={headers} data={particularsTableData} setSortParam={setSortParam} />
            {/* begin::Body */}
            <Pagination
              currentPage={currentPage}
              totalItems={totalItems}
              onPageChangeEventHandler={setCurrentPage}
              itemsPerPage={ITEMS_PER_PAGE}
            />
          </div>
        )}
        {/* end::Table container */}
      </div>

      {/* begin::Body */}
    </div>
  )
}
export default AdhesionDemandPage
