import { DateUtils } from '../utils/DateUtils.js';

export function createPodcastCard(podcast, genreService, onSelect) {
  const article = document.createElement('article');
  article.className = 'podcast-card';
  article.tabIndex = 0;
  article.setAttribute('role', 'button');
  article.setAttribute('aria-label', `Open details for ${podcast.title}`);
  const genreTags = genreService.getTitles(podcast.genres).map((genre) => `<span class="tag">${genre}</span>`).join('');
  article.innerHTML = `
    <img class="cover" src="${podcast.image}" alt="${podcast.title} cover" />
    <h2>${podcast.title}</h2>
    <div class="meta"><span>▣</span><span>${podcast.seasons} seasons</span></div>
    <div class="genre-list">${genreTags}</div>
    <p class="updated">${DateUtils.relativeDate(podcast.updated)}</p>
  `;
  article.addEventListener('click', () => onSelect(podcast));
  article.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelect(podcast); }
  });
  return article;
}