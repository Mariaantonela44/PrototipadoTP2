import { _decorator, Component, director, AudioSource } from 'cc';
const { ccclass } = _decorator;

@ccclass('persistente')
export class persistente extends Component {

    music: AudioSource = null!;
    static instance: persistente = null!;
    onLoad() {
        persistente.instance = this;
        director.addPersistRootNode(this.node);

        this.music = this.getComponent(AudioSource)!;
        this.music.loop = true;

        this.playMusic();
    }

    playMusic() {
        if (!this.music) return;

        
        this.music.stop();
        this.music.play();
    }

start() {
    this.scheduleOnce(() => {
        director.loadScene("intro");
    }, 0);
}
    update(deltaTime: number) {
        
    }

  setVolume(value: number) {
    this.music.volume = value;
}
}


