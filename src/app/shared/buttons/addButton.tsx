import * as React from 'react';
import { KTSVG } from '../../../_metronic/helpers/components/KTSVG';

interface IAddButtonProps {
    clickHandler: () => void
}

const AddButton: React.FunctionComponent<IAddButtonProps> = (props) => {
  return (
    <a
        onClick={props.clickHandler}
        className='btn btn-sm btn-light-primary'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_create_app'
        id='kt_toolbar_primary_button'
    >
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        {props.children}
    </a>
  );
};

export default AddButton;
