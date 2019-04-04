export type Point = {
  x: number,
  y: number
}

export function add(a: number, b: number): number {
  return a + b;
}

export function distance(a: Point, b: Point): number {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

