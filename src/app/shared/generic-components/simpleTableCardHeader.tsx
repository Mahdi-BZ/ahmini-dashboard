import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { KTSVG } from '../../../_metronic/helpers/components/KTSVG';
import AddButton from '../buttons/addButton';

interface ISimpleTableCardHeaderProps {
    name: string,
    isFemale: boolean,
}

const SimpleTableCardHeader: React.FunctionComponent<ISimpleTableCardHeaderProps> = (props) => {
    const history = useHistory();
    const location = useLocation();

  return (
    <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bolder fs-3 mb-1'>
            {props.name}
        </span>
        <span className='text-muted mt-1 fw-bold fs-7'>
            Liste des {props.name}
        </span>
        </h3>
        <div className='card-toolbar'>
        </div>
        <div className='card-toolbar'>
        </div>
    </div>
  );
};

export default SimpleTableCardHeader;
