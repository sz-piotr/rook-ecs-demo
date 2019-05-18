import playerUrl from '../assets/player.png'
import demonBasicUrl from '../assets/demon-basic.png'
import demonFastUrl from '../assets/demon-fast.png'
import demonLargeUrl from '../assets/demon-large.png'

const loadImage = (src: string) => new Promise<HTMLImageElement>(
  (resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = src
  }
)

export async function loadAssets () {
  const [player, demonBasic, demonFast, demonLarge] = await Promise.all([
    loadImage(playerUrl),
    loadImage(demonBasicUrl),
    loadImage(demonFastUrl),
    loadImage(demonLargeUrl),
  ])
  return {
    player,
    demonBasic,
    demonFast,
    demonLarge,
  }
}

export type Assets = ReturnType<typeof loadAssets> extends Promise<infer T> ? T : never
