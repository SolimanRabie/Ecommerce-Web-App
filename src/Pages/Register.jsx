import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Register() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    username: Yup.string()
      .matches(/^\S*$/, "Username must not contain spaces")
      .required("Username is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain one uppercase letter")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <Formik
        initialValues={{
          name: "",
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);

          navigate("/");
        }}
      >
        <Form className="bg-white p-8 rounded shadow w-96">
          <h2 className="text-2xl font-bold mb-4">Register</h2>

          <label>Name</label>
          <Field name="name" className="border p-2 w-full mb-2" />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-sm"
          />

          <label>Email</label>
          <Field name="email" type="email" className="border p-2 w-full mb-2" />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />

          <label>User Name</label>
          <Field name="username" className="border p-2 w-full mb-2" />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500 text-sm"
          />

          <label>Password</label>
          <Field
            name="password"
            type="password"
            className="border p-2 w-full mb-2"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />

          <label>Confirm Password</label>
          <Field
            name="confirmPassword"
            type="password"
            className="border p-2 w-full mb-2"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="text-red-500 text-sm"
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded mt-3 w-full"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
