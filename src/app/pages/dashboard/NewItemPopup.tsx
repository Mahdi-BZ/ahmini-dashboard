import React from 'react';
import { Link } from 'react-router-dom';
import { KTSVG } from '../../../_metronic/helpers';

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
                    <span className='fw-bolder fs-6 text-dark'>5
                    </span>
                </div>
            </div>

            <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Nom</label>

                <div className='col-lg-8 fv-row'>
                    <span className='fw-bold fs-6'>Siraje</span>
                </div>
            </div>
            <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Prénom</label>

                <div className='col-lg-8'>
                    <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
                        Siraje
                    </a>
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
                    <span className='fw-bolder fs-6 me-2'>12121212</span>

                    <span className='badge badge-success'>Verified</span>
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
                    <span className='fw-bolder fs-6 text-dark'>test@gmail.com
                    </span>
                </div>
            </div>
            <div className='d-flex flex-row-reverse'>
                <div className='p-5'>
                    <button type='button' className='btn btn-primary btn-sm'>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default newItemPopup;