import { InspectInfo } from '../InspectInfo'

export class Renderable {
  static type = 'Renderable'

  constructor(
    public zIndex: number,
  ) {}

  inspect(): InspectInfo {
    return {
      name: Renderable.type,
      props: [
        { key: 'zIndex', value: this.zIndex.toString(2) },
      ]
    }
  }
}
