import Dispatcher from './Dispatcher';
import EventEmitter from 'EventEmitter';
//It's represents a private variable that can't be access from outside
let tally = {
    count: 0
};
//---------------------------------------------------------------------

//Private mutation methods that modify the application's internal state
//This functions should not be used outside of this file
const increment = () => {
    tally.count += 1;
};

const decrement = () => {
    tally.count -= 1;
};

const zero = () => {
    tally.count = 0;
};
//---------------------------------------------------------------------

//handleAction function will receive an action and will call the right function
const handleAction = (action) => {
    switch (action.type) {
        case "INCREMENT":
            increment();
            break;
        case "DECREMENT":
            decrement();
            break;
        case "ZERO":
            zero();
            break;
        default:
    }
    instance.emitChange();
};

Dispatcher.register(handleAction);

class TallyStore extends EventEmitter {
    //Return a copy of the store to avoid de mutations
    getTally() {
        return Object.assign({}, tally);
    }
    addChangeListener(callback) {
        this.addListener('CHANGE', callback);
    }
    removeChangeListener(callback) {
        this.removeListener('CHANGE', callback);
    }
    emitChange() {
        this.emit('CHANGE');
    }
}

const instance = new TallyStore();
export default instance;