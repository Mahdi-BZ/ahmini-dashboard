import axios from 'axios'
import React, {useEffect, useMemo, useState} from 'react'
import {Button} from 'react-bootstrap-v5'
import { useHistory } from 'react-router-dom'
import { KTSVG } from '../../../_metronic/helpers'
import AddButton from '../../shared/buttons/addButton'
import DataTable from '../../shared/generic-components/dataTable'
import Pagination from '../../shared/generic-components/Pagination'
import { deleteAdherant } from '../adherant/AdherantCRUD'
import { AdherantModel } from '../adherant/AdherantModel'
import { deleteWoman } from './WomanCRUD'

type Props = {
  className: string
}
const SponsoredWomanPage: React.FC<Props> = ({className}) => {
  const [particularsApiData, setParticulars] = useState<AdherantModel[]>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortParam, setSortParam] = useState('id');
  const [flag, setFlag] = useState(false);
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const history = useHistory()

  const ITEMS_PER_PAGE = 10


  const headers = [
    {name: 'Code Client', field: 'clientCodeAhmini'},
    {name: 'nom', field: 'firstName'},
    {name: 'Prenom', field: 'lastName'},
    {name: 'Cin', field: 'identityCardNumber'},
    {name: 'Governorate', field: 'governorate'},
  ]

  useEffect(() => {
    axios
      .get('/sponsorship-request/list/Sponsored')
      .then((e) => {
        const data: AdherantModel[] = e.data.data.map(d => {
          const adherant: AdherantModel = {...d.adherants.data, id: d.adherants.id}
          return adherant;
        });
        setTotalItems(e.data.totalElements)
       
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

  const startDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredDate = event.target.value
    setStartDate(enteredDate)
  }
  const endDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredDate = event.target.value
    setEndDate(enteredDate)
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Femmes parrainées</span>
          <span className='text-muted mt-1 fw-bold fs-7'> Liste des femmes parrainées </span>
        </h3>

        <div className='card-toolbar align-items-center flex-row'>
          <span className='text-muted mt-1 fw-bold fs-7' style={{marginRight: '5px'}}>
            Du :
          </span>
          <input type='date' name='oldDate' onInput={startDateHandler} style={{width: '50px'}} />
        </div>
        <div className='card-toolbar align-items-center flex-row'>
          <span className='text-muted mt-1 fw-bold fs-7' style={{marginRight: '5px'}}>
            Au :
          </span>
          <input style={{width: '50px'}} type='date' name='newDate' onInput={endDateHandler} />
        </div>


        <div className='card-toolbar'>
          <AddButton 
            clickHandler={() => history.push('/crafted/adherant/add')}>
              Nouvelle Femme
          </AddButton>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      {particularsApiData && 
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Body */}
          <DataTable setData={setData} deleteAction={deleteAdherant} headers={headers} setSortParam={setSortParam} sortParam={sortParam}
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
export default SponsoredWomanPage
