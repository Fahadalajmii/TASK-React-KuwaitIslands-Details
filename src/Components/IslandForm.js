import React, { useState } from "react";

export default function IslandForm({ island }) {
  const [name, setName] = useState("");
  const [numb, setNumb] = useState();
  const changeNumber = (event) => {
    let phoneNumb = event.target.value;
    phoneNumb = parseInt(phoneNumb);
    setNumb(phoneNumb);
  };
  const changeName = (event) => {
    let value = event.target.value;
    setName(value);
  };
  const contactInfo = () => {
    window.confirm(
      `Do you want to confirm your visit to ${island.name} under these information ${name} and ${numb}`
    );
  };
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input onChange={changeName} placeholder="Type Full Name" />
      <input
        onChange={changeNumber}
        type="tel"
        placeholder="Type Phone Number"
      />
      <button className="book" onClick={contactInfo}>
        Book for today!
      </button>
    </div>
  );
}
