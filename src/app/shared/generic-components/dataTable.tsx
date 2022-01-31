import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import HeaderComponent from '../../../_metronic/partials/widgets/datatable/header/HeaderComponent';
interface IHeader {
    name: string,
    field: string
}
interface IDataTableProps {
    headers: IHeader[],
    data: object[],
    setSortParam?: (sortParam: string) => void
}
//Finds the value of a given key in a given object
const findVal = (object, key) => {
    var value;
    Object.keys(object).some(function(k) {
        if (k === key) {
            value = object[k];
            return true;
        }
        if (object[k] && typeof object[k] === 'object') {
            value = findVal(object[k], key);
            return value !== undefined;
        }
    });
    return value;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
    const location = useLocation();
    const history = useHistory();

    const fields = props.headers.map(h => h.field).filter(f => f !== 'id');

    return (
        <>
        {/* begin::Table */}
            <table id='kt_datatable' className='table table-borderless table-striped gy-7 gs-7'>
                {/* begin::Table head */}
                <HeaderComponent headers={props.headers} setSortParam={props.setSortParam} />
                {/* text-dark fw-bold text-muted d-block fs-7 */}

                <tbody>
                {props.data.map((elem) => (
                    <tr
                    onClick={() => history.push(`${location.pathname}/${elem['id']}`)}
                    className='cursor-pointer'
                    key={elem['id']}>
                    <th scope='row'>{elem['id']}</th>
                    {fields.map((f,i) => <td key={i}>{findVal(elem,f)}</td>)}
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default DataTable;
