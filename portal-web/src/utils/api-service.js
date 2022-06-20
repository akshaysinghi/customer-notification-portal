export const getNotificationCount = (username) => {
  return fetch(`/customer/${username}/notification-count`).then((result) => {
    return result.json();
  });
};


export const getNotificationDetail = (username) => {
  return fetch(`/customer/${username}/notifications`).then((result) => {
    return result.json();
  });
};

export const postNotificationDetail = (nId) => {
  return fetch(`/notification/${nId}/read`, {
    method: "POST",
  }).then((result) => {
    return result.json();
  });
};
