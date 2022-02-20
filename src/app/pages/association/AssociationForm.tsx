import clsx from 'clsx'
import {useFormik, yupToFormErrors} from 'formik'
import * as React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import SubmitButton from '../../shared/form-groups/SubmitButton'
import TextInput from '../../shared/form-groups/TextInput'
import {add} from './AssociationCRUD'
import {AssociationModel} from './AssociationModel'

interface IAssociationFormProps {
}
const AssociationSchema = Yup.object().shape({
    faxNumber: Yup.number().min(71111111,"Numero invalide")
        .max(79999999,'Numero invalide')
        .required("Le numero FAX est obligatoire"),
    associationName: Yup.string().required("Le Nom D'association est obligatoire"),
    sector: Yup.string().required("Le secteurs est obligatoire"),
    responsible: Yup.string().required("Le responsable est obligatoire"),
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
    phoneNumber: Yup.number()
        .max(99999999, "Numéro de téléphone invalide") //Max telecom
        .min(20000000, "Numéro de téléphone invalide") //Min Ooredoo
        .required('Le numéro de téléphone est obligatoire'),
  })

  const emptyAssociation: AssociationModel = {
      faxNumber: 0,
      associationName: '',
      sector: '',
      responsible: '',
      phoneNumber: 0,
      email: '',
      password: '',
      firstName: '',
      lastName: ''
  }
const AssociationForm: React.FunctionComponent<IAssociationFormProps> = (props) => {
  const [loading, setLoading] = useState(false)
  const initialValues = emptyAssociation;
  const history = useHistory();

  const applyChanges = (Association: AssociationModel) => {
    return add(Association)
  }

  const formik = useFormik({
    initialValues,
    validationSchema: AssociationSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        applyChanges(values)
          .then(() => {
            setLoading(false);
            formik.resetForm();
            history.push('/crafted/users/association');
          })
          .catch((e) => {
            setLoading(false)
            setSubmitting(false)
            console.log(e.response.data);
            setStatus(['Erreur']);
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
        <TextInput getFieldProps={formik.getFieldProps('associationName')} isTouched={formik.touched.associationName} 
          validationError={formik.errors.associationName} type={'text'} name={'associationName'} 
          placeHolder={"Nom D'association"} label={"Nom D'association"} />
        <TextInput getFieldProps={formik.getFieldProps('sector')} isTouched={formik.touched.sector} 
          validationError={formik.errors.sector} type={'text'} name={'sector'} 
          placeHolder={"Secteur"} label={"Secteur"} />
        <TextInput getFieldProps={formik.getFieldProps('responsible')} isTouched={formik.touched.responsible} 
          validationError={formik.errors.responsible} type={'text'} name={'responsible'} 
          placeHolder={"Responsable"} label={"Responsable"} />
          <TextInput getFieldProps={formik.getFieldProps('faxNumber')} isTouched={formik.touched.faxNumber} 
          validationError={formik.errors.faxNumber} type={'number'} name={'faxNumber'} 
          placeHolder={'Numero FAX'} label={'Numero FAX'} />
          <TextInput getFieldProps={formik.getFieldProps('lastName')} isTouched={formik.touched.lastName} 
          validationError={formik.errors.lastName} type={'text'} name={'lastName'} 
          placeHolder={"Nom"} label={"Nom"} />
        <TextInput getFieldProps={formik.getFieldProps('firstName')} isTouched={formik.touched.firstName} 
          validationError={formik.errors.firstName} type={'text'} name={'firstName'} 
          placeHolder={"Prénom"} label={"Prénom"} />
        <TextInput getFieldProps={formik.getFieldProps('phoneNumber')} isTouched={formik.touched.phoneNumber} 
          validationError={formik.errors.phoneNumber} type={'number'} name={'phoneNumber'} 
          placeHolder={'Numéro de Téléphone'} label={'Téléphone'} />
        <TextInput getFieldProps={formik.getFieldProps('email')} isTouched={formik.touched.email} 
          validationError={formik.errors.email} type={'text'} name={'email'} 
          placeHolder={'Email'} label={'Email'} />
          <TextInput getFieldProps={formik.getFieldProps('password')} isTouched={formik.touched.password} 
          validationError={formik.errors.password} type={'text'} name={'password'} 
          placeHolder={'Mot de passe'} label={'Mot de passe'} />
    
        <SubmitButton content={'Ajouter'} isSubmitting={formik.isSubmitting} isValid={formik.isValid} />
      </div>
    </form>
  )
}

export default AssociationForm