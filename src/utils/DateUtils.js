export class DateUtils {
  static readableDate(dateString) {
    return new Intl.DateTimeFormat('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(dateString));
  }
  static relativeDate(dateString) {
    const now = new Date('2022-11-04T00:00:00.000Z');
    const then = new Date(dateString);
    const diffDays = Math.max(1, Math.round((now - then) / (1000 * 60 * 60 * 24)));
    if (diffDays === 1) return 'Updated 1 day ago';
    if (diffDays < 7) return `Updated ${diffDays} days ago`;
    return `Updated ${Math.round(diffDays / 7)} week${Math.round(diffDays / 7) === 1 ? '' : 's'} ago`;
  }
}