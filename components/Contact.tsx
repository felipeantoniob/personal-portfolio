import React, { useRef } from 'react'
import { Form, Container, Button, Row, Col, FloatingLabel } from 'react-bootstrap'
import { Formik, useField, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID

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
      {/* <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label> */}
      <FloatingLabel controlId={props.id || props.name} label={label}>
        <Form.Control {...field} {...props} className="form-input border-0" />
      </FloatingLabel>
      {props.id}
      {/* {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null} */}
    </>
  )
}

const TextAreaInput = ({ label, ...props }: TextInputType) => {
  const [field, meta] = useField(props)
  return (
    <>
      {/* <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label> */}
      <FloatingLabel controlId={props.id || props.name} label={label}>
        <Form.Control
          as="textarea"
          rows={3}
          {...field}
          {...props}
          className="form-input border-0"
          style={{ height: '200px' }}
        />
      </FloatingLabel>
      {/* {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null} */}
    </>
  )
}

const Contact = () => {
  const form = useRef(null)

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string().min(1, 'Must be at least 1 character').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          emailjs.sendForm(SERVICE_ID!, TEMPLATE_ID!, form.current!, PUBLIC_KEY)!.then(
            (result) => {
              // console.log(result.text)
              alert('Email sent successfully!')
            },
            (error) => {
              // console.log(error.text)
            }
          )

          setSubmitting(false)
        }, 400)
      }}
    >
      {(formik) => (
        <motion.div
          className="min-vh-10"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0 },
            hidden: { opacity: 0, scale: 1, y: 0 },
          }}
        >
          <Container className="contact-form rounded py-5" id="contact">
            <h1 className="pb-5 text-center">CONTACT ME</h1>
            <Row>
              <Col className="m-3">
                <Form ref={form} onSubmit={formik.handleSubmit}>
                  <Form.Group className="pb-3">
                    <TextInput label="Name" name="name" type="text" placeholder="John Doe" />
                    {/* <Form.Control.Feedback type="invalid" tooltip> */}
                    <ErrorMessage name="name" />
                    {/* </Form.Control.Feedback> */}
                  </Form.Group>
                  <Form.Group className="pb-3">
                    <TextInput
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
                    {/* <Form.Control.Feedback type="invalid" tooltip>
                      <ErrorMessage name="email" />
                    </Form.Control.Feedback> */}
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
                    <Button size="lg" className="btn-submit border-0" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Col>
              <Col className="d-flex align-items-start m-3">
                <div>
                  <p className="lead fs-4">
                    Have an exciting project you need some help with? Feel free to send me a
                    message, and let&apos;s chat.
                  </p>
                  <br />
                  <p className="lead fs-4">
                    If you have any questions about me or my projects, you can send an email to{' '}
                    <a
                      href="mailto:felipebuencamino@gmail.com"
                      className="text-decoration-underline fst-italic text-reset"
                    >
                      felipebuencamino@gmail.com
                    </a>{' '}
                    and I&apos;ll get back to you as soon as possible.
                  </p>
                  <br />
                  <p className="lead fs-4">
                    Drop a comment, question, or concern, and thanks for stopping by!
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </motion.div>
      )}
    </Formik>
  )
}

export default Contact
