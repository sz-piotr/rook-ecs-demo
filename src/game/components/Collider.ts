import { InspectInfo } from '../InspectInfo'

export class Collider {
  static type = 'Collider'

  constructor(
    public left: number,
    public top: number,
    public right: number,
    public bottom: number,
  ) {}

  inspect(): InspectInfo {
    return {
      name: Collider.type,
      props: [
        { key: 'left', value: this.left.toFixed(2) },
        { key: 'top', value: this.top.toFixed(2) },
        { key: 'right', value: this.right.toFixed(2) },
        { key: 'bottom', value: this.bottom.toFixed(2) },
      ]
    }
  }
}
