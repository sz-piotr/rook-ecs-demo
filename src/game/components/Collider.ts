import { InspectInfo } from '../InspectInfo'

export class Collider {
  static type = 'Collider'

  constructor(
    public width: number,
    public height: number,
  ) {}

  inspect(): InspectInfo {
    return {
      name: Collider.type,
      props: [
        { key: 'width', value: this.width.toFixed(2) },
        { key: 'height', value: this.height.toFixed(2) },
      ]
    }
  }
}
