import React from "react";
import "./DialogBox.css";
import Alert from "../Alert/Alert"

const DialogBox = (props) => {
  // Function to check if all input fields are valid
  const checkAllFieldsValidity = () => {
    const {
      name,
      phone,
      pop_name,
      dslam_hostname,
      speed,
      attainable_speed,
      frame,
    } = props.selectedUser;

    return (
      name.trim() !== "" &&
      phone.trim() !== "" &&
      pop_name.trim() !== "" &&
      dslam_hostname.trim() !== "" &&
      speed.trim() !== "" &&
      attainable_speed.toString().trim() !== "" &&
      frame.toString().trim() !== ""
    );
  };

  return (
    <dialog className={props.dialogType} open={props.dialogStatus}>
      <div className="wrapperDiv">
        <div className="mainDailog">
          <h2 className="heading">User Info</h2>
          {/* Name Cell */}
          <label htmlFor="name">
            Name<span className="required">*</span>
          </label>
          <input
            onChange={props.onChange}
            id="name"
            value={props.selectedUser.name}
          />

          {/* Phone Cell */}
          <label htmlFor="phone">
            Phone<span className="required">*</span>
          </label>
          <input
            onChange={props.onChange}
            id="phone"
            value={props.selectedUser.phone}
          />

          {/* Pop name */}
          <label htmlFor="pop_name">
            Pop Name<span className="required">*</span>
          </label>
          <input
            onChange={props.onChange}
            id="pop_name"
            value={props.selectedUser.pop_name}
          />

          {/* Hostname cell */}
          <label htmlFor="dslam_hostname">
            Hostname<span className="required">*</span>
          </label>
          <input
            onChange={props.onChange}
            id="dslam_hostname"
            value={props.selectedUser.dslam_hostname}
          />

          {/* Speed */}
          <label htmlFor="speed">
            Speed<span className="required">*</span>
          </label>
          <input
            onChange={props.onChange}
            id="speed"
            value={props.selectedUser.speed}
          />

          {/* Attainable Speed */}
          <label htmlFor="attainable_speed">
            Attainable Speed<span className="required">*</span>
          </label>
          <input
            onChange={props.onChange}
            id="attainable_speed"
            value={props.selectedUser.attainable_speed}
          />

          {/* Frame */}
          <label htmlFor="frame">
            Frame<span className="required">*</span>
          </label>
          <input
            onChange={props.onChange}
            id="frame"
            value={props.selectedUser.frame}
          />
          <Alert message={props.alertMessage} />
          {/* Update Buttons */}
          <div className="buttons">
            <button className="closeButton" onClick={props.onDialogClose}>
              Close
            </button>
            <button
              className="updateButton"
              onClick={() => props.onUpdata(props.selectedUser.id)}
              disabled={!checkAllFieldsValidity()}
            >
              Update
            </button>
            <button
              className="AddUserButton"
              onClick={() => props.onAddUser()}
              disabled={!checkAllFieldsValidity()}
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default DialogBox;
