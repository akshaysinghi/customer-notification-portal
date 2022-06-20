import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Notification from "../components/Notification/Notification";
import { getUserName } from "../utils/util-service";
import { getNotificationCount, getNotificationDetail, postNotificationDetail} from "../utils/api-service";
import "./Home.css";

function Home() {
  const [username] = useState(getUserName());
  const [nonReadNotification, setNonReadNotification] = useState(0);
  const [show, setShow] = useState(false);
  const [notificationData, setNotificationData] = useState();
  useEffect(() => {
    fetchNotificationCountDetail(username);
  }, [username]);
  const fetchNotificationCountDetail = (username) => {
    getNotificationCount(username)
      .then((data) => {setNonReadNotification(data); setShow(false)})
      .catch((err) => console.log(err));
  };
  const handleShowNotification = () => {
    getNotificationDetail(username)
      .then((res) => {setShow(true); setNotificationData(res)})
      .catch((err) => console.log(err));
  }
  const closeNotification = () => {
    fetchNotificationCountDetail(username);
  }
  const markAsReadNotification = (notificationId) => {
    postNotificationDetail(notificationId)
      .then((res) => {if (res) { handleShowNotification();}})
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <NavBar nonReadNotification={nonReadNotification} username={username} handleShowNotification={handleShowNotification} />
      <Notification notificationData={notificationData} showNotification={show} closeNotification={closeNotification} markAsReadNotification={markAsReadNotification} />
    </div>
  );
}

export default Home;
