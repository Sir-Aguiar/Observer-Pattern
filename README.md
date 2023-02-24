# Observer-Pattern

```ts 
export default class ConcreteSubject implements Subject {
	public data: number = 0;
	private observers: Observer[] = [];

	public attach(observer: Observer) {
		const isSigned = this.observers.includes(observer);
		if (isSigned) {
			return console.log("The observer is already watching this subject");
		}
		this.observers.push(observer);
		console.log("Subject: Attached to an observer");
	}

	public detach(observer: Observer) {
		const observerIndex = this.observers.indexOf(observer);
		if (observerIndex < 0) {
			return console.log("Subject: Noneexistent observer");
		}
		this.observers.splice(observerIndex, 1);
		console.log("Subject: Detached and observer");
	}

	public notify() {
		console.log("Subject: Notifying observers...");
		for (const observer of this.observers) {
			observer.update(this);
		}
	}

	public someBusinessLogic(): void {
		console.log("\nSubject: I'm doing something important.");
		this.data = Math.floor(Math.random() * (10 + 1));

		console.log(`Subject: My data has just changed to: ${this.data}`);
		this.notify();
	}
}
```
