export function * reversed <T>(array: T[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    yield array[i]
  }
}
