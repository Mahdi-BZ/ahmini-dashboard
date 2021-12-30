import clsx from 'clsx'
import {useFormik} from 'formik'
import * as React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import SubmitButton from '../../shared/form-groups/SubmitButton'
import TextInput from '../../shared/form-groups/TextInput'
import {add, update} from './WomanCRUD'
import {WomanModel} from './WomanModel'

const womanSchema = Yup.object().shape({
  firstName: Yup.string().required('Le prénom est obligatoire'),
  lastName: Yup.string().required('Le nom est obligatoire'),
  cin: Yup.number().required("Le CIN est obligatoire"),
  postalCode: Yup.number().required("Le code postal est obligatoire"),
  governorate: Yup.string().required("La governorate est obligatoire"),
  womanCode: Yup.string().required("Le code de la femme est obligatoire"),
  work: Yup.string().required("Le travail est obligatoire")
})

interface IWomanFormProps {
  woman?: WomanModel
}
const emptyWoman: WomanModel = {
    id: 0,
    lastName: '',
    firstName: '',
    cin: 0,
    postalCode: 0,
    governorate: '',
    womanCode: '',
    work: ''
}
const WomanForm: React.FunctionComponent<IWomanFormProps> = (props) => {
  const action = props.woman === undefined ? 'Ajouter' : 'Mettre à jour'
  const [loading, setLoading] = useState(false)
  const initialValues = props.woman === undefined ? emptyWoman : props.woman;
  const history = useHistory();

  const applyChanges = (woman: WomanModel) => {
    if (action === 'Ajouter') return add(woman)
    if (action === 'Mettre à jour') return update(woman)
  }

  const formik = useFormik({
    initialValues,
    validationSchema: womanSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        applyChanges(values)
          .then(() => {
            setLoading(false);
            formik.resetForm();
            history.push('/crafted/registered-woman');
          })
          .catch((e) => {
            setLoading(false)
            setSubmitting(false)
            console.log(e.response.data);
            const errors = e.response.data.errors.map(err => Object.values(err.constraints));
            console.log(errors);
            setStatus(errors);
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
        <TextInput getFieldProps={formik.getFieldProps('lastName')} isTouched={formik.touched.lastName} 
          validationError={formik.errors.lastName} type={'text'} name={'lastName'} 
          placeHolder={"Nom"} label={"Nom"} />
        <TextInput getFieldProps={formik.getFieldProps('firstName')} isTouched={formik.touched.firstName} 
          validationError={formik.errors.firstName} type={'text'} name={'firstName'} 
          placeHolder={"Prénom"} label={"Prénom"} />
        <TextInput getFieldProps={formik.getFieldProps('cin')} isTouched={formik.touched.cin} 
          validationError={formik.errors.cin} type={'number'} name={'cin'} 
          placeHolder={'CIN'} label={'CIN'} />
        <TextInput getFieldProps={formik.getFieldProps('governorate')} isTouched={formik.touched.governorate} 
          validationError={formik.errors.governorate} type={'text'} name={'governorate'} 
          placeHolder={'Governorate'} label={'Governorate'} />
        {action === 'Ajouter' && 
          <TextInput getFieldProps={formik.getFieldProps('postalCode')} isTouched={formik.touched.postalCode} 
          validationError={formik.errors.postalCode} type={'number'} name={'postalCode'} 
          placeHolder={'Code Postal'} label={'Code Postal'} />
        }
        <TextInput getFieldProps={formik.getFieldProps('womanCode')} isTouched={formik.touched.womanCode} 
        validationError={formik.errors.womanCode} type={'text'} name={'womanCode'} 
        placeHolder={'Code De La Femme'} label={'Code De La Femme'} />
        <TextInput getFieldProps={formik.getFieldProps('work')} isTouched={formik.touched.work} 
        validationError={formik.errors.work} type={'text'} name={'work'} 
        placeHolder={'Travail'} label={'Travail'} />
    
        <SubmitButton content={action} isSubmitting={formik.isSubmitting} isValid={formik.isValid} />
      </div>
    </form>
  )
}

export default WomanForm