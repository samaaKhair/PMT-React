import React, { useState } from "react";
import axios from "axios";
import "./CustomersProfiles.css";
import DialogBox from "../DialogBox/DialogBox";
import "../DialogBox/DialogBox.css";
import { useEffect } from "react";

const CustomersProfiles = () => {
  useEffect(() => {
    // get all data
    getAllData();
  }, []);
  // Main URL
  const URL = "http://amanimagdi.pythonanywhere.com/profiles/";

  let [allData, setAllDatal] = useState([]); //state representing list of profiles
  const [dialogStatus, setDialogStatus] = useState(false); //Edit user pop-up dialog status (isOpen?)
  const [deleteDialogStatus, setDeleteDialogStatus] = useState(false); //Pop-up dialog status (isOpen?)
  const [dialogType, setDialogType] = useState(""); //Types: UpdateDialogBox, AddDialog
  const initialState = {
    name: "",
    phone: "",
    pop_name: "",
    dslam_hostname: "",
    speed: "",
    attainable_speed: "",
    frame: "",
  };
  let [selectedUser, setSelectedUser] = useState(initialState); //selected user to be updated

  // Get all data
  const getAllData = () => {
    axios
      .get(URL)
      .then((response) => setAllDatal(response.data))
      .catch((error) => {
        console.error(error);
      });
  };
  //PUT requests
  const onUserProfileChange = (id) => {
    axios
    .put(`${URL}/${id}/`, selectedUser).then((res) => {
      setDialogStatus(false);
      setSelectedUser(initialState); // Clear the selected user by setting it to an empty object
      getAllData(); // Call to refresh the data
    })
    .catch((error) => {
        console.error(error);
      });
  };
  //DELETE requests
  const onDeleteUserInfo = (Userid) => {
    setDeleteDialogStatus(false);
    axios
      .delete(`${URL}/${Userid}`)
      .then((response) => {
        setSelectedUser(initialState); // Clear the selected user by setting it to an empty object
        getAllData(); // Call to refresh the data
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //POST request
  const onAddUser = () => {
    setDialogStatus(false);
    axios
      .post(`${URL}`, selectedUser)
      .then(() => {
        setSelectedUser(initialState); // Clear the selected user by setting it to an empty object
        getAllData(); // Call to refresh the data
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //Handling input changes in edit/add user dialog boxes
  const handleInputChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.id]: e.target.value });
  };
  //Open edit user dialog box and passing to it selected user
  const openUpdateDialog = (user) => {
    setDialogStatus(true);
    setDialogType("updateDialogBox");
    setSelectedUser(user);
  };
  // Open Delete Dialog
  const openDeleteDialog = (user) => {
    setDeleteDialogStatus(true);
    setSelectedUser(user);
  };
  const openAddUserDialog = () => {
    setDialogType("addDialogBox");
    setDialogStatus(true);
  };
  const onDeleteDialogClose = () => {
    setDeleteDialogStatus(false);
    setSelectedUser(initialState); // Clear the selected user by setting it to an empty object
  };
  const onDialogClose = () => {
    setDialogStatus(false);
    setSelectedUser(initialState); // Clear the selected user by setting it to an empty object
  };

  return (
    <div className="mainTableDiv">
      <div className="Header">
        <h2 className="pageTitle">Users' profiles</h2>
        <button className="addUserIcon" onClick={openAddUserDialog}>
          <i className="fa fa-user-plus fa-lg" aria-hidden="true" />
          CREATE USER
        </button>
      </div>
      {/* Add New User popup dialog box */}
      <DialogBox
        dialogType={dialogType}
        dialogStatus={dialogStatus}
        onDialogClose={onDialogClose}
        onChange={handleInputChange}
        selectedUser={selectedUser}
        onAddUser={onAddUser}
        onUpdata={onUserProfileChange}
      />
      {/* Delete User popup dialog box */}
      <dialog className="deleteDialogBox" open={deleteDialogStatus}>
        <div className="DeleteWrapperDiv">
          <div className="deleteMainDailog">
            <h2>Are you sure you want to delete {selectedUser.name}?</h2>
            <div className="deleteButtons">
              <button
                className="yesButton"
                onClick={() => onDeleteUserInfo(selectedUser.id)}
              >
                Yes
              </button>
              <button className="noButton" onClick={onDeleteDialogClose}>
                No
              </button>
            </div>
          </div>
        </div>
      </dialog>
      {/* Users Table */}
      <table id="customers">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Pop Name</th>
            <th>Hostname </th>
            <th>Speed</th>
            <th>Attainable Speed</th>
            <th>Frame</th>
            <th>Actions</th>
          </tr>
          {allData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.pop_name}</td>
              <td>{user.dslam_hostname}</td>
              <td>{user.speed}</td>
              <td>{user.attainable_speed}</td>
              <td>{user.frame}</td>

              <td className="IconsColumn">
                <i
                  className="editIcon fa fa-pencil fa-lg"
                  aria-hidden="true"
                  onClick={() => openUpdateDialog(user)}
                ></i>
                <i
                  className="deleteIcon fa fa-trash fa-lg"
                  aria-hidden="true"
                  onClick={() => openDeleteDialog(user)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default CustomersProfiles;
