import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getImageUrl } from '../../../_metronic/helpers/imageHelper';
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
    const redText = "fs-3 bg-light-danger text-danger";
    const blueText = "fs-3 bg-light-primary text-primary";
    const yellowText = "fs-3 bg-light-warning text-warning";
    const purpleText = "fs-3 bg-light-info text-info";
    const greenText = "fs-3 bg-light-success text-success";

    const colors = [redText, blueText, yellowText, purpleText, greenText]
    const setColor = (string) => colors[string?.charCodeAt(0)%colors.length];

    const hasProfilePic = props.headers.map(h => h.field).includes('lastName');

    const getHeaders = () => {
        const temp = props.headers;
        if(hasProfilePic) temp.unshift({name: 'Photo', field: 'profileImage'})

        return temp;
    }

    console.log(hasProfilePic)

    return (
        <>
        {/* begin::Table */}
            <table id='kt_datatable' className='table table-borderless table-striped gy-7 gs-7'>
                {/* begin::Table head */}
                <HeaderComponent headers={getHeaders()} setSortParam={props.setSortParam} />
                {/* text-dark fw-bold text-muted d-block fs-7 */}
                <tbody>
                {props.data.map((elem) => (
                    <tr
                    onClick={() => history.push(`${location.pathname}/${elem['id']}`)}
                    className='cursor-pointer'
                    key={elem['id']}>
                    {hasProfilePic &&
                        <th scope='row'>
                            <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
                                <div 
                                className={`symbol-label ${!elem['profilePicture'] ? setColor(findVal(elem,"lastName").toUpperCase()):''}`}>
                                    { elem['profilePicture'] &&
                                        <img src={getImageUrl(findVal(elem,"profilePicture")['filename'])}
                                            alt="User" className="w-100"/>
                                    }
                                    { !elem['profilePicture'] &&
                                        <>{findVal(elem,"lastName").toUpperCase()[0]}</>
                                    }
                                </div>
                            </div>
                        </th>
                    }
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
