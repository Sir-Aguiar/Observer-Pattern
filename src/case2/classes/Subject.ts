import { ObserverShape, SubjectShape } from "../@types/Shapes";

export default class Subject implements SubjectShape {
	private observers: ObserverShape[] = [];
	subscribe(observer: ObserverShape): void {
		this.observers.push(observer);
	}
	unsubscribe(observer: ObserverShape): void {
		this.observers.filter((obs) => obs !== observer);
	}
	unsubscribeAll(): void {
		this.observers = [];
	}
	notify(observer: ObserverShape): void {
		observer.update();
	}
	notifyAll(): void {
		this.observers.forEach((observer) => {
			this.notify(observer);
		});
	}
}
