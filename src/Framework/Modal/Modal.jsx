import React, { useEffect } from "react";
import { useState } from "react";
import "./Modal.css";

function Modal(props) {
  const [formValidationError, setFormValidationError] = useState({});
  const [popupValues, setPopupValues] = useState({
    txtName: "",
    txtEmail: "",
    txtAddress: "",
  });
  const[submitted,setSubmitted]=useState(false);


  const clearForm = () => {
    console.log("clear");
    setPopupValues({
      txtName: "",
      txtEmail: "",
      txtAddress: "",
      
    });
  };


  const validateInputField = (name, value) => {
    let errorsMsg = "";
    if (name === "txtName" || name === "txtAddress") {
      if (!value || typeof value === "undefined" || value === null) {
        errorsMsg = "Can not be empty";
      }
    } else if (name === "txtEmail") {
      if (!value || typeof value === "undefined" || value === null) {
        errorsMsg = "Email Address Cannot be empty";
      } else if (value) {
        const regex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
        if (!regex.test(value)) {
          errorsMsg = "Invalid Email";
        }
      }
    }
    return errorsMsg;
  };

  const handleValidation = () => {
    try {
      const errors = {};
      let formIsValid = true;
      errors["txtName"] = validateInputField("txtName", popupValues.txtName);
      errors["txtEmail"] = validateInputField("txtName", popupValues.txtEmail);
      errors["txtAdress"] = validateInputField("txtName",popupValues.txtAddress);
      if (Object.values(errors).join("").toString()) {
        formIsValid = false;
      }
      setFormValidationError(errors);
      return formIsValid;
    } catch (error) {
      alert(error);
      return false;
    }
  };

  const updatePopupValues = (name, value) => {
    formValidationError[name] = validateInputField(name, value);
    console.log(popupValues);
    setPopupValues((Values) => ({
      ...Values,
      [name]: value,
    }));
  };


  const saveData = async () => {
    console.log("clicked");
    if (!handleValidation()) {
      console.log(formValidationError);
      return;
    }
    const formData = {
      main: {
        name: popupValues && popupValues.txtName ? popupValues.txtName : "",
        email: popupValues && popupValues.txtEmail ? popupValues.txtEmail : "",
        address:popupValues && popupValues.txtAddress ? popupValues.txtAddress : "",
      },
    };
    
      
        let UpdateData = {
          name: formData.main.name,
          email: formData.main.email,
          body: formData.main.address,
        };
        props.UpdatestudentData(UpdateData);
        console.log(props);
    clearForm();
    setSubmitted(true);
  };
  useEffect(()=>{
    console.log(props);
  },[])
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            className="btn1"
            onClick={() => {props.setOpenModal(false)}}
          > X
          </button>
        </div>
        <div className="title">
          <h1>Popup Modal</h1>
        </div>
        <div className="body">
  
          <input
            type="text"
            value={popupValues.email}
            placeholder="Name"
            name="txtName"
            onChange={(e) => updatePopupValues(e.target.name, e.target.value)}
          />
           {formValidationError["txtName"]}
          <input
            type="text"
            value={popupValues.address}
            placeholder="Email"
            name="txtEmail"
            onChange={(e) => updatePopupValues(e.target.name, e.target.value)}
          />
          {formValidationError["txtEmail"]}
          <input
            type="text"
            value={popupValues.phoneNumber}
            placeholder="Address"
            name="txtAddress"
            onChange={(e) => updatePopupValues(e.target.name, e.target.value)}
          />
           {formValidationError["txtAddress"]}
        </div>
        <div className="footer">
          <button onClick={() => clearForm()}>Clear</button>
          <button onClick={() => {saveData()
          }}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
