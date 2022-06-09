import clsx from 'clsx'
import {useFormik} from 'formik'
import * as React from 'react'
import {useState} from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import * as Yup from 'yup'
import { RootState } from '../../../setup'
import { UserModel } from '../../modules/auth/models/UserModel'
import SubmitButton from '../../shared/form-groups/SubmitButton'
import TextInput from '../../shared/form-groups/TextInput'
import {add, update} from './AdherantCRUD'
import {AdherantModel} from './AdherantModel'

const adherantSchema = Yup.object().shape({
  firstName: Yup.string().required('Le prénom est obligatoire'),
  lastName: Yup.string().required('Le nom est obligatoire'),
  clientCodeAhmini: Yup.string().required('Le code client est obligatoire'),
  familtySituation: Yup.string().required('Situation Familiale obligatoire'),
  nationality: Yup.string().required('La nationalité est obligatoire'),
  childCount: Yup.number(),
  identityCardNature: Yup.string().required('La nature de carte identité est obligatoire'),
  identityCardNumber: Yup.number().required('Le CIN est obligatoire'),
  identityCardDeliveryDate: Yup.date().required('Date de livraison de la CI obligatoire'),
  birthDate: Yup.date().required('Date de naissance obligatoire'),
  birthPlace: Yup.string().required('Location de naissance obligatoire'),
  governorate: Yup.string().required('La governorate est obligatoire'),
  town: Yup.string().required('Ville obligatoire'),
  street: Yup.string().required('Rue obligatoire'),
  postalCode: Yup.number().required('Le code postal est obligatoire'),
  activity: Yup.string().required("L'activité est obligatoire"),
  phone: Yup.number()
    .max(99999999, 'Numéro de téléphone invalide') //Max telecom
    .min(20000000, 'Numéro de téléphone invalide') //Min Ooredoo
    .required('Le numéro de téléphone est obligatoire'),
})

