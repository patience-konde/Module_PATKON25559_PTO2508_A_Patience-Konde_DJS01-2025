import { podcasts, genres, seasons } from './data.js';
import { GenreService } from './utils/GenreService.js';
import { createGrid } from './views/createGrid.js';
import { createModal } from './components/createModal.js';

class PodcastApp {
  constructor() {
    this.genreService = new GenreService(genres);
    this.grid = document.querySelector('#podcast-grid');
    this.genreFilter = document.querySelector('#genre-filter');
    this.sortFilter = document.querySelector('#sort-filter');
    this.modalRoot = document.querySelector('#modal-root');
    this.selectedGenre = 'all';
    this.selectedSort = 'recent';
  }

  init() {
    this.populateGenres();
    this.bindEvents();
    this.render();
  }

  populateGenres() {
    this.genreFilter.innerHTML = '<option value="all">All Genres</option>' + genres.map((genre) => `<option value="${genre.id}">${genre.title}</option>`).join('');
  }

  bindEvents() {
    this.genreFilter.addEventListener('change', (event) => { this.selectedGenre = event.target.value; this.render(); });
    this.sortFilter.addEventListener('change', (event) => { this.selectedSort = event.target.value; this.render(); });
  }

  getVisiblePodcasts() {
    let visible = [...podcasts];
    if (this.selectedGenre !== 'all') {
      visible = visible.filter((podcast) => podcast.genres.includes(Number(this.selectedGenre)));
    }
    const sorters = {
      recent: (a, b) => new Date(b.updated) - new Date(a.updated),
      newest: (a, b) => Number(b.id) - Number(a.id),
      popular: (a, b) => b.seasons - a.seasons,
    };
    return visible.sort(sorters[this.selectedSort]);
  }

  render() {
    createGrid(this.grid, this.getVisiblePodcasts(), this.genreService, (podcast) => this.openModal(podcast));
  }

  openModal(podcast) {
    this.modalRoot.innerHTML = '';
    const seasonData = seasons.find((season) => season.id === podcast.id)?.seasonDetails ?? [];
    this.modalRoot.appendChild(createModal(podcast, seasonData, this.genreService));
  }
}

new PodcastApp().init();