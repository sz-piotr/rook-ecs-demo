export class EnemySpawner {
  static type = 'EnemySpawner'

  constructor(
    public timeLeft = 0,
    public difficulty = 0
  ) {}
}
