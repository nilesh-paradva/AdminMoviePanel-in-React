const initialState = {
    admins: [],
    admin: null,
    isSignIn: false,
    isSignUp: false,
    isLoading: false,
    isCreated: false
    // isSignOut : false
};

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNUP":
            return { ...state, isSignUp: true, isLoading: false, isCreated: true }

        case "SIGNIN":
            return { ...state, admin: action.payload, isSignIn: true, isLoading: false, isCreated: false }

        case "LOGINUSERGATE":
            return { ...state, admins: action.payload, isSignIn: false, isLoading: false, isCreated: false }

        // case "GET_ADMIN_SUCCESS":
        //     return { ...state, admin: action.payload };

        // case "UPDATE_PROFILE_SUCCESS":
        //     return { ...state, admins: action.payload };

        case "SIGNUPBACK":
            return { ...state, isSignUp: false, isLoading: false, isCreated: false, isSignIn: false }

        case "SIGNOUT":
            return { ...state, admin: null, isSignIn: false, isSignUp: false }

        case "LOADING":
            return { ...state, isLoading: true }

        default:
            return state;
    }
}