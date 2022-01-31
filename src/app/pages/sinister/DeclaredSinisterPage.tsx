import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {useHistory} from 'react-router-dom'
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import {SinisterPagination} from './SinisterPagination'

type Props = {
  className: string
}
const DeclaredSinisterPage: React.FC<Props> = ({className}) => {
  const [apiData, setApiData] = useState<SinisterPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortParam, setSortParam] = useState('id');

  const history = useHistory()

  const ITEMS_PER_PAGE = 10

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'Nom', field: 'name'},
    {name: 'Type', field: 'type'},
  ]

  useEffect(() => {
    axios
      .get('/sinister', {
        params: {
          page: currentPage,
          perPage: ITEMS_PER_PAGE,
          sort: 'desc',
          orderBy: sortParam,
        },
      })
      .then((e) => setApiData(e.data))
  }, [currentPage, sortParam])

  const sinisterTableData = useMemo(() => {
    if (!apiData) return []

    const {totalElements} = apiData

    setTotalItems(totalElements)
    return apiData.data
  }, [apiData])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Sinistres déclarés</span>
          <span className='text-muted mt-1 fw-bold fs-7'> Liste des sinistres déclarés</span>
        </h3>
        <div className='card-toolbar'></div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Table */}
          <table id='kt_datatable' className='table table-borderless table-striped gy-7 gs-7'>
            {/* begin::Table head */}
            <HeaderComponent headers={headers} setSortParam={setSortParam} />
            {/* text-dark fw-bold text-muted d-block fs-7 */}

            <tbody>
              {sinisterTableData.map((e) => (
                <tr
                  onClick={() => history.push(`/crafted/declaredsinister/${e.id}`)}
                  key={e.id}
                  className='cursor-pointer'
                >
                  <th scope='row'>{e.id}</th>
                  <td className='border-dashed border-t border-gray-200 px-3'>{e.name}</td>
                  <td className='border-dashed border-t border-gray-200 px-3'>{e.definition}</td>
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
export default DeclaredSinisterPage
