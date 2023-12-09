import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center">
      <form className="flex flex-col justify-center items-center">
        <div className="flex w-full space-x-4">
          <input
            id="firstName"
            name="firstName"
            placeholder="firstName"
            className="px-3 py-2"
          ></input>
          <input id="lastName" name="lastName" placeholder="lastName"></input>
        </div>

        <input id="email" name="email" placeholder="email"></input>
        <textarea placeholder="firstName"></textarea>
      </form>
    </div>
  );
};

export default Contact;
