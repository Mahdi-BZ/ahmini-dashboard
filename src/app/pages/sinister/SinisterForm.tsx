import axios from 'axios'
import clsx from 'clsx'
import {useFormik} from 'formik'
import * as React from 'react'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import DropDown from '../../shared/form-groups/dropDown'
import SubmitButton from '../../shared/form-groups/SubmitButton'
import TextInput from '../../shared/form-groups/TextInput'
import { AddSinisterModel } from './AddSinisterModel'

const sinisterSchema = Yup.object().shape({
  name: Yup.string().required("Le nom est obligatoire"),
  definition: Yup.string().required("La definition est obligatoire"),
  type: Yup.object().shape({
      name: Yup.string().required("Le type est obligatoire")
  })
})

interface ISinisterFormProps {
  sinister?: AddSinisterModel
}
const emptySinister: AddSinisterModel = {
    name: '',
    definition: '',
    type: {name: ''}
}
const SinisterForm: React.FunctionComponent<ISinisterFormProps> = (props) => {
  const [loading, setLoading] = useState(false)
  const initialValues = emptySinister;
  const history = useHistory();
  const [types, setTypes] = useState(['accident sur la route','accident de travail', 'autre']);

  const applyChanges = (sinister: AddSinisterModel) => {
    return axios.post('/sinister/register',sinister);
  }

  useEffect(() => {
     /* axios.get('TODO')
        .then(response => {
            const types = response.data.map(el => el.name);
            setTypes(types);
        })*/
  })

  const formik = useFormik({
    initialValues,
    validationSchema: sinisterSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        applyChanges(values)
          .then(() => {
            setLoading(false);
            formik.resetForm();
            history.push('/crafted/declaredsinister');
          })
          .catch((e) => {
            setLoading(false)
            setSubmitting(false)
            console.log(e.response.data);
          })
      }, 500)
    },
  })
  return (
    <form
      className='form w-100 bg-white rounded'
      onSubmit={formik.handleSubmit}
      noValidate
    >
    {formik.status ? (
      <div className='mb-lg-15 alert alert-danger'>
        <ul>
          {formik.status.map(err => <li className='alert-text font-weight-bold'>{err}</li>)}
        </ul>
      </div>
    ) : (
      <div></div>
    )}
      <div className='card-body p-9'>
        <TextInput getFieldProps={formik.getFieldProps('name')} isTouched={formik.touched.name} 
          validationError={formik.errors.name} type={'text'} name={'name'} 
          placeHolder={"Nom"} label={"Nom"} />
        <TextInput getFieldProps={formik.getFieldProps('definition')} isTouched={formik.touched.definition} 
          validationError={formik.errors.definition} type={'text'} name={'definition'} 
          placeHolder={"Définition"} label={"Définition"} />
        <DropDown data={types} label='Type' name={'type'} getFieldProps={formik.getFieldProps('type.name')} 
        isTouched={formik.touched.type?.name} validationError={formik.errors.type?.name} />
    
        <SubmitButton content={'AJOUTER'} isSubmitting={formik.isSubmitting} isValid={formik.isValid} />
      </div>
    </form>
  )
}

export default SinisterForm