import { ObserverShape } from "../@types/Shapes";

export default class Observer implements ObserverShape {
	constructor(public readonly id: number) {}
	update(): void {
		console.log(`O Observer ${this.id} foi notificado`);
	}
}
