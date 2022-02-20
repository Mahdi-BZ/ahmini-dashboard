import clsx from 'clsx';
import { FieldInputProps } from 'formik';
import * as React from 'react';

interface IDropDownProps {
    data: string[],
    name: string,
    getFieldProps: FieldInputProps<any>,
    isTouched: boolean,
    validationError: string,
    label: string,
}

const DropDown: React.FunctionComponent<IDropDownProps> = (props) => {
  return (
    <div className='row mb-7'>
    <label className='col-lg-4 fw-bold text-muted'>{props.label}</label>
        <div className='col-lg-8 fv-row'>
            <select {...props.getFieldProps} 
            className={clsx("form-select form-select-lg form-select-solid", {'is-invalid': props.isTouched && props.validationError},)} 
            data-control="select2" data-placeholder={`Choisir un ${props.name}`}>
                {props.data.map((el,i) => <option key={i+1} value={i+1}>{el}</option>)}
            </select>
        </div>
        {props.isTouched && props.validationError && (
            <div className='fv-plugins-message-container'>
            <span className='text-danger' role='alert'>{props.validationError}</span>
            </div>
        )}
    </div>
  );
};

export default DropDown;
