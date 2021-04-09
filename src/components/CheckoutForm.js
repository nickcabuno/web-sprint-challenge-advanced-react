import React, { useState } from "react";
import useForm from '../hooks/useForm';

//started trying to make error messages and lightmode
//and clearForm and it started getting a little messy  
//so at this point figured i might as well submit

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// const errorData = {
//   firstName: "",
//   lastName: "",
//   address: "",
//   city: "",
//   state: "",
//   zip: "",
// }

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, handleChanges, clearForm] = useForm(initialValue);
  // const [errors, setErrors] = useState(errorData);

  // const errorHandling = (fieldName, fieldValue) => {
  //     if (fieldName === "firstName" && fieldValue.length < 2)
  //     return `${fieldName} must have at least 2 characters.`;

  //     if (fieldName === "lastName" && fieldValue.length < 2)
  //     return `${fieldName} must have at least 2 characters.`;

  //     if (fieldName === "address" && fieldValue === "")
  //     return `${fieldName} is a required field.`;

  //     if (fieldName === "city" && fieldValue === "")
  //     return `${fieldName} is a required field.`;

  //     if (fieldName === "state" && fieldValue === "")
  //     return `${fieldName} is a required field.`;

  //     if (fieldName === "zip" && fieldValue.length < 5)
  //     return `${fieldName} must be a real zip.`;
    
  //   return "";
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

  //   const submitErrors = {};
  //   Object.keys(errors).forEach(field => {
  //     submitErrors[field] = errorHandling(field, form[field])
  //   });
    
  //   setErrors(submitErrors);
    
  //   const hasErrors = (submitErrors.firstName === "" && submitErrors.lastName === "" && submitErrors.email === "" && submitErrors.message === "");
  //   setDisplayData(hasErrors);

    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
