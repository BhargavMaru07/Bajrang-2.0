const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_ADMIN_USERS":
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };

    case "SET_ADMIN_ONLY":
      const allUser = action.payload;
      const adminOnly = allUser.filter((user) => {
        return user.role === "ADMIN";
      });

      return {
        ...state,
        adminsInfo: adminOnly,
      };

    case "API_ERROR":
      return {
        ...state,
        isError: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
