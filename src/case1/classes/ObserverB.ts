import { Observer, Subject } from "../@types/Shapes";
import ConcreteSubject from "./ConcreteSubject";

export default class ConcreteObserverB implements Observer {
	public update(subject: Subject): void {
		// It only reacts if the data change as it matters to him
		if (subject instanceof ConcreteSubject && (subject.data === 0 || subject.data >= 2)) {
			console.log("ConcreteObserverB: Reacted to the event.");
		}
	}
}