interface IAdherantFormProps {
  adherant?: AdherantModel,
}
const emptyAdherant: AdherantModel = {
  id: 0,
  lastName: '',
  firstName: '',
  postalCode: 0,
  governorate: '',
  birthDate: '',
  birthPlace: '',
  nationality: '',
  identityCardNature: '',
  identityCardNumber: 0,
  identityCardDeliveryDate: '',
  familtySituation: '',
  street: '',
  town: '',
  phone: 0,
  childCount: 0,
  activity: '',
  clientCodeAhmini: ''
}
const AdherantForm: React.FunctionComponent<IAdherantFormProps> = (props) => {

  const action = props.adherant === undefined ? 'Ajouter' : 'Mettre à jour'
  const [loading, setLoading] = useState(false)
  const initialValues =
    props.adherant === undefined ? emptyAdherant : props.adherant
  const history = useHistory()


 

  const applyChanges = (adherant: AdherantModel) => {
    if (action === 'Ajouter') {
       
      const persistObjStr = localStorage.getItem("persist:v100-demo1-auth");
      const persistObj = JSON.parse(persistObjStr);
      const user = JSON.parse(persistObj.user);
      const passedBy = {
        id: user.data[0].id,
      }
      adherant.passedBy = passedBy;
      return add({data: adherant});
    }
    if (action === 'Mettre à jour') return update({data: adherant})
  }

  const formik = useFormik({
    initialValues,
    validationSchema: adherantSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        applyChanges(values)
          .then(() => {
            setLoading(false)
            formik.resetForm()
            history.goBack();
          })
          .catch((e) => {
            setLoading(false)
            setSubmitting(false)
            const errors = e.response.data.errors.map((err) => Object.values(err.constraints))
            setStatus(errors)
          })
      }, 500)
    },
  })
  return (
    <form className='form w-100 bg-white rounded' onSubmit={formik.handleSubmit} noValidate>
      {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <ul>
            {formik.status.map((err) => (
              <li className='alert-text font-weight-bold'>{err}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
      <div className='card-body p-9'>
        <TextInput
          getFieldProps={formik.getFieldProps('lastName')}
          isTouched={formik.touched.lastName}
          validationError={formik.errors.lastName}
          type={'text'}
          name={'lastName'}
          placeHolder={'Nom'}
          label={'Nom'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('firstName')}
          isTouched={formik.touched.firstName}
          validationError={formik.errors.firstName}
          type={'text'}
          name={'firstName'}
          placeHolder={'Prénom'}
          label={'Prénom'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('familtySituation')}
          isTouched={formik.touched.familtySituation}
          validationError={formik.errors.familtySituation}
          type={'text'}
          name={'familtySituation'}
          placeHolder={'Situation Familiale'}
          label={'Situation Familiale'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('nationality')}
          isTouched={formik.touched.nationality}
          validationError={formik.errors.nationality}
          type={'text'}
          name={'nationality'}
          placeHolder={'Nationalité'}
          label={'Nationalité'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('phone')}
          isTouched={formik.touched.phone}
          validationError={formik.errors.phone}
          type={'number'}
          name={'phone'}
          placeHolder={'Numéro de Téléphone'}
          label={'Téléphone'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('activity')}
          isTouched={formik.touched.activity}
          validationError={formik.errors.activity}
          type={'text'}
          name={'activity'}
          placeHolder={'Activité'}
          label={'Activité'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('childCount')}
          isTouched={formik.touched.childCount}
          validationError={formik.errors.childCount}
          type={'number'}
          name={'childCount'}
          placeHolder={'Nombre des enfants'}
          label={'Nombre des enfants'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('identityCardNature')}
          isTouched={formik.touched.identityCardNature}
          validationError={formik.errors.identityCardNature}
          type={'text'}
          name={'identityCardNature'}
          placeHolder={'Nature du carte identité'}
          label={'Nature du carte identité'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('identityCardNumber')}
          isTouched={formik.touched.identityCardNumber}
          validationError={formik.errors.identityCardNumber}
          type={'number'}
          name={'identityCardNumber'}
          placeHolder={'Nombre du carte identité'}
          label={'Nombre du carte identité'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('identityCardDeliveryDate')}
          isTouched={formik.touched.identityCardDeliveryDate}
          validationError={formik.errors.identityCardDeliveryDate}
          type={'date'}
          name={'identityCardDeliveryDate'}
          placeHolder={'Date de livration du carte identité'}
          label={'Date de livration du carte identité'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('birthDate')}
          isTouched={formik.touched.birthDate}
          validationError={formik.errors.birthDate}
          type={'date'}
          name={'birthDate'}
          placeHolder={'Date de naissance'}
          label={'Date de naissance'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('birthPlace')}
          isTouched={formik.touched.birthPlace}
          validationError={formik.errors.birthPlace}
          type={'text'}
          name={'birthPlace'}
          placeHolder={'Location de naissance'}
          label={'Location de naissance'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('governorate')}
          isTouched={formik.touched.governorate}
          validationError={formik.errors.governorate}
          type={'text'}
          name={'governorate'}
          placeHolder={'Governorate'}
          label={'Governorate'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('town')}
          isTouched={formik.touched.town}
          validationError={formik.errors.town}
          type={'text'}
          name={'town'}
          placeHolder={'Ville'}
          label={'Ville'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('street')}
          isTouched={formik.touched.street}
          validationError={formik.errors.street}
          type={'text'}
          name={'street'}
          placeHolder={'Rue'}
          label={'Rue'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('postalCode')}
          isTouched={formik.touched.postalCode}
          validationError={formik.errors.postalCode}
          type={'number'}
          name={'postalCode'}
          placeHolder={'Code Postal'}
          label={'Code Postal'}
        />
        <TextInput
          getFieldProps={formik.getFieldProps('clientCodeAhmini')}
          isTouched={formik.touched.clientCodeAhmini}
          validationError={formik.errors.clientCodeAhmini}
          type={'text'}
          name={'clientCodeAhmini'}
          placeHolder={'Code Client'}
          label={'Code Client'}
        />

        <SubmitButton
          content={action}
          isSubmitting={formik.isSubmitting}
          isValid={formik.isValid}
        />
      </div>
    </form>
  )
}

export default AdherantForm
