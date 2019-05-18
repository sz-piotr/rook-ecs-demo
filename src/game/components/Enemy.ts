import { InspectInfo } from '../InspectInfo'

export class Enemy {
  static type = 'Enemy'

  constructor(
    public hitpoints: number,
  ) {}

  inspect(): InspectInfo {
    return {
      name: Enemy.type,
      props: [
        { key: 'hitpoints', value: this.hitpoints.toString() },
      ]
    }
  }

  static forDemonBasic () {
    return new Enemy(3)
  }

  static forDemonFast () {
    return new Enemy(5)
  }

  static forDemonLarge () {
    return new Enemy(10)
  }
}
