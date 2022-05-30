export function truncTitle(title: string, end: number): string {
  return title.length > end ? title.substring(0, end) + '...' : title;
}