import * as React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getAdhesionDemand} from './AdhesrantDemandCRUD'
import AdherantForm from './AdherantForm'
import {AdherantModel} from './AdherantModel'

interface IUpdateAdhesionDemandPageProps {}
function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

const UpdateAdhesionDemandPage: React.FunctionComponent<IUpdateAdhesionDemandPageProps> = (
  props
) => {
  const {id} = useParams<{id: string}>()
  const [adhesionDemand, setAdhesionDemand] = useState<AdherantModel>()
  useEffect(() => {
    if (!id || adhesionDemand) return
    getAdhesionDemand(id).then((response) => {
      const adhesionDemand = response.data.data
      adhesionDemand.id = id
      adhesionDemand.birthDate = formatDate(adhesionDemand.birthDate)
      adhesionDemand.identityCardDeliveryDate = formatDate(adhesionDemand.identityCardDeliveryDate)
      setAdhesionDemand(adhesionDemand)
    })
  })
  return <div>{adhesionDemand && <AdherantForm adhesionDemand={adhesionDemand} />}</div>
}

export default UpdateAdhesionDemandPage
