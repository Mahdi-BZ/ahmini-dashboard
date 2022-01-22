import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { KTSVG } from '../../../_metronic/helpers/components/KTSVG';

interface ITableCardHeaderProps {
    name: string,
    isFemale: boolean,
}

const TableCardHeader: React.FunctionComponent<ITableCardHeaderProps> = (props) => {
    const history = useHistory();
    const location = useLocation();

  return (
    <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bolder fs-3 mb-1'>
            {props.name}s {props.isFemale ? 'inscrites': 'inscrits'}
        </span>
        <span className='text-muted mt-1 fw-bold fs-7'>
            Liste des {props.name}s {props.isFemale ? 'inscrites': 'inscrits'}
        </span>
        </h3>
        <div className='card-toolbar'>
        </div>
        <div className='card-toolbar'>
        <a
            onClick={() => history.push(`${location.pathname}/add`)}
            className='btn btn-sm btn-light-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
            id='kt_toolbar_primary_button'
        >
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            {props.isFemale ? 'Nouvelle': 'Nouveau'} {props.name}
        </a>
        </div>
    </div>
  );
};

export default TableCardHeader;
