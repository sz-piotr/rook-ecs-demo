import { InspectInfo } from '../InspectInfo'
import { Assets } from 'src/ui/assets'

export class Sprite {
  static type = 'Sprite'

  constructor(
    public asset: keyof Assets,
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
