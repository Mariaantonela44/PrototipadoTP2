import { _decorator, Component, director, tween, UIOpacity } from 'cc';
const { ccclass } = _decorator;

@ccclass('FadeTransition')
export class FadeTransition extends Component {

    private opacity: UIOpacity = null!;

    onLoad() {
        this.opacity = this.getComponent(UIOpacity)!;

        if (!this.opacity) {
            this.opacity = this.addComponent(UIOpacity);
        }

        // arranca transparente
        this.opacity.opacity = 0;
    }

    cambiarEscena(nombre: string) {
        tween(this.opacity)
            .to(0.5, { opacity: 255 })
            .call(() => {
                director.loadScene(nombre);
            })
            .start();
    }
}