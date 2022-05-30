export function compareDateByDay(dateString1: string, dateString2: string): boolean {
  const d1 = new Date(dateString1);
  const d2 = new Date(dateString2);
  return d1.toLocaleDateString() === d2.toLocaleDateString();
}

export function getDateInfo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  return {
    isToday: date.toLocaleDateString() === now.toLocaleDateString(),
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString()
  };
}