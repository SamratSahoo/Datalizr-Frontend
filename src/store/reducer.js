const initialState = {
  authenticated:
    localStorage.getItem("authenticated") == null
      ? false
      : localStorage.getItem("authenticated"),
  id: localStorage.getItem("id") == null ? null : localStorage.getItem("id"),
  username:
    localStorage.getItem("username") == null
      ? null
      : localStorage.getItem("username"),
};

const reducer = (state = initialState, action = "") => {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      localStorage.setItem("authenticated", action.payload.success);
      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("username", action.payload.username);
      return {
        ...state,
        authenticated: action.payload.success,
        id: action.payload.id,
        username: action.payload.username,
      };
    case "LOGOUT":
      localStorage.removeItem("authenticated");
      localStorage.removeItem("id");
      localStorage.removeItem("username");
      return initialState;
    case "CHANGE_USERNAME":
      localStorage.setItem("username", action.newUser);
      return {
        ...state,
        username: action.newUser,
      };
    default:
      return state;
  }
};

export default reducer;
