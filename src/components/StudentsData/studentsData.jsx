import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import axios from "axios";
import "./studentsData.css";
import Modal from "../../Framework/Modal/Modal";

function StudentsData() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [studentListGridApi, setStudentListGridApi] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/comments"
  //       );
  //       setStudentData(response.data);
  //     } catch (errror) {
  //       console.error(Error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  const columnDefs = [
    { headerName: "Sr. No.", field: "#", width: 80, valueGetter: "node.rowIndex + 1" },
    { headerName: "Name", field: "name", width: 200,floatingFilter: true },
    { headerName: "Email", field: "email", width: 200 ,floatingFilter: true},
    { headerName: "Body", field: "body", width: 200 ,floatingFilter: true},
  ];

  const rowData = [
    { name: "sreejith", email: "sreejith@gmail.com", body: "React developer" },
    { name: "ajith", email: "aajith@gmail.com", body: "Js developer" },
    { name: "ram", email: "ram@gmail.com", body: "Java developer" },
    { name: "vikash", email: "vikash@gmail.com", body: "Python developer" },
  ];
  const defaultColDef = {
    sortable: true,
    flex: 1,
    filter: true,
    editable: true,
  };

  const onStudentListGridReady = (params) => {
    setStudentListGridApi(params.api);
    console.log(params.api);
  };

  const UpdatestudentData = (data) => {
    let OldData = studentData;
    OldData.unshift(data);
    setStudentData(OldData);
    if (studentListGridApi) {
      studentListGridApi.setRowData(studentData);
    }
  };

  // const UpdateStatusFunc = () => {
  //   let OldData = studentData;
  //   OldData[rowIndex].ActiveStatus = type === "ACTIVE" ? "YES" : "NO";
  //   setStudentData([]);
  //   setStudentData(OldData);
  //   if (studentListGridApi) {
  //     studentListGridApi.setRowData(studentData);
  //   }
  // };

  return (
    <div className="StudentsData">
      <div className="head">
        <h2>Student Details</h2>
        <button
          className="btn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Add +
        </button>

        {modalOpen && (
          <Modal
            setOpenModal={setModalOpen}
            UpdatestudentData={UpdatestudentData}
          />
        )}
      </div>

      <div className="ag-theme-alpine" style={{ height: "600px" }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          onGridReady={onStudentListGridReady}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default StudentsData;
