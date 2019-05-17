import { InspectInfo } from '../InspectInfo'

export class KeyboardController {
  static type = 'KeyboardController'

  constructor(
    public speed: number,
  ) {}

  inspect(): InspectInfo {
    return {
      name: KeyboardController.type,
      props: [
        { key: 'speed', value: this.speed.toFixed(2) },
      ]
    }
  }
}
