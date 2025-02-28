const apis = () => {
    const local = 'http://localhost:5000/';

    const list = {
        registerUser: `${local}register`,
        loginUser: `${local}login`,
        forgetPass: `${local}forgetPassword`,
        verifyOtp: `${local}verifyotp`,
        verifyTime: `${local}verifyTime`,
    }

    return list;
}

export default apis