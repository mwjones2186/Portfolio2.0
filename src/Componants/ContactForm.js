import React, { useState } from "react";
// import "./style.css";
import { validateEmail } from "../utils/helpers";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button, SendIcon } from "@mui/material";
import Image from "mui-image";
import { links } from "./ButtonLinks";

export default function Form() {
  return (
    <Container>
      <Box
        className="contact-form-container"
        sx={{
          m: 2,
          width: 1,
          p: 2,
          boxShadow: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
        <Box
          sx={{
            m: 2,
            width: "70%",
            p: 2,
            boxShadow: 2,
            textAlign: "center",
          }}
        >
          <form
            target="_blank"
            action="https://formsubmit.co/mwjones2186@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_next" value="https://portfolio2-0-vjqg.vercel.app/thanks" />
            <TextField
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width: 100%"
              sx={{
                width: 1 / 2,
                boxShadow: 2,
              }}
              id="standard-basic"
              label="Full Name"
              variant="standard"
              name="name"
              required
            />

            {/* </div>
        <div className="contact-last"> */}
            <TextField
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width:100%"
              sx={{
                m: 1,
                width: 1 / 2,
                p: 1,
                boxShadow: 2,
              }}
              id="standard-basic"
              label="Email Address"
              variant="standard"
              name="email"
              required
            />
            {/* </div>
        <div className="contact-subject"> */}
            <TextField
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width: 100%"
              sx={{
                m: 1,
                width: 3 / 4,
                p: 1,
                boxShadow: 2,
              }}
              id="standard-basic"
              label="Subject"
              variant="standard"
              name="subject"
              required
            />
            {/* </div>
        <div className=""> */}
            <TextField
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width: 100%"
              id="standard-multiline-static"
              sx={{
                m: 1,
                width: 3 / 4,
                height: 200,
                p: 1,
                boxShadow: 2,
              }}
              multiline
              label="Message"
              rows={6}
              defaultValue=""
              variant="standard"
              name="message"
              required
            />
            {/* </div>
        <div> */}
            <Button
              type="submit"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width: 100%"
              sx={{
                m: 1,
                width: 1 / 4,
                height: 1 / 2,
                p: 1,
                boxShadow: 2,
              }}
              variant="outlined"
            >
              Send
            </Button>
          </form>
        </Box>

        {/* </div> */}
      </Box>
      <a className="gitHub-btn" href={links[0].github}>
        <i className="fab fa-github"></i>
      </a>
      <a className="linkedIn-btn" href={links[0].linkedIn}>
        <i className="fab fa-linkedin"></i>
      </a>
      <a className="slack-btn" href={links[0].facebook}>
        <i className="fab fa-facebook"></i>
      </a>
    </Container>
  );
}
