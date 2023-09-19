import React from "react";
import "./DialogBox.css";

const DialogBox = (props) => {
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
          {/* Phone Cell */}
          <label htmlFor="phone">Phone</label>
          <input
            onChange={props.onChange}
            id="phone"
            value={props.selectedUser.phone}
          />
          {/* Pop name */}
          <label htmlFor="pop_name">Pop Name</label>
          <input
            onChange={props.onChange}
            id="pop_name"
            value={props.selectedUser.pop_name}
          />
          {/* hostname cell */}
          <label htmlFor="dslam_hostname">Hostname</label>
          <input
            onChange={props.onChange}
            id="dslam_hostname"
            value={props.selectedUser.dslam_hostname}
          />
          {/* speed */}
          <label htmlFor="speed">Speed</label>
          <input
            onChange={props.onChange}
            id="speed"
            value={props.selectedUser.speed}
          />
          {/* attainable speed */}
          <label htmlFor="attainable_speed">Attainable Speed</label>
          <input
            onChange={props.onChange}
            id="attainable_speed"
            value={props.selectedUser.attainable_speed}
          />
          {/* frame */}
          <label htmlFor="frame">Frame</label>
          <input
            onChange={props.onChange}
            id="frame"
            value={props.selectedUser.frame}
          />

          {/* Update Buttons */}
          <div className="buttons">
            <button className="closeButton" onClick={props.onDialogClose}>
              Close
            </button>
            <button
              className="updateButton"
              onClick={() => props.onUpdata(props.selectedUser.id)}
            >
              Update
            </button>
            <button className="AddUserButton" onClick={() => props.onAddUser()}>
              Add User
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default DialogBox;
