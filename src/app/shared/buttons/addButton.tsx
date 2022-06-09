import * as React from 'react';
import { Button } from 'react-bootstrap-v5';
import { KTSVG } from '../../../_metronic/helpers/components/KTSVG';

interface IAddButtonProps {
    clickHandler: () => void
}

const AddButton: React.FunctionComponent<IAddButtonProps> = (props) => {
  return (
    <Button
        onClick={props.clickHandler}
        className='btn btn-sm btn-light-primary'
        id='kt_toolbar_primary_button'
    >
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        {props.children}
    </Button>
  );
};

export default AddButton;
