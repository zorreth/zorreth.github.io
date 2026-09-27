export function getReadTime(text: string): number {
  return Math.ceil(text.replace(/\n+/g, ' ').split(' ').length / 200);
}
