import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import EmployeeData from "../components/EmployeeData";
import Search from "../components/Search";
import { MdDelete } from "react-icons/md";
import Pagenation from "../components/Pagenation";
const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [allSelect, setAllSelect] = useState(false);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data?.slice(firstIndex, lastIndex);
  const total_pages = Math.ceil(data.length / recordsPerPage);
  const pageNumbers = [...Array(total_pages + 1).keys()].slice(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const allSelected = data
      .slice(firstIndex, lastIndex)
      .every((item) => selectedRecords.includes(item.id));
    setAllSelect(allSelected);
  }, [currentPage, data, selectedRecords, firstIndex, lastIndex]);

  const handleCurrentPageChange = (value) => {
    setCurrentpage(value);
  };
  const handleSelectedRecords = (key) => {
    if (selectedRecords.includes(key)) {
      const newSet = selectedRecords.filter((keys) => keys != key);
      setSelectedRecords(newSet);
    } else setSelectedRecords((prev) => [...prev, key]);
  };
  const handleBulkDelete = () => {
    if (selectedRecords.length == 0)
      alert("select atleast one record to delete");
    else {
      const filteredData = data.filter(
        (user) => !selectedRecords.includes(user.id)
      );
      setData(filteredData);
      setSelectedRecords([]);
      alert("successfully deleted");
    }
  };
  const handleDeleteOne = (key) => {
    const newData = data.filter((user) => user.id != key);
    setData(newData);
    alert("Successfully deleted one record");
  };
  const handleSearch = (searchfield) => {
    const filteredData = data.filter((user) =>
      Object.values(user).some((fieldValue) =>
        fieldValue.toLowerCase().includes(searchfield.toLowerCase())
      )
    );
    setData(filteredData);
  };
  const handleEditRow = (newData) => {
    const updatedData = data.map((user) =>
      user.id === newData.id ? newData : user
    );

    setData(updatedData);
  };
  const handleSelectAll = () => {
    if (selectedRecords.length) setSelectedRecords([]);
    else {
      const allIds = records.map((user) => user.id);
      setSelectedRecords(allIds);
    }
  };
  return (
    <div>
      <div>
        <h1 style={{ color: "navy" }}>Employee data</h1>
      </div>
      <div style={{ margin: "2%" }}>
        <div
          className="d-flex flex-row justify-content-between"
          style={{ margin: "0 1%" }}
        >
          <div>
            <Search handleSearch={handleSearch} />
          </div>
          <div onClick={handleBulkDelete} style={{ cursor: "pointer" }}>
            <button
              type="button"
              class="btn btn-transparent"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Delete Items In Bulk"
            >
              <MdDelete color="red" size={40} />
            </button>
          </div>
        </div>
        <div>
          <EmployeeData
            data={records}
            handleDeleteOne={handleDeleteOne}
            handleSelectedRecords={handleSelectedRecords}
            selectedRecords={selectedRecords}
            handleEditRow={handleEditRow}
            handleSelectAll={handleSelectAll}
            currentPage={currentPage}
            allSelect={allSelect}
          />
        </div>
      </div>
      <div>
        <Pagenation
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          handleCurrentPageChange={handleCurrentPageChange}
          total_pages={total_pages}
        />
      </div>
    </div>
  );
};

export default Home;
