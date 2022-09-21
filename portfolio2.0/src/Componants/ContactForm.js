import React, { useState } from "react";
// import "./style.css";
import { validateEmail } from "../utils/helpers";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Form() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  // const handleInputChange = (e) => {
  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   if (inputType === "email") {
  //     setEmail(inputValue);
  //   } else if (inputType === "userName") {
  //     setUserName(inputValue);
  //   } else setMessage(inputValue);
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
   
  //   if (!validateEmail(email) || !userName) {
  //     setErrorMessage("Email is invalid");
     
  //     return;
      
  //   setUserName("");
  
  //   setMessage("");
  //   setEmail("");
  //   alert(`Hello ${userName}`);
  // };

  return (
  
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
        
          <TextField id="standard-basic" label="First Name" variant="standard" />
          <TextField id="standard-basic" label="Last Name" variant="standard" />
          <TextField id="standard-basic" label="Subject" variant="standard" />
          <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
          />
        </Box>
   
  );
    


}
