import { ObserverShape, SubjectShape } from "../@types/Shapes";
import Video from "./video";

export default class VideoNotification implements SubjectShape {
	private observers: ObserverShape[] = [];
	constructor(public video: Video) {}
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
		observer.update(this.video);
	}
	notifyAll(): void {
		this.observers.forEach((observer) => {
			this.notify(observer);
		});
	}
}
