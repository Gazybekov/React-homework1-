import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  let users = [
    {
      name: "Adilet",
      lastName: "Gazybekov",
      age: 21,
      id: 1,
    },
    {
      name: "Adilet",
      lastName: "Gazybekov",
      age: 21,
      id: 2,
    },
    {
      name: "Adilet",
      lastName: "Gazybekov",
      age: 21,
      id: 3,
    },
  ];
  return (
    <div>
      <Header />

      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
