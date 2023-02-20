import { ObserverShape } from "../@types/Shapes";
import Video from "./video";

export default class Subscriber implements ObserverShape {
	constructor(public name: string, public readonly id: number) {}
	update(video: Video): void {
		console.log(`${this.name} veja! Vídeo novo de ${video.title} `);
	}
}
