import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Contact() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),

    lastName: Yup.string().required("Last name is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    phone: Yup.string(), // optional

    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message must be less than 500 characters")
      .required("Message is required"),
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          alert("Message sent successfully! We will contact you soon.");

          resetForm(); // reset form بعد الإرسال
        }}
      >
        <Form className="bg-white p-8 rounded shadow w-100">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

          <div className="flex gap-2">
            <div className="w-full">
              <Field
                name="firstName"
                placeholder="First Name"
                className="border p-2 w-full mb-1"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="w-full">
              <Field
                name="lastName"
                placeholder="Last Name"
                className="border p-2 w-full mb-1"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          <Field
            name="email"
            placeholder="Email"
            className="border p-2 w-full mt-3 mb-1"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />

          <Field
            name="phone"
            placeholder="Phone (optional)"
            className="border p-2 w-full mt-3 mb-1"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="text-red-500 text-sm"
          />

          <Field
            as="textarea"
            name="message"
            placeholder="Message"
            className="border p-2 w-full mt-3 mb-1 h-28"
          />
          <ErrorMessage
            name="message"
            component="div"
            className="text-red-500 text-sm"
          />

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded mt-4 w-full"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Contact;
