import { _decorator, Component, game } from 'cc';
const { ccclass } = _decorator;

@ccclass('Menu')
export class Menu extends Component {

    cambiarEscena(nombreEscena: string) {

        const canvas = this.node.scene.getChildByName("Canvas");
        const fade = canvas?.getChildByName("Fade");

        if (!fade) {
            return;
        }

        const transicion = fade.getComponent("FadeTransition") as any;

        if (!transicion) {
            return;
        }

        transicion.cambiarEscena(nombreEscena);
    }

    jugar() {
        this.cambiarEscena("game");
    }

    opciones() {
        this.cambiarEscena("opciones");
    }

    ayuda() {
        this.cambiarEscena("Ayuda");
    }

    volverMenu() {
        this.cambiarEscena("manuscene");
    }

    salir() {
        game.end();
    }
}