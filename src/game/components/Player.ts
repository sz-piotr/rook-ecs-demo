import { InspectInfo } from '../InspectInfo'

export class Player {
  static type = 'Player'

  constructor(
    public speed: number,
  ) {}

  inspect(): InspectInfo {
    return {
      name: Player.type,
      props: [
        { key: 'speed', value: this.speed.toFixed(2) },
      ]
    }
  }
}
