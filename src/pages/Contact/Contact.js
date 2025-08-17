import React from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const prevLocation = location.state?.data || "";

  const validationSchema = Yup.object({
    clientName: Yup.string().required("Enter your Name"),
    email: Yup.string()
      .email("Enter a Valid Email")
      .required("Enter your Email"),
    messages: Yup.string().required("Enter your Messages"),
  });

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      <Formik
        initialValues={{ clientName: "", email: "", messages: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          alert(
            `Thank you dear ${values.clientName}, Your message has been received successfully. Further details will be sent to your email at ${values.email}.`
          );
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="pb-20">
            <h1 className="font-titleFont font-semibold text-3xl">
              Fill up a Form
            </h1>
            <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Name
                </p>
                <Field
                  name="clientName"
                  className="w-full py-1 border-b-2 px-2 text-base font-medium outline-none focus-within:border-primeColor"
                  placeholder="Enter your name here"
                />
                <ErrorMessage
                  name="clientName"
                  component="p"
                  className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2"
                />
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Email
                </p>
                <Field
                  name="email"
                  type="email"
                  className="w-full py-1 border-b-2 px-2 text-base font-medium outline-none focus-within:border-primeColor"
                  placeholder="Enter your email here"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2"
                />
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Messages
                </p>
                <Field
                  as="textarea"
                  name="messages"
                  className="w-full py-1 border-b-2 px-2 text-base font-medium outline-none focus-within:border-primeColor resize-none"
                  placeholder="Enter your message here"
                />
                <ErrorMessage
                  name="messages"
                  component="p"
                  className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
              >
                {isSubmitting ? "Posting..." : "Post"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
