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
}
