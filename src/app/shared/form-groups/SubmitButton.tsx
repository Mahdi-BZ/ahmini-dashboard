import * as React from 'react';

interface ISecondaryButtonProps {
    content: string,
    isSubmitting: boolean,
    isValid: boolean,
}

const SubmitButton: React.FunctionComponent<ISecondaryButtonProps> = (props) => {
  return (
  <div className='d-flex flex-row-reverse'>
    <div className='p-5'>
        <button 
            type='submit' 
            className='btn btn-primary btn-sm'
            disabled={props.isSubmitting || !props.isValid}>
            {props.content}
        </button>
    </div>
  </div>
);
};

export default SubmitButton;
