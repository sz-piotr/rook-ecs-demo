import { InspectInfo } from '../InspectInfo'

export class Rectangle {
  static type = 'Rectangle'

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {}

  inspect(): InspectInfo {
    return {
      name: Rectangle.type,
      props: [
        { key: 'width', value: this.width.toFixed(2) },
        { key: 'height', value: this.height.toFixed(2) },
        { key: 'color', value: `"${this.color}"` },
      ]
    }
  }
}
