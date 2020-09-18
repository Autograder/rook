import createDataContext from './createDataContext';
import { ActionImportantDevices } from 'material-ui/svg-icons';

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'signin':
            return { ...state, user: action.payload };
        case 'signout':
            return { ...state, user: '' };
        case 'updateuser':
            return { ...state, user: action.payload };
        case 'changecourse':
            return { ...state, courseId: action.payload };
        case 'changerole':
            return { ...state, role: action.payload };
        case 'setcourselist':
            return { ...state, courseList: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch: any) => (user: any) => {
    // on successful signup OR make api call here to sign up
    // set the user
    dispatch({type: 'signin', payload: user});
    localStorage.setItem('user', JSON.stringify(user));
};

const signin = (dispatch: any) => (user: any) => {
    // on successful signin OR make api call here to sign in
    // set the user
    dispatch({type: 'signin', payload: user});
    localStorage.setItem('user', JSON.stringify(user));
};

const signout = (dispatch: any) => () => {
    // remove the user from the state
    dispatch({type: 'signout'});
    localStorage.removeItem('user');
};

const updateuser = (dispatch: any) => (user: any) => {
    // user updates their profile
    dispatch({type: 'updateuser', payload: user});
    localStorage.setItem('user', JSON.stringify(user));
}

const changecourse = (dispatch: any) => (course: any, role: any ) => {
    dispatch({ type: 'changecourse', payload: course });
    dispatch({ type: 'changerole', payload: role });
    localStorage.setItem('courseId', course);
    localStorage.setItem('role', role);
};

const setCourseList = (dispatch: any) => (list: any) => {
    dispatch({ type: 'setcourselist', payload: list });
    localStorage.setItem('courseList', list);
};

/* courseList: [
    { 
        courseId: ____,
        openTicket: t/f,
        role: ____
    }
] */

export const { Provider, Context } = createDataContext(
    reducer,
    { signup, signin, signout, updateuser, changecourse, setCourseList },
    {   user: JSON.parse(localStorage.getItem('user')) || '', 
        courseId: localStorage.getItem('courseId') || '', 
        role: localStorage.getItem('role') || '',
        courseList: localStorage.getItem('courseList') || []
    }
);