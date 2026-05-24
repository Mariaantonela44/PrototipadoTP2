import { _decorator, Component, Slider } from 'cc';
import { persistente } from './persistente';

const { ccclass } = _decorator;

@ccclass('Volumen')
export class Volumen extends Component {
  setVolume(slider: Slider) {
    if (!persistente.instance) return;

    const volume = Math.max(0, Math.min(1, slider.progress));

    console.log('Volume:', volume);

    persistente.instance.setVolume(volume);
  }
}