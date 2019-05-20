import playerUrl from '../assets/player.png'
import demonBasicUrl from '../assets/demon-basic.png'
import demonFastUrl from '../assets/demon-fast.png'
import demonLargeUrl from '../assets/demon-large.png'
import floorTile0Url from '../assets/floor-tile-0.png'
import gunBasicUrl from '../assets/gun-basic.png'
import gunAk47Url from '../assets/gun-ak47.png'
import gunFunUrl from '../assets/gun-fun.png'
import bulletNormalUrl from '../assets/bullet-normal.png'
import bulletDuckUrl from '../assets/bullet-duck.png'

const loadImage = (src: string) => new Promise<HTMLImageElement>(
  (resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = src
  }
)

export async function loadAssets () {
  const [
    player,
    demonBasic,
    demonFast,
    demonLarge,
    floorTile0,
    gunBasic,
    gunAk47,
    gunFun,
    bulletNormal,
    bulletDuck,
  ] = await Promise.all([
    loadImage(playerUrl),
    loadImage(demonBasicUrl),
    loadImage(demonFastUrl),
    loadImage(demonLargeUrl),
    loadImage(floorTile0Url),
    loadImage(gunBasicUrl),
    loadImage(gunAk47Url),
    loadImage(gunFunUrl),
    loadImage(bulletNormalUrl),
    loadImage(bulletDuckUrl),
  ])
  return {
    player,
    demonBasic,
    demonFast,
    demonLarge,
    floorTile0,
    gunBasic,
    gunAk47,
    gunFun,
    bulletNormal,
    bulletDuck,
  }
}

export type Assets = ReturnType<typeof loadAssets> extends Promise<infer T> ? T : never
