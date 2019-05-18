import { InspectInfo } from '../InspectInfo'

export class Enemy {
  static type = 'Enemy'

  constructor(
    public speed: number,
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
    return new Enemy(300, 3)
  }

  static forDemonFast () {
    return new Enemy(600, 5)
  }

  static forDemonLarge () {
    return new Enemy(200, 10)
  }
}
