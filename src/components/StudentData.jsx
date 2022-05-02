import React, { createContext, useState } from "react";

export const ContextStudentsData = createContext();

const StudentsData = (props) => {
  const [rows, setRows] = useState([
    { name: "John", age: 24, course: "MERN", batch: "October", id: "1" },
    { name: "Doe", age: 25, course: "MERN", batch: "November", id: "2" },
    { name: "Biden", age: 26, course: "MERN", batch: "October", id: "3" },
    { name: "Barar", age: 22, course: "MERN", batch: "September", id: "4" },
    { name: "Christ", age: 23, course: "MERN", batch: "October", id: "5" },
    { name: "Elent", age: 24, course: "MERN", batch: "November", id: "6" }
  ]);

  return (
    <ContextStudentsData.Provider value={[rows, setRows]}>
      {props.children}
    </ContextStudentsData.Provider>
  );
};

export default StudentsData;
