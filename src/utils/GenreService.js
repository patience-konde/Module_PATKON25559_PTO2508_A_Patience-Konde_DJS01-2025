export class GenreService {
  constructor(genres) { this.genres = genres; }
  getTitle(id) { return this.genres.find((genre) => genre.id === id)?.title ?? 'Unknown'; }
  getTitles(ids) { return ids.map((id) => this.getTitle(id)); }
}