import React from 'react'
type Props = {
  headers: {
    name: string
    field: string
  }[],
  setSortParam?: (sortParam: string) => void
}
const HeaderComponent: React.FC<Props> = (props) => {
  console.log(props.setSortParam);
  return (
    <thead>
      <tr className='fw-bold fs-6 text-gray-800 border-bottom border-gray-200'>
        {props.headers.map(({name,field}) => (
          <th className={`min-w-200px ${props.setSortParam ? 'cursor-pointer':''}`} 
            key={name} 
            onClick={() => props.setSortParam(field)}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default HeaderComponent
