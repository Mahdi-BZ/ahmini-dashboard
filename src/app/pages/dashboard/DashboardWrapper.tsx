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
import {AdhesionDemandPagination} from '../adhesion/AdhesionDemandPagination'
import Chart from './BarChart'
import PieChart from './Pie'
import {StatisticsWidget5} from '../../../_metronic/partials/widgets';
import Map from './Map'
// const DashboardPage: FC = () => (
// <>
{
  /* begin::Row */
}
{
  /* <div className='row gy-5 g-xl-8'>
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
    {/* end::Row */
}

{
  /* begin::Row */
}
{
  /* <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div> */
}
{
  /* end::Row */
}

{
  /* begin::Row */
}
{
  /* <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
        {/* partials/widgets/lists/_widget-4', 'class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5' */
}
{
  /* </div>
    </div>  */
}
{
  /* end::Row */
}

{
  /* <div className='row g-5 gx-xxl-8'>
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
    </div>  */
}
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
      <div className='row g-5 g-xl-8' style={{margin:"20px"}}>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/ecommerce/ecm004.svg'
            color='dark'
            iconColor='white'
            title='+3956'
            description='Adhérentes'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/ecommerce/ecm002.svg'
            color='info'
            iconColor='white'
            title='4'
            description='CNSS'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/ecommerce/ecm007.svg'
            color='warning'
            iconColor='white'
            title='3947'
            description='En Attente'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/ecommerce/ecm008.svg'
            color='primary'
            iconColor='white'
            title='5912'
            description='Personnes Affectées'
          />

        </div>
      </div>
      <div className='card align-items-start flex-column' style={{height: 470,margin:"60px 20px"}}>
        <Chart />
      </div>
      <div className='card align-items-center flex-row'>
        <PieChart />
        <div className='card align-items-center flex-column'>
          <Map />
          <PieChart />
        </div>
       
      </div>
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
