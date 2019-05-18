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

  static forPlayer() {
    return new Collider(-35, -121, 35, 0)
  }

  static forDemonBasic () {
    return new Collider(-50, -125, 45, -10)
  }

  static forDemonFast () {
    return new Collider(-65, -125, 50, -10)
  }

  static forDemonLarge () {
    return new Collider(-70, -205, 50, -10)
  }
}
