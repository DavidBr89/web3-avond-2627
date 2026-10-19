import React, { useState } from "react";

// const products = [
//   { id: 1, name: "Boek", isEnabled: true },
//   { id: 2, name: "Dvd", isEnabled: false },
// ];

const Form = () => {
  //   const [fName, setFName] = useState("");
  //   const [lName, setLName] = useState("");
  //   const [street, setStreet] = useState("");

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    street: "",
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [products, setProducts] = useState([
    { id: 1, name: "Boek", isEnabled: true },
    { id: 2, name: "Dvd", isEnabled: false },
    { id: 3, name: "Dvd", isEnabled: true },
  ]);

  const activeProducts = products.filter((p) => p.isEnabled);
  const fullName = `${firstName} ${lastName}`;

  return (
    <div>
      <p>{fullName}</p>
    </div>
  );
};

export default Form;
