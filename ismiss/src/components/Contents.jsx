import Annoucements from "./Annoucements";
import { useState, useEffect } from "react";

// let list = [
//     {
//         id:1,
//         name: "Jasmin Owacan",
//         office: "OFFICE OF STUDENT FORMATION AND ACTIVITES",
//         toWho: "TO ALL NEW STUDENTS",
//         content: "Please be informed that you are allowed to wear your appropriate civilian attire until semptermber 20,2024",
//         imageUrl: "https://via.placeholder.com/600/92c952"
//     },
//     {
//         id:2,
//         name: "Jasmin Owacan",
//         office: "OFFICE OF STUDENT FORMATION AND ACTIVITES",
//         toWho: "TO ALL NEW STUDENTS",
//         content: "Please be informed that you are allowed to wear your appropriate civilian attire until semptermber 20,2024",
//         imageUrl: "https://via.placeholder.com/600/92c952"
//     },
//     {
//         id:3,
//         name: "Jasmin Owacan",
//         office: "OFFICE OF STUDENT FORMATION AND ACTIVITES",
//         toWho: "TO ALL NEW STUDENTS",
//         content: "Please be informed that you are allowed to wear your appropriate civilian attire until semptermber 20,2024",
//         imageUrl: "https://via.placeholder.com/600/92c952"
//     },
//     {
//         id:4,
//         name: "Jasmin Owacan",
//         office: "OFFICE OF STUDENT FORMATION AND ACTIVITES",
//         toWho: "TO ALL NEW STUDENTS",
//         content: "Please be informed that you are allowed to wear your appropriate civilian attire until semptermber 20,2024",
//         imageUrl: "https://via.placeholder.com/600/92c952"
//     }
// ]

const Contents = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        setAnnouncements(json);
      });
  }, []);

  return (
    <main className="mx-[20px]">
      <br />
      <div className="white">
        <h2 className="text-usc-green font-bold text-2xl">Academic Announcements</h2>
        <br />
        <Annoucements list={announcements} />
      </div>
    </main>
  );
};

export default Contents;
