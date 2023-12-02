import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const EmployeeData = ({
  data,
  handleDeleteOne,
  handleSelectedRecords,
  selectedRecords,
  handleEditRow,
  handleSelectAll,
  currentPage,
  allSelect,
}) => {
  const [editedData, setEditedData] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
  });

  const handleEdditedData = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleEditButton = (item) => {
    setEditedData({
      id: item.id,
      name: item.name,
      email: item.email,
      role: item.role,
    });
  };

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
                  onClick={handleSelectAll}
                  key={currentPage}
                  checked={allSelect}
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
                  <td>
                    {editedData.id === item.id ? (
                      <div className="form-check">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          value={editedData.name}
                          onChange={handleEdditedData}
                        />
                      </div>
                    ) : (
                      item.name
                    )}
                  </td>
                  <td>
                    {editedData.id === item.id ? (
                      <div className="form-check">
                        <input
                          className="form-control"
                          type="text"
                          name="email"
                          value={editedData.email}
                          onChange={handleEdditedData}
                        />
                      </div>
                    ) : (
                      item.email
                    )}
                  </td>
                  <td>
                    {editedData.id === item.id ? (
                      <div className="form-check">
                        <input
                          className="form-control"
                          type="text"
                          name="role"
                          value={editedData.email}
                          onChange={handleEdditedData}
                        />
                      </div>
                    ) : (
                      item.role
                    )}
                  </td>
                  <td>
                    <div className="d-flex flex-row justify-content-around">
                      <div style={{ cursor: "pointer" }}>
                        {editedData.id != item.id ? (
                          <FaRegEdit
                            size={18}
                            onClick={() => handleEditButton(item)}
                          />
                        ) : (
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              handleEditRow(editedData);
                              setEditedData("");
                            }}
                          >
                            Save
                          </button>
                        )}
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
