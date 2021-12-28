import React from 'react'
type Props = {
  headers: {
    name: string
    field: string
  }[]
}
const HeaderComponent: React.FC<Props> = ({headers}) => {
  return (
    <thead>
      <tr className='fw-bold fs-6 text-gray-800 border-bottom border-gray-200'>
        {headers.map(({name}) => (
          <th className='min-w-200px' key={name}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default HeaderComponent
