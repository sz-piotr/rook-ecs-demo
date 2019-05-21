import { InspectInfo } from '../InspectInfo'

export class Bullet {
  static type = 'Bullet'

  constructor(
    public damage: number,
  ) {}

  inspect(): InspectInfo {
    return {
      name: Bullet.type,
      props: [
        { key: 'damage', value: this.damage.toString() },
      ]
    }
  }
}
