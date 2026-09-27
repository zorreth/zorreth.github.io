export function calculateReadTime(text: string): number {
  return Math.ceil(text.replace(/\n+/g, ' ').split(' ').length / 200);
}

export function getReadTime(text?: string): string {
  if (!text) return '';

  const readTime = calculateReadTime(text);

  return `${readTime} minute${readTime > 1 ? 's' : ''} read`;
}
