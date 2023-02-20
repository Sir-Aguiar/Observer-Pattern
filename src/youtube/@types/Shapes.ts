import Video from "../classes/video";
interface ObserverShape {
	update(video: Video): void;
}
interface SubjectShape {
	subscribe(observer: ObserverShape): void;
	unsubscribe(observer: ObserverShape): void;
	notify(observer: ObserverShape): void;
	notifyAll(): void;
	unsubscribeAll(): void;
}

export { ObserverShape, SubjectShape };
