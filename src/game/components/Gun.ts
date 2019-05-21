export class Gun {
  static type = 'Gun'

  constructor(
    public timeLeft: number,
    public equipped: boolean,
  ) {}
}
