export type BulletType = 'normal' | 'fast'
export class ShootsBullets {
  static type = 'ShootsBullets'
  public timeleft = 0

  constructor(
    public bulletType: BulletType,
    public interval: number,
    public angle: number,
  ) {}
}
