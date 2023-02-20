import Subject from './classes/Subject';
import Observer from './classes/Observer';
const subject = new Subject()

const observerOne = new Observer(1);
const observerTwo = new Observer(2);

subject.subscribe(observerOne)
subject.subscribe(observerTwo)

subject.notifyAll()