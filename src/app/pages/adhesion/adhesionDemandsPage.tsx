import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import DataTable from '../../shared/generic-components/dataTable'
import Pagination from '../../shared/generic-components/Pagination'
import TableCardHeader from '../../shared/generic-components/tableCardHeader'
import {AdhesionDemandPagination} from './AdhesionDemandPagination'

type Props = {
  className?: string
}
const AdhesionDemandPage: React.FC<Props> = ({className}) => {
  const [apiData, setApiData] = useState<AdhesionDemandPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const ITEMS_PER_PAGE = 10

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'nom', field: 'firstName'},
    {name: 'Prenom', field: 'lastName'},
    {name: 'Telephone', field: 'phone'},
    {name: 'Etat de traitement', field: 'processingState'},
  ]

  useEffect(() => {
    axios
      .get('/adhesion-demand', {
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

    setTotalItems(totalElements)
    return apiData.data
  }, [apiData])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <TableCardHeader name={"Demandes d'adhèsion"} isFemale={true} />
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        {apiData && (
          <div className='dataTables_wrapper dataTables_paginate table-responsive'>
            {/* begin::Body */}
            <DataTable headers={headers} data={particularsTableData} />
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
