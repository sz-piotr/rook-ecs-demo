export class Collider {
  static type = 'Collider'

  constructor(
    public left: number,
    public top: number,
    public right: number,
    public bottom: number,
  ) {}
}
