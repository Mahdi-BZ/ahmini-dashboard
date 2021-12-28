import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../_metronic/helpers'

function newItemPopup() {
  return (
    <div className='card-body p-9'>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>
          ID
          <i
            className='fas fa-exclamation-circle ms-1 fs-7'
            data-bs-toggle='tooltip'
            title='Country of origination'
          ></i>
        </label>

        <div className='col-lg-8'>
          <input className='fw-bolder fs-6 text-dark' />
        </div>
      </div>

      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>Nom</label>

        <div className='col-lg-8 fv-row'>
          <input className='fw-bolder fs-6 text-dark' />
        </div>
      </div>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>Prénom</label>

        <div className='col-lg-8'>
          <input className='fw-bolder fs-6 text-dark' />
        </div>
      </div>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>
          Téléphone
          <i
            className='fas fa-exclamation-circle ms-1 fs-7'
            data-bs-toggle='tooltip'
            title='Telephone must be active'
          ></i>
        </label>

        <div className='col-lg-8 d-flex align-items-center'>
          <input className='fw-bolder fs-6 text-dark' />
        </div>
      </div>

      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>
          Email
          <i
            className='fas fa-exclamation-circle ms-1 fs-7'
            data-bs-toggle='tooltip'
            title='Country of origination'
          ></i>
        </label>

        <div className='col-lg-8'>
          <input className='fw-bolder fs-6 text-dark' />
        </div>
      </div>
      <div className='d-flex flex-row-reverse'>
        <div className='p-5'>
          <a href='/crafted/users/admin'>
            <button type='button' className='btn btn-primary btn-sm'>
              Add
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default newItemPopup
