import { InspectInfo } from '../InspectInfo'

export class Position {
  constructor(
    public x: number,
    public y: number,
  ) {}

  inspect(): InspectInfo {
    return {
      name: 'Position',
      props: [
        { key: 'x', value: this.x.toFixed(2) },
        { key: 'y', value: this.y.toFixed(2) },
      ]
    }
  }
}
