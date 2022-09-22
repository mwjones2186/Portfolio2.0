import React, { useState } from "react";
// import "./style.css";
import { validateEmail } from "../utils/helpers";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button, SendIcon } from "@mui/material";
import Image from "mui-image";
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
      >
        <Image
            src="https://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Bootcamp-MOOC-Learning-Tech-Coding-Programming-Dice.png"
            height="100"
            width="100%"
            fit="fill"
            showLoading={false}
            errorIcon={true}
            shift={null}
            distance="100px"
            shiftDuration={900}
            bgColor="inherit"
          ></Image>
        {/* <div className="contact-first">
         */}
          <TextField
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width: 100%"
            sx={{
              m:1,
              width: 1/2,
              p: 1,
              boxShadow: 2,
            }}
            id="standard-basic"
            label="First & Last Name"
            variant="standard"
          />
       
        {/* </div>
        <div className="contact-last"> */}
          <TextField
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width:100%"
            sx={{
              m:1,
              width: 1/2,
              p: 1,
              boxShadow: 2,
            }}
            id="standard-basic"
            label="Email Address"
            variant="standard"
          />
        {/* </div>
        <div className="contact-subject"> */}
          <TextField
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width: 100%"
            sx={{
              m:1,
              width: 3/4,
              p: 1,
              boxShadow: 2,
            }}
            id="standard-basic"
            label="Subject"
            variant="standard"
          />
        {/* </div>
        <div className=""> */}
          <TextField
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width: 100%"
            id="standard-multiline-static"
            sx={{
              m:1,
              width: 3/4,
              height: 200,
              p: 1,
              boxShadow: 2,
            }}
            
            label="Message"
            rows={6}
            defaultValue=""
            variant="standard"
          />
        {/* </div>
        <div> */}
        <Button id="" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width: 100%" 
        sx={{
              m:1,
              width: 1/4,
              height: 1/2,
              p: 1,
              boxShadow: 2,
            }} variant="outlined" >
          Send
        </Button>
        

        {/* </div> */}
      </Box>
      <a className="gitHub-btn">
          <i class="fab fa-github"></i></a>
      <a className="linkedIn-btn">
          <i class="fab fa-linkedin"></i></a>
      <a className="slack-btn">
          <i class="fab fa-slack"></i></a>
      
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
