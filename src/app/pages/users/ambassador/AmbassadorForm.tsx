import clsx from 'clsx'
import {useFormik} from 'formik'
import * as React from 'react'
import {useState} from 'react'
import * as Yup from 'yup'
import {add} from './AmbassadorCRUD'
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
    if (action === 'Mettre à jour') return add(ambassador)
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
          .catch(() => {
            setLoading(false)
            setSubmitting(false)
            setStatus('The ambassador detail is incorrect')
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
        <div className='alert-text font-weight-bold'>{formik.status}</div>
      </div>
    ) : (
      <div></div>
    )}
      <div className='card-body p-9'>
        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>Nom</label>
          <div className='col-lg-8 fv-row'>
            <input
              placeholder='Nom'
              {...formik.getFieldProps('lastName')}
              className={clsx(
                'form-control form-control-lg form-control-solid',
                {'is-invalid': formik.touched.lastName && formik.errors.lastName},
                {
                  'is-valid': formik.touched.lastName && !formik.errors.lastName,
                }
              )}
              type='text'
              name='lastName'
              autoComplete='off'
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.lastName}</span>
              </div>
            )}
          </div>
        </div>
        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>Prénom</label>

          <div className='col-lg-8 fv-row'>
            <input
              placeholder='Prénom'
              {...formik.getFieldProps('firstName')}
              className={clsx(
                'form-control form-control-lg form-control-solid',
                {'is-invalid': formik.touched.firstName && formik.errors.firstName},
                {
                  'is-valid': formik.touched.firstName && !formik.errors.firstName,
                }
              )}
              type='text'
              name='firstName'
              autoComplete='off'
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className='fv-plugins-message-container '>
                <span role='alert'>{formik.errors.firstName}</span>
              </div>
            )}
          </div>
        </div>
        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>
            Nom d'utilisateur
          </label>

          <div className='col-lg-8 fv-row'>
            <input
              placeholder="Nom d'utilisateur"
              {...formik.getFieldProps('userName')}
              className={clsx(
                'form-control form-control-lg form-control-solid',
                {'is-invalid': formik.touched.userName && formik.errors.userName},
                {
                  'is-valid': formik.touched.userName && !formik.errors.userName,
                }
              )}
              type='text'
              name='userName'
              autoComplete='off'
            />
            {formik.touched.userName && formik.errors.userName && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.userName}</span>
              </div>
            )}
          </div>
        </div>
        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>
            Téléphone
          </label>

          <div className='col-lg-8 fv-row'>
            <input
              placeholder='Numéro de Téléphone'
              {...formik.getFieldProps('phoneNumber')}
              className={clsx(
                'form-control form-control-lg form-control-solid',
                {'is-invalid': formik.touched.phoneNumber && formik.errors.phoneNumber},
                {
                  'is-valid': formik.touched.phoneNumber && !formik.errors.phoneNumber,
                }
              )}
              type='number'
              name='phoneNumber'
              autoComplete='off'
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.phoneNumber}</span>
              </div>
            )}
          </div>
        </div>

        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>
            Email
          </label>

          <div className='col-lg-8 fv-row'>
            <input
              placeholder='Email'
              {...formik.getFieldProps('email')}
              className={clsx(
                'form-control form-control-lg form-control-solid',
                {'is-invalid': formik.touched.email && formik.errors.email},
                {
                  'is-valid': formik.touched.email && !formik.errors.email,
                }
              )}
              type='email'
              name='email'
              autoComplete='off'
            />
            {formik.touched.email && formik.errors.email && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.email}</span>
              </div>
            )}
          </div>
        </div>
        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>
            Mot de passe
          </label>

          <div className='col-lg-8 fv-row'>
            <input
              placeholder='Mot de passe'
              {...formik.getFieldProps('password')}
              className={clsx(
                'form-control form-control-lg form-control-solid',
                {'is-invalid': formik.touched.password && formik.errors.password},
                {
                  'is-valid': formik.touched.password && !formik.errors.password,
                }
              )}
              type='text'
              name='password'
              autoComplete='off'
            />
            {formik.touched.password && formik.errors.password && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.password}</span>
              </div>
            )}
          </div>
        </div>
        <div className='d-flex flex-row-reverse'>
          <div className='p-5'>
            <a href='/crafted/users/admin'>
              <button 
                type='submit' 
                className='btn btn-primary btn-sm'
                disabled={formik.isSubmitting || !formik.isValid}>
                {action}
              </button>
            </a>
          </div>
        </div>
      </div>

    </form>
  )
}

export default AmbassadorForm
