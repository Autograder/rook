import createDataContext from './createDataContext';

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'signin':
            return { ...state, userId: action.payload };
        case 'signout':
            return { ...state, userId: '' };
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

const signup = (dispatch: any) => (id: any) => {
    // on successful signup OR make api call here to sign up
    // set the userId
    dispatch({type: 'signin', payload: id});
    localStorage.setItem('userId', id);
};

const signin = (dispatch: any) => (id: any) => {
    // on successful signin OR make api call here to sign in
    // set the userId
    dispatch({type: 'signin', payload: id});
    localStorage.setItem('userId', id);
};

const signout = (dispatch: any) => () => {
    // remove the userId from the state
    dispatch({type: 'signout'});
    localStorage.removeItem('userId');
};

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
    { signup, signin, signout, changecourse, setCourseList },
    { userId: '2',//localStorage.getItem('userId') || '', 
    courseId: '1',//localStorage.getItem('courseId') || '',
    queueId: '1',//localStorage.getItem('queueId') || '',
    role: localStorage.getItem('role') || '',
    courseList: localStorage.getItem('coureList') || []
     }
);