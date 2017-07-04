import Dispatcher from './Dispatcher';
//1.- Action Creators, each function creates an Action
export const increment = () => {
    const action = {//Action
        type: "INCREMENT"
    };
    Dispatcher.dispatch(action);
};

export const decrement = () => {
    const action = {//Action
        type: "DECREMENT"
    };
    Dispatcher.dispatch(action);
};

export const zero = () => {
    const action = {//Action
        type: "ZERO"
    };
    Dispatcher.dispatch(action);
};