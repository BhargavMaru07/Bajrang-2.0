import React from "react";
import emailjs from "@emailjs/browser";

export const sendEmail = (form) => {
  return emailjs
    .sendForm("service_n3jvm6t", "template_tswypsg", form.current, {
      publicKey: "Ppo9ovK6HMU3Q1SPh",
    })
    .then(
      () => {
        alert("Registration done! Check your email.");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};
