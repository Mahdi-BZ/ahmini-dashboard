import React, {useState} from 'react'
import DataTable from '../../shared/generic-components/dataTable'
import Pagination from '../../shared/generic-components/Pagination'

type Props = {
  className: string
}
const FichierFinancier: React.FC<Props> = ({className}) => {
  const randomData = [
      {id:1,price:8,firstName: 'foulena1',lastName:'foulen',phoneNumber: '23456795',email: 'dsdqs@f.com'},
      {id:2,price:8,firstName: 'foulena2',lastName:'foulen',phoneNumber: '54897689',email: 'dsdqs@f.com'},
      {id:3,price:8,firstName: 'samira',lastName:'msaoudi',phoneNumber: '56098709',email: 'dsdqs@f.com'},
      {id:4,price:8,firstName: 'latifa',lastName:'triki',phoneNumber: '90876593',email: 'dsdqs@f.com'},
      {id:5,price:8,firstName: 'nawel',lastName:'mchili',phoneNumber: '98056532',email: 'dsdqs@f.com'},
      {id:6,price:8,firstName: 'sondes',lastName:'tenchi',phoneNumber: '22649320',email: 'dsdqs@f.com'},
      {id:7,price:8,firstName: 'samar',lastName:'foulen',phoneNumber: '21329765',email: 'dsdqs@f.com'},
    ]
  const [particularsApiData, setParticulars] = useState(randomData)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortParam, setSortParam] = useState('price');
  const [flag, setFlag] = useState(false);

  const ITEMS_PER_PAGE = 10

  const headers = [
    {name: 'ID', field: 'id'},
    {name: 'Prix en DT', field: 'price'},
    {name: 'Nom', field: 'firstName'},
    {name: 'Prènom', field: 'lastName'},
    {name: 'Téléphone', field: 'phoneNumber'},
    {name: 'Email', field: 'email'},
  ]
  const setData = () => {
    setFlag(!flag);
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Fichier Financier</span>
        </h3>

      </div>
      {/* end::Header */}
      <div className='card-body py-3'>
      {particularsApiData && 
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Body */}
          <DataTable setData={setData}  headers={headers} sortParam={sortParam}
            data={particularsApiData} setSortParam={setSortParam} />
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
export default FichierFinancier
