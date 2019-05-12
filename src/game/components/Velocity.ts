import { InspectInfo } from '../InspectInfo'

export class Velocity {
  static type = 'Velocity'

  constructor(
    public x: number,
    public y: number,
  ) {}

  inspect(): InspectInfo {
    return {
      name: Velocity.type,
      props: [
        { key: 'x', value: this.x.toFixed(2) },
        { key: 'y', value: this.y.toFixed(2) },
      ]
    }
  }
}
