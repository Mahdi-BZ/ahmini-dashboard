import * as React from 'react';
import PaginationComponent from '../../../_metronic/partials/widgets/datatable/pagination/PaginationComponent';

interface IPaginationProps {
    currentPage: number,
    totalItems: number,
    onPageChangeEventHandler: any
    itemsPerPage: number
}


const Pagination: React.FunctionComponent<IPaginationProps> = (props) => {
  return (
    <PaginationComponent
    total={props.totalItems}
    itemsPerPage={props.itemsPerPage}
    currentPage={props.currentPage}
    onPageChange={props.onPageChangeEventHandler}
    />
  );
};

export default Pagination;
