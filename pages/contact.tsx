import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { Formik, useField, ErrorMessage } from 'formik'
import * as Yup from 'yup'

type TextInputType = {
  label: string
  name: string
  type: string
  placeholder: string
  id?: string
}

const TextInput = ({ label, ...props }: TextInputType): JSX.Element => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  return (
    <>
      <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
      <Form.Control {...field} {...props} />
      {props.id}
      {/* {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null} */}
    </>
  )
}

const TextAreaInput = ({ label, ...props }: TextInputType) => {
  const [field, meta] = useField(props)
  return (
    <>
      <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
      <Form.Control as="textarea" rows={3} {...field} {...props} />
      {/* {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null} */}
    </>
  )
}

const contact = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))

          setSubmitting(false)
        }, 400)
      }}
    >
      {(formik) => (
        <div className="min-vh-100 mt-5">
          <Container className="contact-form rounded shadow p-5">
            <Form onSubmit={formik.handleSubmit}>
              <h1 className="pb-5 text-center">Contact Me</h1>
              <Form.Group className="pb-3">
                <TextInput label="First Name" name="firstName" type="text" placeholder="John" />
                <ErrorMessage name="firstName" />
              </Form.Group>
              <Form.Group className="pb-3">
                <TextInput label="Last Name" name="lastName" type="text" placeholder="Doe" />
                <ErrorMessage name="lastName" />
              </Form.Group>
              <Form.Group className="pb-3">
                <TextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                />
                <ErrorMessage name="email" />
              </Form.Group>
              <Form.Group className="pb-3">
                <TextAreaInput
                  label="Your Message"
                  name="message"
                  type="textarea"
                  placeholder="Enter message here"
                />
                <ErrorMessage name="message" />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button size="lg" className="btn-submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Container>
        </div>
      )}
    </Formik>
  )
}

export default contact
