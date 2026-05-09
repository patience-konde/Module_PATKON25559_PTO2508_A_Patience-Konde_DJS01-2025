import { createPodcastCard } from '../components/createPodcastCard.js';

export function createGrid(container, podcasts, genreService, onSelect) {
  container.innerHTML = '';
  podcasts.forEach((podcast) => container.appendChild(createPodcastCard(podcast, genreService, onSelect)));
}