import { _decorator, Component, director } from 'cc';
import { Results } from './Results';

const { ccclass } = _decorator;

@ccclass('BotonesGameOver')
export class BotonesGameOver extends Component {

    reiniciarJuego() {

        Results.scoreFinal = 0;

        director.loadScene("game");
    }

    volverMenu() {

        director.loadScene("menu");
    }

   resetearRecord() {

        Results.bestScore = 0;
        Results.scoreFinal = 0;

        // buscar el componente Results
        const results = this.node.scene.getComponentInChildren(Results);

        if (results) {

            // actualizar textos en pantalla
            results.scoreLabel.string = '0';
            results.highScore.string = '0';
        }
    }
}