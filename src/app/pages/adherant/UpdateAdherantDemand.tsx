import * as React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getAdherant} from './AdherantCRUD'
import AdherantForm from './AdherantForm'
import {AdherantModel} from './AdherantModel'

interface IUpdateAdherantPageProps {}
function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

const UpdateAdherantPage: React.FunctionComponent<IUpdateAdherantPageProps> = (
  props
) => {
  const {id} = useParams<{id: string}>()
  const [adherant, setAdherant] = useState<AdherantModel>()
  useEffect(() => {
    if (!id || adherant) return
    getAdherant(id).then((response) => {
      const adherant: AdherantModel = response.data.data
      adherant.id = parseInt(id)
      adherant.birthDate = formatDate(adherant.birthDate)
      adherant.identityCardDeliveryDate = formatDate(adherant.identityCardDeliveryDate)
      adherant.passedBy = response.data.passedBy;
      console.log(adherant);
      setAdherant(adherant)
    })
  })
  return <div>{adherant && <AdherantForm adherant={adherant} />}</div>
}

export default UpdateAdherantPage
