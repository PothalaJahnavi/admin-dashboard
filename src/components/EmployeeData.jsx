import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const EmployeeData = ({ data, handleDeleteOne, handleSelectedRecords,selectedRecords }) => {
  return (
    <div className="mx-auto" style={{ width: "100%", margin: "1% 5%" }}>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  style={{ border: "1px solid black" }}
                />
              </div>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <>
                <tr key={item.id}>
                  <td>
                    <div
                      className="form-check"
                      onClick={() => handleSelectedRecords(item.id)}
                    >
                      <input
                      key={item.id}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        style={{ border: "1px solid black" }}
                        checked={selectedRecords.includes(item.id)}
                      />
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <div className="d-flex flex-row justify-content-around">
                      <div style={{ cursor: "pointer" }}>
                        <FaRegEdit size={18} />
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDeleteOne(item.id)}
                      >
                        <MdDeleteOutline color="red" size={22} />
                      </div>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeData;
