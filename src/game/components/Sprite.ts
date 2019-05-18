import { InspectInfo } from '../InspectInfo'
import { Assets } from 'src/ui/assets'

export class Sprite {
  static type = 'Sprite'

  constructor(
    public asset: keyof Assets,
    public offsetX = 0,
    public offsetY = 0
  ) {}

  inspect(): InspectInfo {
    return {
      name: Sprite.type,
      props: [
        { key: 'asset', value: this.asset },
      ]
    }
  }

  static forPlayer () {
    return new Sprite('player', -137 / 2, -121)
  }

  static forDemonBasic () {
    return new Sprite('demonBasic', -103 / 2, -129)
  }

  static forDemonFast () {
    return new Sprite('demonFast', -127 / 2, -129)
  }

  static forDemonLarge () {
    return new Sprite('demonLarge', -145 / 2, -239)
  }
}
