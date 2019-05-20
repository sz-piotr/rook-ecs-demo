import { InspectInfo } from '../InspectInfo'

export type BulletType = 'normal' | 'fast'
export class ShootsBullets {
  static type = 'ShootsBullets'
  public timeleft = 0

  constructor(
    public bulletType: BulletType,
    public interval: number,
    public angle: number,
  ) {}

  inspect(): InspectInfo {
    return {
      name: ShootsBullets.type,
      props: [
        { key: 'bulletType', value: this.bulletType },
        { key: 'interval', value: this.interval.toFixed(3) },
        { key: 'timeleft', value: this.timeleft.toFixed(3) },
        { key: 'angle', value: this.angle.toFixed(2) },
      ]
    }
  }
}
