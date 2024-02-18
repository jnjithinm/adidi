// import { createContext } from 'react';
import createContext from 'context/createContext';
import api from 'api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate, reset } from 'utils/helpers/navigationHelper';
import jwtDecode from 'jwt-decode';

import crashlytics from '@react-native-firebase/crashlytics';
// import routes from '../navigators/routes';
// import sendLog, { analyticEvents, logTypes } from '../utils/AppLogger';
import env from 'react-native-config';

const { BRANCH_ADD_SCREEN_ENABLED } = env;

interface AuthState {
  token: string | null;
  errorMessage: string | null;
  user: any | null;
  loading: boolean;
}

type AuthAction =
  | { type: 'add_error'; payload: string }
  | { type: 'signin' | 'sendOTP' | 'verifyOTP' | 'renewToken'; payload: string }
  | { type: 'clear_error_message' }
  | { type: 'add_business_to_userData' | 'update_business_data'; payload: any }
  | { type: 'getUser'; payload: any }
  | { type: 'saveUser'; payload: any }
  | { type: 'signout' }
  | { type: 'loading'; payload: boolean };

  type SendOTPRequest= {
    email: string;
    mobile: string;
    forgotPassword: boolean;
    mobileCode: string;
  }

  type VerifyOTPRequest={
    email: string;
    mobile: string;
    otp: string;
    isForgotPassword: boolean;
    mobileCode: string;
  }

  type SignInRequest={ email?: string; mobile?: string; password: string }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { ...state, errorMessage: '', token: action.payload };
    case 'sendOTP':
      return { ...state, errorMessage: '', token: action.payload };
    case 'verifyOTP':
      return { ...state, errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'add_business_to_userData':
      let businesses = state.user?.user?.businesses || [];
      businesses = [...businesses, action.payload];
      let userNew = state.user.user;
      userNew.businesses = businesses;
      return {
        ...state,
        user: { user: userNew },
      };
    case 'update_business_data':
      let businessArray = state.user?.user?.businesses;
      if (businessArray) {
        businessArray[0] = action.payload;
        return {
          ...state,
          user: {
            user: {
              ...state.user.user,
              businesses: businessArray,
            },
          },
        };
      }
      return state;
    case 'getUser':
      return { ...state, errorMessage: '', user: action.payload };
    case 'saveUser':
      let userData = { ...state.user.user, ...action.payload };
      return { ...state, errorMessage: '', user: { user: userData } };
    case 'renewToken':
      return { ...state, errorMessage: '', token: action.payload };
    case 'signout':
      return { ...state, token: null, errorMessage: '', user: null };
    case 'loading':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const addError = (dispatch: React.Dispatch<AuthAction>) => (error: string) =>
  dispatch({ type: 'add_error', payload: error });

const clearErrorMessage = (dispatch: React.Dispatch<AuthAction>) => () =>
  dispatch({ type: 'clear_error_message' });

const setLoad = (dispatch: React.Dispatch<AuthAction>) => (state: boolean) =>
  dispatch({ type: 'loading', payload: state });

const addNewBusinessToUser = (dispatch: React.Dispatch<AuthAction>) => (data: any) =>
  dispatch({ type: 'add_business_to_userData', payload: data });

const updateBusiness = (dispatch: React.Dispatch<AuthAction>) => (data: any) =>
  dispatch({ type: 'update_business_data', payload: data });

const sendOTP = (dispatch: React.Dispatch<AuthAction>) => async (payload: SendOTPRequest)  => {
  const { email, mobile, forgotPassword, mobileCode } = payload;

  setLoad(dispatch)(true);
  try {
    const res = await api.post('/auth/send-otp', {
      email,
      mobile,
      mobileCode,
    });
    if (res.data.data.success === true) {
      // sendLog({
      //   type: logTypes.analytics,
      //   event: analyticEvents.sendOTP,
      //   email,
      //   mobile,
      // });
      setLoad(dispatch)(false);
      navigate('Home', { email, mobile, forgotPassword, mobileCode });
    } else {
      dispatch({ type: 'add_error', payload: 'Something went wrong...' });
    }
  } catch (error) {
    // sendLog({ type: logTypes.error, error });
    setLoad(dispatch)(false);
    dispatch({ type: 'add_error', payload: 'Something went wrong...' });
  }
};

const resendOTP = (dispatch: React.Dispatch<AuthAction>) =>  async (payload: SendOTPRequest)  => {
  const { email, mobile, forgotPassword, mobileCode } = payload;
  try {
    const res = await api.post('/auth/resend-otp', {
      email,
      mobile,
      mobileCode,
    });
    if (res.data.data.success == true) {
      // sendLog({
      //   type: logTypes.analytics,
      //   event: analyticEvents.sendOTP,
      //   email,
      //   mobile,
      // });
      setLoad(dispatch)(false);
    } else {
      dispatch({ type: 'add_error', payload: 'Something went wrong...' });
    }
  } catch (error) {
    // sendLog({ type: logTypes.error, error });
    setLoad(dispatch)(false);
    dispatch({ type: 'add_error', payload: 'Something went wrong...' });
  }
};

const verifyOTP = (dispatch: React.Dispatch<AuthAction>) =>  async (payload: VerifyOTPRequest)  => {
  const { email, mobile, otp, mobileCode } = payload;
  setLoad(dispatch)(true);
  try {
    const response = await api.post('/auth/verify-otp', {
      email,
      mobile,
      otp,
      mobileCode,
    });
    let token = response.data.data.accessToken;
    if (!token) {
      // sendLog({
      //   type: logTypes.analytics,
      //   event: analyticEvents.signin,
      //   email,
      //   mobile,
      // });
      dispatch({ type: 'add_error', payload: 'Something went wrong' });
      throw new Error('Something went wrong');
    }
    setLoad(dispatch)(false);
    //***** Be careful always give Bearer while setting token */
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    let refreshToken = response.data.data.refreshToken;

    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('refreshToken', refreshToken);

    // dispatch({ type: 'signin', payload: token })
    const decodedToken = jwtDecode(token);
    // console.log(data)
    // console.log(decodedToken)
    const id = decodedToken.id;

    const data = await getUser(dispatch)();
    // if (isForgotPassword) {
    //   console.log('Reset Password requested');
    //   // reset('');
    // }
    if (data.isNewUser) {
      // reset(routes.AddUserDetails);
    } else if (data.user.businesses.length == 0) {
      // reset(routes.AddBusiness);
    } else if (
      data.user.businesses[0].branches.length == 0 &&
      +(BRANCH_ADD_SCREEN_ENABLED ||'')
    ) {
      // reset(routes.AddBranch, { businessId: data.user.businesses[0]._id });
    } else {
      // reset(routes.Main);
    }

    /* if you have to use someting in then return that part value so u can call getUser with id  */
    return id;
    // if (id) {

    //     // await getUser(dispatch)(id)
    //     dispatch({ type: 'signin', payload: token })
    // }else{
    //     console.log(response.data)
    //     dispatch({ type: 'add_error', payload: "Something went wrong" })
    // }

    // //check new use or not
    // if (response.data.isNewUser) {
    //     await AsyncStorage.setItem('isNewUser', true)
    //     navigate('AddUserDetails')
    // }else{
    //     await AsyncStorage.setItem('isNewUser', false)
    // }
  } catch (error:any) {
    // console.log('Error response', error.response.data);
    // sendLog({ type: logTypes.error, error });
    dispatch({ type: 'add_error', payload: 'Invalid Otp' });
    setLoad(dispatch)(false);
    throw error.response.data.error;
  }
};
const signIn = (dispatch: React.Dispatch<AuthAction>) => async (payload: SignInRequest) => {
  const { email, mobile, password } = payload;
  setLoad(dispatch)(true);
  try {
    const response = await api.post('/auth/login-password', {
      email,
      mobile,
      password,
    });
    let token = response.data.accessToken;
    let refreshToken = response.data.refreshToken;
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('refreshToken', refreshToken);
    dispatch({ type: 'signin', payload: token });
    const decodedToken = jwtDecode(token);
    const id = decodedToken.id;

    if (id) {
      setLoad(dispatch)(false);
      // await getUser(dispatch)()
      //   .then(() => reset(routes.Main))
      //   .catch(() => reset(routes.Auth));
    }
  } catch (error) {
    setLoad(dispatch)(false);
    // sendLog({ type: logTypes.error, error });
  }
};
// Get user details
const getUser = (dispatch: React.Dispatch<AuthAction>) => async () => {
  try {
    const response = await api.get('/user');
    let data = response.data.data;
    onSignIn(data).catch(() => { }).then(() => { });
    dispatch({ type: 'getUser', payload: data });

    return Promise.resolve(data);
  } catch (err) {
    // sendLog({ type: logTypes.error, error: err });
    dispatch({
      type: 'add_error',
      payload: 'Already, signed in to another device!',
    });
    dispatch({ type: 'signout' });
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('refreshToken');
    return Promise.reject(new Error('Something went wrong'));
  }
};

// Save user details
const saveUser = (dispatch: React.Dispatch<AuthAction>) => async (params: any) => {
  setLoad(dispatch)(true);
  try {
    const response = await api.put('/user/user-details', params);
    let data = response.data.data;
    // sendLog({ type: logTypes.analytics, event: analyticEvents.updateUser });
    dispatch({ type: 'saveUser', payload: params });
    setLoad(dispatch)(false);
  } catch (error) {
    // sendLog({ type: logTypes.error, error });
    setLoad(dispatch)(false);
    throw new Error('Something went wrong');
  }
};

const tryLocalSignIn = (dispatch: React.Dispatch<AuthAction>) => async () => {
  const token = await AsyncStorage.getItem('token');

  if (!token) {
    console.log('no token, authenticate ...');
    return Promise.reject(new Error('No Token'));
  }
  const decodedToken = jwtDecode(token);
  const id = decodedToken.id;

  if (decodedToken.exp * 1000 < Date.now()) {
    console.log('Token expired! renewing...');
    renewToken(dispatch)()
      .then(() => {
        return Promise.resolve(id);
      })
      .catch(() => {
        console.log('Auto logout');
        // sendLog({
        //   type: logTypes.analytics,
        //   event: analyticEvents.autoLogout,
        // });
        return Promise.reject();
      });
  } else {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    dispatch({ type: 'signin', payload: token });

    if (id) {
      // sendLog({
      //   type: logTypes.analytics,
      //   event: analyticEvents.localSingIn,
      // });
      console.log('calling get user..');
      return Promise.resolve(id);
    }
  }
};

const renewToken = (dispatch: React.Dispatch<AuthAction>) => async () => {
  console.log('Inside refresh token');
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await api.post('/auth/refresh-token', {
      refreshToken,
    });
    // sendLog({ type: logTypes.analytics, event: analyticEvents.renewToken });
    let newToken = response.data.accessToken;
    let newRefreshToken = response.data.refreshToken;
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    await AsyncStorage.setItem('token', newToken);
    await AsyncStorage.setItem('refreshToken', newRefreshToken);

    dispatch({ type: 'renewToken', payload: data });
    return;
  } catch (error:any) {
    // sendLog({ type: logTypes.error, error });
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('refreshToken');
    dispatch({ type: 'signout' });
    // navigate(routes.Auth, { screen: 'Signup' });
    throw new Error('Something went wrong');
  }
};

const signout = (dispatch: React.Dispatch<AuthAction>) => async () => {
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('refreshToken');
    dispatch({ type: 'signout' });
    // reset('SignIn', { screen: routes.Signup });
  } catch (error) {
    // sendLog({ type: logTypes.error, error });
  }
};

async function onSignIn(user: any) {
  // sendLog({ type: logTypes.analytics, event: analyticEvents.login });
  await Promise.all([
    crashlytics().setUserId(user.user._id),
    crashlytics().setAttributes({
      isNewUser: String(user.isNewUser),
      email: user.user.email,
      mobile: String(user.user.mobile),
      userFirstName: user.user.firstName,
      userLastName: user.user.lastName,
    }),
  ]);
}

export const { Provider, Context } = createContext(
  authReducer,
  {
    signIn,
    signout,
    addError,
    verifyOTP,
    clearErrorMessage,
    tryLocalSignIn,
    sendOTP,
    resendOTP,
    getUser,
    saveUser,
    addNewBusinessToUser,
    updateBusiness,
},
  { token: null, errorMessage: null, user: null, loading: false }
);
