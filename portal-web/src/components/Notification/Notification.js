import React from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import NotificationDetail from "./NotificationDetail/NotificationDetail";
import "./Notification.css";

const Notification = (props) => {
  return (
    <>
      <Offcanvas
        direction="end"
        fade={true}
        isOpen={props.showNotification}
        toggle={function noRefCheck() {}}
      >
        <OffcanvasHeader
          toggle={function noRefCheck() {
            props.closeNotification();
          }}
        >
          Notifications
        </OffcanvasHeader>
        <OffcanvasBody>
          <NotificationDetail markAsReadNotification={props.markAsReadNotification} notificationData={props.notificationData} />
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default Notification;
