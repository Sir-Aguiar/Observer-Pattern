import { Observer, Subject } from "../@types/Shapes";
import ConcreteSubject from './ConcreteSubject';

export default class ConcreteObserverA implements Observer {
	public update(subject: Subject): void {
		// It only reacts if the data change as it matters to him
		if (subject instanceof ConcreteSubject && subject.data < 3) {
			console.log("ConcreteObserverA: Reacted to the event.");
		}
	}
}