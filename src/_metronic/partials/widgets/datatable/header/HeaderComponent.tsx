import React from "react";
type Props = {
    headers: [{
        name: string,
        field: string
    }]
  }
const HeaderComponent : React.FC<Props> = ({ headers }) => {


    return (
        <thead>
            <tr className='fw-bolder text-muted bg-light'>
                {headers.map(({ name }) => (
                    <th 
                        className='min-w-200px'
                        key={name}
                    >
                        {name}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default HeaderComponent;