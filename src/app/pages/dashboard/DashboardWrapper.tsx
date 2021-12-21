/* eslint-disable jsx-a11y/anchor-is-valid */
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import axios from 'axios'
import React, {FC, useEffect, useMemo, useState} from 'react'
import {useHistory} from 'react-router-dom'
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AdhesionDemandPagination } from '../adhesion/AdhesionDemandPagination'


// const DashboardPage: FC = () => (
  // <>
    {/* begin::Row */}
    {/* <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
        <MixedWidget2
          className='card-xl-stretch mb-xl-8'
          chartColor='danger'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
      </div>
      <div className='col-xxl-4'>
        <ListsWidget5 className='card-xxl-stretch' />
      </div>
      <div className='col-xxl-4'>
        <MixedWidget10
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='150px'
        />
        <MixedWidget11
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='175px'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    {/* <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div> */}
    {/* end::Row */}

    {/* begin::Row */}
    {/* <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
        {/* partials/widgets/lists/_widget-4', 'class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5' */}
    {/* </div>
    </div>  */}
    {/* end::Row */}

    {/* <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-4'>
        <MixedWidget8
          className='card-xxl-stretch mb-xl-3'
          chartColor='success'
          chartHeight='150px'
        />
      </div>
      <div className='col-xxl-8'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div>
    </div>  */}
//   </>
// )




type Props = {
  className?: string
}
const AdhesionDemandPage: React.FC<Props> = ({className}) => {
  
  const [apiData, setApiData] = useState<AdhesionDemandPagination>(null as any)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const history = useHistory()

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
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Demande d'adhèsion</span>
          <span className='text-muted mt-1 fw-bold fs-7'> Liste des demandes d'adhèsion </span>
        </h3>
        <div className='card-toolbar'></div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='d-flex flex-row' style={{marginBottom: '10px'}}>
          <div className='p-2'>Start Date</div>
          <div className='p-2'>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className='p-2'>End Date</div>
          <div className='p-2'>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
          </div>
        </div>

        {/* begin::Table container */}
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Table */}
          <table
            id='kt_datatable'
            className='border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative'
          >
            {/* begin::Table head */}
            <HeaderComponent headers={headers} />
            {/* text-dark fw-bold text-muted d-block fs-7 */}

            <tbody>
              {particularsTableData.map((e) => (
                <tr
                  style={{cursor: 'pointer'}}
                  onClick={() => history.push(`/crafted/adhesion/demands/${e.id}`)}
                  key={e.id}
                >
                  <th scope='row'>{e.id}</th>
                  <td className='border-dashed border-t border-gray-50 py-5'>{e.data.firstName}</td>
                  <td className='border-dashed border-t border-gray-200'>{e.data.lastName}</td>
                  <td className='border-dashed border-t border-gray-50'>{e.data.phone}</td>
                  <td className='border-dashed border-t border-gray-200'>{e.processingState}</td>
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
      <div className='d-flex flex-row-reverse' style={{margin: '10px'}}>
        <div className='p-2'>
          <button type='button' className='btn btn-primary btn-sm'>
            Hahah
          </button>
        </div>
        <div className='p-2'>
          <button type='button' className='btn btn-primary btn-sm'>
            Export
          </button>
        </div>
      </div>
      {/* begin::Body */}
    </div>
  )
}
const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <AdhesionDemandPage />
    </>
  )
}

export {DashboardWrapper}