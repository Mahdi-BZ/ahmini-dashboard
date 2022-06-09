import clsx from 'clsx'
import {useFormik} from 'formik'
import * as React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import SubmitButton from '../../shared/form-groups/SubmitButton'
import TextInput from '../../shared/form-groups/TextInput'
import {add} from './SponsorshipRequestCRUD'
import {SponsorshipRequestModel} from './SponsorshipRequestModel'

interface ISponsorshipRequestFormProps {
}
const sponsorshipRequestSchema = Yup.object().shape({
    governorate: Yup.string().required("La governorate est obligatoire"),
    womenCount: Yup.number().required("Le nombre des la femme est obligatoire"),
  })

  const emptySponsorshipRequest: SponsorshipRequestModel = {
      id: 0,
      governorate: '',
      womenCount: 0,
  }
const SponsorshipRequestForm: React.FunctionComponent<ISponsorshipRequestFormProps> = (props) => {
  const [loading, setLoading] = useState(false)
  const initialValues = emptySponsorshipRequest;
  const history = useHistory();

  const applyChanges = (sponsorshipRequest: SponsorshipRequestModel) => {
    return add(sponsorshipRequest)
  }

  const formik = useFormik({
    initialValues,
    validationSchema: sponsorshipRequestSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        applyChanges(values)
          .then(() => {
            setLoading(false);
            formik.resetForm();
            history.push('/crafted/sponsorship/request');
          })
          .catch((e) => {
            setLoading(false)
            setSubmitting(false)
            
            setStatus('erreur');
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
      <div className='card-body p-9'>
        <TextInput getFieldProps={formik.getFieldProps('governorate')} isTouched={formik.touched.governorate} 
          validationError={formik.errors.governorate} type={'text'} name={'governorate'} 
          placeHolder={'Governorate'} label={'Governorate'} />
          <TextInput getFieldProps={formik.getFieldProps('womenCount')} isTouched={formik.touched.womenCount} 
          validationError={formik.errors.womenCount} type={'number'} name={'womenCount'} 
          placeHolder={'Nombre Des Femmes'} label={'Nombre Des Femmes'} />
    
        <SubmitButton content={'Ajouter'} isSubmitting={formik.isSubmitting} isValid={formik.isValid}/>
      </div>
    </form>
  )
}

export default SponsorshipRequestForm