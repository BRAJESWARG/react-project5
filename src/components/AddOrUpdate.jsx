import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContextStudentsData } from "./StudentData";

const AddOrUpdateData = () => {
  const [data, setData] = useContext(ContextStudentsData);
  const { id } = useParams();
  let navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
    id: ""
  });

  useEffect(() => {
    data.forEach((item) => {
      if (item.id === id) {
        setDetails({
          name: item.name,
          age: item.age,
          course: item.course,
          batch: item.batch
        });
      }
    });
  }, [data.id]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.name === "") {
      alert("Name is Required");
    } else {
      if (id === undefined) {
        let newDetails = { ...details, id: new Date().getTime().toString() };
        setData([...data, newDetails]);
      } else {
        setData((prevState) =>
          prevState.map((student) =>
            student.id === id
              ? {
                  id: id,
                  name: details.name,
                  age: details.age,
                  course: details.course,
                  batch: details.batch
                }
              : student
          )
        );
      }
    }
    navigate("/students");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputRow">
          <TextField
            label="Name"
            variant="outlined"
            margin="dense"
            id="name"
            type="text"
            name="name"
            required
            value={details.name}
            onChange={handleChange}
            className=""
          />
          <TextField
            label="Age"
            variant="outlined"
            margin="dense"
            id="age"
            type="number"
            name="age"
            required
            value={details.age}
            onChange={handleChange}
            className=""
          />
        </div>
        <div className="inputRow">
          <TextField
            label="Course"
            variant="outlined"
            margin="dense"
            id="course"
            type="text"
            name="course"
            required
            value={details.course}
            onChange={handleChange}
            className=""
          />
          <TextField
            label="Batch"
            variant="outlined"
            margin="dense"
            id="batch"
            type="text"
            name="batch"
            required
            value={details.batch}
            onChange={handleChange}
            className=""
          />
        </div>
        <div className="">
          {" "}
          <button type="submit" className="button">
            Update
          </button>
          <Link to="../Students" className="">
            <button className="button">Cancel</button>
          </Link>
          
        </div>
      </form>
    </Box>
  );
};

export default AddOrUpdateData;
