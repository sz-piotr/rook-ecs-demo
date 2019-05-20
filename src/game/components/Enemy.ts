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
        { key: 'speed', value: this.speed.toFixed(2) },
        { key: 'hitpoints', value: this.hitpoints.toString() },
      ]
    }
  }
}
