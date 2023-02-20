import ConcreteSubject from './classes/ConcreteSubject';
import ConcreteObserverA from './classes/ObserverA';
import ConcreteObserverB from './classes/ObserverB';

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
const observer2 = new ConcreteObserverB();

subject.attach(observer1);
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();