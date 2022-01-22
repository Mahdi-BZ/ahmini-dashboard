import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import { useHistory } from 'react-router-dom'
import { KTSVG } from '../../../_metronic/helpers'
import AddButton from '../../shared/buttons/addButton'
import DataTable from '../../shared/generic-components/dataTable'
import Pagination from '../../shared/generic-components/Pagination'
import {RegisteredWomanPagination} from './RegisteredWomanPagination'

type Props = {
  className: string
}
const RegisteredWomanPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<RegisteredWomanPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const history = useHistory()

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
  const schema = {
    id: 0,
    firstName: '',
    lastName: '',
    cin: 0,
    work: '',
  }

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
        <div className='card-toolbar'>
          <AddButton 
            clickHandler={() => history.push('/crafted/registered-woman/add')}>
            Nouvelle Femme
          </AddButton>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      {particularsApiData && 
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Body */}
          <DataTable headers={headers} 
            data={particularsTableData} />
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
export default RegisteredWomanPage
