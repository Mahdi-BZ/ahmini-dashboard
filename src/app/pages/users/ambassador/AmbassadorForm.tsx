import clsx from 'clsx'
import {useFormik} from 'formik'
import * as React from 'react'
import {useState} from 'react'
import * as Yup from 'yup'
import SubmitButton from '../../../shared/form-groups/SubmitButton'
import TextInput from '../../../shared/form-groups/TextInput'
import {add, update} from './AmbassadorCRUD'
import {AmbassadorModel} from './AmbassadorModel'

const ambassadorSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email invalide')
    .min(3, 'Minimum 3 symboles')
    .max(50, 'Maximum 50 symboles')
    .required("L'email est obligatoire"),
  password: Yup.string()
    .min(3, 'Minimum 3 symboles')
    .max(50, 'Maximum 50 symboles')
    .required('Le mot de passe est obligatoire'),
  firstName: Yup.string().required('Le prénom est obligatoire'),
  lastName: Yup.string().required('Le nom est obligatoire'),
  userName: Yup.string().required("Le nom d'utilisateur est obligatoire"),
  phoneNumber: Yup.number()
    .max(99999999, "Numéro de téléphone invalide") //Max telecom
    .min(20000000, "Numéro de téléphone invalide") //Min Ooredoo
    .required('Le numéro de téléphone est obligatoire'),
})

interface IAmbassadorFormProps {
  ambassador?: AmbassadorModel
}
const emptyAmbassador: AmbassadorModel = {
    id: 0,
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    firstName: '',
    userName: '',
}
const AmbassadorForm: React.FunctionComponent<IAmbassadorFormProps> = (props) => {
  const action = props.ambassador === undefined ? 'Ajouter' : 'Mettre à jour'
  const [loading, setLoading] = useState(false)
  const initialValues = props.ambassador === undefined ? emptyAmbassador : props.ambassador;

  const applyChanges = (ambassador: AmbassadorModel) => {
    if (action === 'Ajouter') return add(ambassador)
    if (action === 'Mettre à jour') return update(ambassador)
  }

  const formik = useFormik({
    initialValues,
    validationSchema: ambassadorSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        applyChanges(values)
          .then(() => {
            setLoading(false);
            formik.resetForm();
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
        <TextInput getFieldProps={formik.getFieldProps('userName')} isTouched={formik.touched.userName} 
          validationError={formik.errors.userName} type={'text'} name={'userName'} 
          placeHolder={"Nom d'utilisateur"} label={"Nom d'utilisateur"} />
        <TextInput getFieldProps={formik.getFieldProps('phoneNumber')} isTouched={formik.touched.phoneNumber} 
          validationError={formik.errors.phoneNumber} type={'number'} name={'phoneNumber'} 
          placeHolder={'Numéro de Téléphone'} label={'Téléphone'} />
        <TextInput getFieldProps={formik.getFieldProps('email')} isTouched={formik.touched.email} 
          validationError={formik.errors.email} type={'text'} name={'email'} 
          placeHolder={'Email'} label={'Email'} />
        {action === 'Ajouter' && 
          <TextInput getFieldProps={formik.getFieldProps('password')} isTouched={formik.touched.password} 
          validationError={formik.errors.password} type={'text'} name={'password'} 
          placeHolder={'Mot de passe'} label={'Mot de passe'} />
        }
        <SubmitButton content={action} isSubmitting={formik.isSubmitting} isValid={formik.isValid} />
      </div>

    </form>
  )
}

export default AmbassadorForm
