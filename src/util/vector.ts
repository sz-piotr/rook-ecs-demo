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
  angle (v: Point) {
    return Math.atan2(v.y, v.x)
  }
}
