import { Assets } from 'src/ui/assets'

export class Sprite {
  static type = 'Sprite'

  constructor(
    public asset: keyof Assets,
    public offsetX = 0,
    public offsetY = 0,
    public rotation = 0
  ) {}
}
