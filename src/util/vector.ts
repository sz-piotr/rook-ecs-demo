export type Point = { x: number, y: number }
export const Vector2 = {
  normalize (p: Point) {
    const length = Vector2.length(p)
    return {
      x: p.x / length,
      y: p.y / length
    }
  },
  length (p: Point) {
    return Math.sqrt(Vector2.length2(p))
  },
  length2 ({ x, y }: Point) {
    return x * x + y * y
  },
  add (v: Point, u: Point) {
    return {
      x: v.x + u.x,
      y: v.y + u.y
    }
  },
  sub (v: Point, u: Point) {
    return {
      x: v.x - u.x,
      y: v.y - u.y
    }
  },
  mul (v: Point, amount: number) {
    return {
      x: v.x * amount,
      y: v.y * amount
    }
  },
  rotate (v: Point, angle: number) {
    return {
      x: v.x * Math.cos(angle) - v.y * Math.sin(angle),
      y: v.x * Math.sin(angle) + v.y * Math.cos(angle),
    }
  },
  angle (v: Point) {
    return Math.atan2(v.y, v.x)
  },
  fromPolar (r: number, phi: number) {
    return {
      x: r * Math.cos(phi),
      y: r * Math.sin(phi)
    }
  }
}
