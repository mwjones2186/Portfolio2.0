import React, { useState } from "react";
// import "./style.css";
import { validateEmail } from "../utils/helpers";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button, SendIcon } from "@mui/material";
export default function Form() {
  return (
    <Container>
      <Box
        className="contact-form-container"
        component="form"
        sx={{
          m: 2, 
          width: 1,
          p: 2,
          boxShadow:2,
        }}
        noValidate
        autoComplete="off"
      ><div className="contact-first">
        
          <TextField
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width: 100%"
            sx={{
              m:1,
              width: 1/4,
              p: 1,
              boxShadow: 2,
            }}
            id="standard-basic"
            label="First Name"
            variant="standard"
          />
       
        </div>
        <div>
        <row className="contact-last">
          <TextField
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width:100%"
            sx={{
              m:1,
              width: 1/4,
              p: 1,
              boxShadow: 2,
            }}
            id="standard-basic"
            label="Last Name"
            variant="standard"
          />
        </row>
        </div>
        <div className="contact-subject">
          <TextField
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width: 100%"
            sx={{
              m:1,
              width: 1/4,
              p: 1,
              boxShadow: 2,
            }}
            id="standard-basic"
            label="Subject"
            variant="standard"
          />
        </div>
        <div className="">
          <TextField
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width: 100%"
            id="standard-multiline-static"
            sx={{
              m:1,
              width: 3/4,
              height: 1/2,
              p: 1,
              boxShadow: 2,
            }}
            label="Message"
            rows={6}
            defaultValue=""
            variant="standard"
          />
        </div>
        <div>
        <Button id="" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width: 100%" variant="outlined" >
          Send
        </Button>
  
        </div>
      </Box>
    </Container>
  );
}
// const [email, setEmail] = useState("");
// const [userName, setUserName] = useState("");
// const [errorMessage, setErrorMessage] = useState("");
// const [message, setMessage] = useState("");

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
