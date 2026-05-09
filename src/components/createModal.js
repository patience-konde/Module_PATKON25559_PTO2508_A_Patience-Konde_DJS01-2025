 import { DateUtils } from '../utils/DateUtils.js';

export function createModal(podcast, seasons, genreService, onClose) {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <section class="modal" role="dialog" aria-modal="true" aria-label="${podcast.title} details">
      <button class="close-button" aria-label="Close modal">×</button>
      <h2>${podcast.title}</h2>
      <div class="modal-top">
        <img class="modal-cover" src="${podcast.image}" alt="${podcast.title} large cover" />
        <div>
          <h3>Description</h3>
          <p class="description">${podcast.description}</p>
          <h3>Genres</h3>
          <div class="genre-list">${genreService.getTitles(podcast.genres).map((genre) => `<span class="tag">${genre}</span>`).join('')}</div>
          <p class="modal-date"><span>▣</span><span>Last updated: ${DateUtils.readableDate(podcast.updated)}</span></p>
        </div>
      </div>
      <h3 class="seasons-title">Seasons</h3>
      <div class="season-list">
        ${seasons.map((season) => `
          <div class="season-item">
            <div><h4>${season.title}</h4><p>${season.title} episodes collection</p></div>
            <span class="episode-count">${season.episodes} episodes</span>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  const close = () => { backdrop.remove(); onClose?.(); };
  backdrop.querySelector('.close-button').addEventListener('click', close);
  backdrop.addEventListener('click', (event) => { if (event.target === backdrop) close(); });
  document.addEventListener('keydown', function escapeClose(event) {
    if (event.key === 'Escape') { close(); document.removeEventListener('keydown', escapeClose); }
  });
  return backdrop;
}