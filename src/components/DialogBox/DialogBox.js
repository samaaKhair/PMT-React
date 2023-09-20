import React, { useState } from "react";
import "./DialogBox.css";
import Alert from "../alert/alert";

const DialogBox = (props) => {
  const [message, setMessage]= useState([])
  const errorMessage = (errorsArr) => { 
    for (const id in errorsArr) {
      let error = document.getElementById(`${id}Err`);
      let message = errorsArr[id];
      setMessage({ message });
    }
  }
  const onClose =()=>{
    props.onDialogClose();
    setMessage("")
  }
  const updateData =()=>{
    props.onUpdata(props.selectedUser.id);
    // errorMessage(props.errors);
   setMessage(props.errors.name);
  }
  return (
    <dialog className={props.dialogType} open={props.dialogStatus}>
      <div className="wrapperDiv">
        <div className="mainDailog">
          <h2 className="heading">User Info</h2>
          {/* Name Cell */}

          <label htmlFor="name">Name</label>
          <input
            onChange={props.onChange}
            id="name"
            value={props.selectedUser.name}
          />
          <Alert id="nameErr" message={message} />
          {/* Phone Cell */}
          <label htmlFor="phone">Phone</label>
          <input
            onChange={props.onChange}
            id="phone"
            value={props.selectedUser.phone}
          />
          <Alert id="phoneErr" />
          {/* Pop name */}
          <label htmlFor="pop_name">Pop Name</label>
          <input
            onChange={props.onChange}
            id="pop_name"
            value={props.selectedUser.pop_name}
          />
          <Alert id="pop_nameErr" />
          {/* hostname cell */}
          <label htmlFor="dslam_hostname">Hostname</label>
          <input
            onChange={props.onChange}
            id="dslam_hostname"
            value={props.selectedUser.dslam_hostname}
          />
          <Alert id="dslam_hostnameErr" />
          {/* speed */}
          <label htmlFor="speed">Speed</label>
          <input
            onChange={props.onChange}
            id="speed"
            value={props.selectedUser.speed}
          />
          <Alert id="speedErr" />
          {/* attainable speed */}
          <label htmlFor="attainable_speed">Attainable Speed</label>
          <input
            onChange={props.onChange}
            id="attainable_speed"
            value={props.selectedUser.attainable_speed}
          />
          <Alert id="attainable_speedErr" />
          {/* frame */}
          <label htmlFor="frame">Frame</label>
          <input
            onChange={props.onChange}
            id="frame"
            value={props.selectedUser.frame}
          />

          <Alert id="frameErr" />

          {/* Update Buttons */}
          <div className="buttons">
            <button className="closeButton" onClick={onClose}>
              Close
            </button>
            <button className="updateButton" onClick={updateData}>
              Update
            </button>
            <button className="AddUserButton" onClick={props.onAddUser}>
              Add User
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default DialogBox;
