import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Results')
export class Results extends Component {

    @property(Label)
    public scoreLabel: Label = null!;

    @property(Label)
    public highScore: Label = null!;

    //@property(Label)
   // public resultEnd: Label = null!;

    public static scoreFinal: number = 0;
    public static bestScore: number = 0;

    maxScore: number = 0;
    currentScore: number = 0;

    start() {
        // Esto se ejecuta cuando entra a la escena gameover
        if (this.scoreLabel) {
            this.scoreLabel.string = '' + Results.scoreFinal;
        }

        if (this.highScore) {
            this.highScore.string = '' + Results.bestScore;
        }

       // if (this.resultEnd) {
        //    this.resultEnd.string = '¡Puedes hacerlo mejor!';
        //}
    }

    updateScore(num: number) {
        this.currentScore = num;

        if (this.scoreLabel) {
            this.scoreLabel.string = '' + this.currentScore;
        }
    }

    resetScore() {
        this.updateScore(0);
        this.hideResult();
    }

    addScore() {
        this.updateScore(this.currentScore + 1);
    }

    showResult() {
        this.maxScore = Math.max(this.maxScore, this.currentScore);

        if (this.highScore) {
            this.highScore.string = '' + this.maxScore;
            this.highScore.node.active = true;
        }

        //if (this.resultEnd) {
        //    this.resultEnd.node.active = true;
        //}
    }

    hideResult() {
        if (this.highScore) {
            this.highScore.node.active = false;
        }

       // if (this.resultEnd) {
         //   this.resultEnd.node.active = false;
       // }
    }

}

