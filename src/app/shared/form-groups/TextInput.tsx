import clsx from 'clsx';
import { FieldInputProps } from 'formik';
import * as React from 'react';

interface ITextInputProps {
    getFieldProps: FieldInputProps<any>,
    isTouched: boolean,
    validationError: string,
    type: string,
    name: string,
    placeHolder: string,
    label: string,
}

const TextInput: React.FunctionComponent<ITextInputProps> = (props) => {
  return (
    <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>{props.label}</label>
        <div className='col-lg-8 fv-row'>
        <input
            placeholder={props.placeHolder}
            {...props.getFieldProps}
            className={clsx(
            'form-control form-control-lg form-control-solid',
            {'is-invalid': props.isTouched && props.validationError},
            {
                'is-valid': props.isTouched && !props.validationError,
            }
            )}
            type={props.type}
            name={props.name}
            autoComplete='off'
        />
        {props.isTouched && props.validationError && (
            <div className='fv-plugins-message-container'>
            <span className='text-danger' role='alert'>{props.validationError}</span>
            </div>
        )}
        </div>
    </div>
  );
};

export default TextInput;
