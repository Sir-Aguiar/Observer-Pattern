import { ObserverShape } from "../@types/Shapes";
import Video from "./video";

export default class Feed implements ObserverShape {
	constructor(public channel_id: string) {}
	update(video: Video): void {
		console.log(`Novo vídeo adicionado ao feed: ${video.title}`);
		console.log(`Olhe só isso aqui: ${video.link}`);
	}
}
