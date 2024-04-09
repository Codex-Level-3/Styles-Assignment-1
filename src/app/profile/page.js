"use client";

import { useState } from "react";
import UserProfile from "../UserProfile";
import Navbar from "../Navbar";

export default function Profile() {
  const [name, setName] = useState("Spongebob");
  const [biography, setBiography] = useState("Krusty Krab fry cook");
  const [hobbies, setHobbies] = useState([
    "Jellyfishing",
    "Blowing bubbles",
    "Karate",
  ]);

  return (
    <div>
      <Navbar />
      <h1>User Profile</h1>
      <UserProfile name={name} biography={biography} hobbies={hobbies} />
    </div>
  );
}
