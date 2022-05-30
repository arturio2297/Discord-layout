export function isInside(values: number[] | string[], value: number | string): boolean {
  for (let i = 0; i < values.length; i++) {
    if (values[i] === value) return true;
  }
  return false;
}