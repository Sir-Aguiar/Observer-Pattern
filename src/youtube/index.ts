import Video from "./classes/video";
import Subscriber from "./classes/subscriber";
import Feed from "./classes/feed";
import VideoNotification from "./classes/video_notification";

const video = new Video(
	"0Eub-aQs-44",
	"Aprenda a Criar um CLI Para Automatizar seu Trabalho",
	"https://i9.ytimg.com/vi/0Eub-aQs-44/maxresdefault.jpg",
	"https://www.youtube.com/watch?v=0Eub-aQs-44",
);

const videoNotification = new VideoNotification(video);

// Observers
const gabriel = new Subscriber("Gabriel Fróes", 1);
const vanessa = new Subscriber("Vanessa Weber", 2);
const juliana = new Subscriber("Juliana Silva", 3);
const feedYoutube = new Feed("UCFuIUoyHB12qpYa8Jpxoxow");

videoNotification.subscribe(gabriel);
videoNotification.subscribe(vanessa);
videoNotification.subscribe(juliana);
videoNotification.subscribe(feedYoutube);

console.log("Iniciando notificações...");

videoNotification.notifyAll();
