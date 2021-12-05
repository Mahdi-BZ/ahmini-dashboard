import React, {useEffect, useMemo, useState} from 'react'
import { number } from 'yup'
import { string } from 'yup/lib/locale'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent'
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent'

type Props = {
  className: string
}
const ParticularsPage: React.FC<Props> = ({className}) => {
  const [particular, setParticular] = useState([{id: number, name: string, email: string, body: string}])
  // const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const ITEMS_PER_PAGE = 5

  const headers = [
    { name: "No#", field: "id" },
    { name: "Name", field: "name" },
    { name: "Email", field: "email" },
    { name: "Comment", field: "body" }
];

  useEffect(() => {
    const getData = () => {
      // showLoader();

      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json) => {
          // hideLoader();
          setParticular(json)
          console.log(json)
        })
    }

    getData()
  }, [])

  const particularsData = useMemo(() => {
    let computedParticulars = particular

    setTotalItems(computedParticulars.length)

    //Current Page Slice
    return computedParticulars.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )
  }, [particular, currentPage])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Particulars</span>
          <span className='text-muted mt-1 fw-bold fs-7'>*********</span>
        </h3>
        <div className='card-toolbar'>
          <a
            href='#'
            className='btn btn-sm btn-light-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
            id='kt_toolbar_primary_button'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            New Particular
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='dataTables_wrapper dataTables_paginate table-responsive'>
          {/* begin::Table */}
          <table id='kt_datatable' className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <HeaderComponent headers={headers} />

            {/*<thead>
              <tr className='fw-bolder text-muted bg-light'>
                <th className='min-w-200px'>First Name</th>
                 <th className='min-w-200px'>Last Name</th>
                <th className='min-w-200px'>User Name</th>
                <th className='min-w-200px'>Phone Number</th>
                <th className='min-w-200px'>Email</th>
                <th className='min-w-200px'>Password</th>
                <th className='min-w-200px'>Account Type</th>
                <th className='min-w-200px'>Roles</th>
                <th className='min-w-200px text-end rounded-end'></th> 
              </tr>
            </thead>*/}
            {/* end::Table head */}
            {/* begin::Table body */}

            <tbody>
              {particularsData.map((particular) => (
                <tr>
                  <th scope='row'>
                    {particular.id}
                  </th>
                  <td>
                    <span className='text-dark fw-bold text-muted d-block fs-7'>
                      {particular.name}
                    </span>
                  </td>
                  <td>
                    <span className='text-dark fw-bold text-muted d-block fs-7'>
                      {particular.email}
                    </span>
                    <td>
                      <span className='text-dark fw-bold text-muted d-block fs-7'>
                        {particular.body}
                      </span>
                    </td>
                  </td>
                </tr>
              ))}

              {/*<tr>
                 <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-26.jpg')}
                        className=''
                        alt=''
                      />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        Sant Extreanet Solution
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        HTML, JS, ReactJS
                      </span>
                    </div>
                  </div>
                </td> 
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $2,790
                  </a>
                  <span className='text-muted fw-bold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $520
                  </a>
                  <span className='text-muted fw-bold text-muted d-block fs-7'>Rejected</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    Bradly Beal
                  </a>
                  <span className='text-muted fw-bold text-muted d-block fs-7'>Insurance</span>
                </td>
                <td>
                  <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span>
                </td>
                <td>
                  <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span>
                </td>
                <td>
                  <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span>
                </td>
                <td>
                  <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
              </tr>*/}
            </tbody>

            {/* end::Table body */}
          </table>
          {/* end::Table */}

          {/* Pagination */}
          {/* <ul className='pagination pagination-outline'>
            <li className='page-item previous disabled m-1'>
              <a href='#' className='page-link'>
                <i className='previous'></i>
              </a>
            </li>
            <li className='page-item m-1'>
              <a href='#' className='page-link'>
                1
              </a>
            </li>
            <li className='page-item active m-1'>
              <a href='#' className='page-link'>
                2
              </a>
            </li>
            <li className='page-item m-1'>
              <a href='#' className='page-link'>
                3
              </a>
            </li>
            <li className='page-item m-1'>
              <a href='#' className='page-link'>
                4
              </a>
            </li>
            <li className='page-item m-1'>
              <a href='#' className='page-link'>
                5
              </a>
            </li>
            <li className='page-item m-1'>
              <a href='#' className='page-link'>
                6
              </a>
            </li>
            <li className='page-item next m-1'>
              <a href='#' className='page-link'>
                <i className='next'></i>
              </a>
            </li>
          </ul> */}
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
export default ParticularsPage
