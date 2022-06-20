export const getDate = (date) => {
    let uiDate;
    if (date) {
        uiDate = `${new Date(date).getDate()}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}`;
        return uiDate;
    }
    return false;
}

export const setUserName = (username) => {
    return localStorage.setItem('username', username);
}

export const getUserName = () => {
    return localStorage.getItem("username");
}

export const removeUserName = () => {
    return localStorage.removeItem('username');;
}