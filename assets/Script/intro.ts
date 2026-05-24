import { _decorator, Component, Node, tween, Vec3, UIOpacity, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Intro')
export class Intro extends Component {

    @property(Node)
    gato: Node = null!;

    @property(Node)
    botonStart: Node = null!;

    start() {

      
        // GATO
   
        const gatoOpacity = this.gato.addComponent(UIOpacity);

        // invisible
        gatoOpacity.opacity = 0;

      // empieza arriba
        this.gato.setPosition(0, 300, 0);

    // cae al piso
        tween(this.gato)
        .to(1, {
        position: new Vec3(0, -300, 0)
        }, {
        easing: "bounceOut"
        })
        .start();

        // aparece
        tween(gatoOpacity)
            .to(1, { opacity: 255 })
            .start();

        // cae
        tween(this.gato)
            .to(1, {
                position: new Vec3(0, 0, 0)
            }, {
                easing: "bounceOut"
            })
            .start();

      
        // PRESS START
  

        const textoOpacity = this.botonStart.addComponent(UIOpacity);

        tween(textoOpacity)
            .repeatForever(
                tween()
                    .to(0.5, { opacity: 50 })
                    .to(0.5, { opacity: 255 })
            )
            .start();
    }

    irMenu() {

        director.loadScene("manuscene");

    }
}