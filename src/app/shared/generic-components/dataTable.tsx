import { AxiosResponse } from 'axios';
import * as React from 'react';
import { Button } from 'react-bootstrap-v5';
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
    setData: () => void
    setSortParam?: (sortParam: string) => void,
    sortParam: string, 
    deleteAction?(id: number): Promise<AxiosResponse<any>>,
    hasEdit?: boolean
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

    const fields = props.headers.map(h => h.field);
    const redText = "fs-3 bg-light-danger text-danger";
    const blueText = "fs-3 bg-light-primary text-primary";
    const yellowText = "fs-3 bg-light-warning text-warning";
    const purpleText = "fs-3 bg-light-info text-info";
    const greenText = "fs-3 bg-light-success text-success";

    const colors = [redText, blueText, yellowText, purpleText, greenText]
    const setColor = (string) => colors[string?.charCodeAt(0)%colors.length];

    const hasProfilePic = props.headers.map(h => h.field).includes('lastName');
    const showEdit = props.hasEdit !== undefined ? props.hasEdit : true;
    console.log(showEdit);
    console.log(props.hasEdit);

    const getHeaders = () => {
        const temp = props.headers;
        if(temp.findIndex(e => e.name === 'Actions') === -1 && props.deleteAction)
            temp.push({name: 'Actions', field: 'actions'})

        if(hasProfilePic && (temp.findIndex(e => e.name == 'Photo') === -1)) 
            temp.unshift({name: 'Photo', field: 'profileImage'})
        console.log(temp);
        return temp;
    }

    const goToEditPage = (id: string) => {
        const path = location.pathname;
        const editPagePath = `${path}/update/${id}`

        history.push(editPagePath);
    }

    const deleteElem = (id: number) => {
        
        props.deleteAction(id).then(r => props.setData())
    }

    const cannotNav = (e:any) => e.target.tagName === 'BUTTON' || e.target.tagName === 'svg' || e.target.tagName == 'P';

    return (
        <>
        {/* begin::Table */}
                <table id='kt_datatable' className='table table-borderless table-striped gy-7 gs-7'>
                {/* begin::Table head */}
                <HeaderComponent sortParam={props.sortParam} headers={getHeaders()} setSortParam={props.setSortParam} />
                {/* text-dark fw-bold text-muted d-block fs-7 */}
                <tbody>
                {props.data.map((elem) => (
                    <tr
                    onClick={(e) => {if(!cannotNav(e))history.push(`${location.pathname}/${elem['id']}`)}}
                    className='cursor-pointer align-middle'
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
                    {fields.map((f,i) => {
                        if(f === 'hasValidAccount')
                            return (<td key={i}>{findVal(elem,f) ? 'Validé':'Non Validé'}</td>)
                        
                        return <td key={i}>{findVal(elem,f)}</td>
                    })}
                    { props.deleteAction &&
                        <td className=""  onClick={(e) => {console.log(e)}} >
                        <Button className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        <span className="svg-icon svg-icon-5 m-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="black"></path>
                            </svg>
                        </span></Button>
                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                            {  showEdit &&
                                <div className="menu-item px-3">
                                    <p onClick={() => goToEditPage(elem['id'])} className="menu-link px-3">Edit</p>
                                </div>
                            }
                            <div className="menu-item px-3" >
                                <p onClick={() => deleteElem(elem['id'])} className="menu-link px-3">Delete</p>
                            </div>
                        </div>
                        </td>
                    }
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default DataTable;
