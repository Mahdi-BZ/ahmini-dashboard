import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import { useHistory } from 'react-router-dom'
import AddButton from '../../shared/buttons/addButton'
import DataTable from '../../shared/generic-components/dataTable'
import Pagination from '../../shared/generic-components/Pagination'
import {Datum} from './RegisteredWomanPagination'
import { deleteWoman } from './WomanCRUD'

type Props = {
  className: string
}
const NonSponsoredWomanPage: React.FC<Props> = ({className}) => {
    const [particularsApiData, setParticulars] = useState<Datum[]>(null as any)
    const [totalItems, setTotalItems] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [sortParam, setSortParam] = useState('id');
    const [flag, setFlag] = useState(false);
  
    const history = useHistory()
  
    const ITEMS_PER_PAGE = 10
  
    const exportData = () => {
      axios.get('/registered-woman/excel')
    }
  
    const headers = [
      {name: 'Code Client', field: 'clientCodeAhmini'},
      {name: 'nom', field: 'firstName'},
      {name: 'Prenom', field: 'lastName'},
      {name: 'Cin', field: 'identityCardNumber'},
      {name: 'Governorate', field: 'governorate'},
    ]
  
    useEffect(() => {
      axios
        .get('/sponsorship-request/list/nonSponsored')
        .then((e) => {
          const data = e.data.data.map(d => d.data);
          setParticulars(data)})
    }, [currentPage, sortParam, flag])
  
    const particularsTableData = useMemo(() => {
      if (!particularsApiData) return []
  
      const totalElements = particularsApiData.length;
  
      setTotalItems(totalElements)
      return particularsApiData
    }, [particularsApiData])
  
    const setData = () => {
      setFlag(!flag);
    }
  
  
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
            <DataTable setData={setData} deleteAction={deleteWoman} headers={headers} setSortParam={setSortParam} sortParam={sortParam}
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
export default NonSponsoredWomanPage
