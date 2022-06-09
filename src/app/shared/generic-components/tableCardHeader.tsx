import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { KTSVG } from '../../../_metronic/helpers/components/KTSVG';
import AddButton from '../buttons/addButton';

interface ITableCardHeaderProps {
    name: string,
    isFemale: boolean,
    hasAdd: boolean
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
        {props.hasAdd &&
            <div className='card-toolbar'>
                <AddButton 
                    clickHandler={() => history.push(`${location.pathname}/add`)}
                >
                    {props.isFemale ? 'Nouvelle': 'Nouveau'} {props.name}
                </AddButton>
            </div>
        }
    </div>
  );
};

export default TableCardHeader;
