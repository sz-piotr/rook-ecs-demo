export type BulletType = 'normal' | 'homing'
export class ShootsBullets {
  static type = 'ShootsBullets'
  public timeleft = 0

  constructor(
    public bulletType: BulletType,
    public offset: number,
    public interval: number,
    public angle: number,
  ) {}
}
