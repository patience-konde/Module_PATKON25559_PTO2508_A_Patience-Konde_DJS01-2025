# DJS01: Vanilla JS Podcast App

## 🎧 Vanilla JS Podcast App
A responsive podcast browsing application built with HTML, CSS, and Vanilla JavaScript. Users can explore podcast previews on the landing page and view detailed information in a modal — all without page reloads. The app emphasizes clean architecture, modular design, and accessible UI/UX.

---

## 🚀 Features

### 🎙 Landing Page – Podcast Previews
Displays a grid of podcast shows.

Each preview includes:

Cover image

Show title

Number of seasons

Genre names

Last updated date (human-readable format)

-----

## 📖 Modal View – Show Details

* Opens when a user clicks on a podcast preview.
* Includes:

  - Larger cover image.

  - Podcast title & description.

  - Genre tags.

  - Last updated date.

  -  List of season titles with episode counts.

* Accessible close options:

  - Close button (×).

  - Click outside modal.

  - Escape key.
  
  -------

 ## 🧩 Architecture

- Components – Small, reusable UI pieces (createPodcastCard, createModal).

- Views – Page-level renderer (createGrid).

- Utils – Helper functions for DOM manipulation and formatting.

- Data – Static dataset or API integration.

----

## 📂 Project Structure

podcast-app/
│── index.html
│── styles.css
│── README.md
│── src/
│   ├── index.js              # Main entry point
│   │
│   ├── data/
│   │   └── podcasts.js       # Sample podcast data
│   │
│   ├── utils/
│   │   └── utils.js          # Utility functions (e.g., date formatting)
│   │
│   ├── components/
│   │   ├── createPodcastCard.js  # Renders a single podcast preview card
│   │   └── createModal.js        # Handles modal open/close logic
│   │
│   └── views/
│       └── createGrid.js         # Renders the grid of podcast cards

-----

## 🛠 Tech Stack
- HTML5 – Semantic structure

- CSS3 / Tailwind (optional) – Responsive design & styling

- Vanilla JavaScript (ES6+) – Dynamic rendering & modal logic

---------

## 📱 Design & UX Goals

* Visually appealing layout with clear hierarchy.

* Consistent color scheme, typography, and spacing.

* Accessibility considerations:

  - High contrast

  - Readable fonts

  - Responsive buttons

* Fully responsive across desktop, tablet, and mobile.

----

## 🧩 Future Improvements

- Fetch podcast data from an API instead of static JSON.

- Add search and filter functionality.

- Implement dark/light theme toggle.

- Enhance accessibility with ARIA roles and focus trapping in modal.
---

## 👩‍💻 Contributors

- Kenneth Ngcobo (@Kenneth-Ngcobo)

- Jess Klette (@jessklette)
----

## 📜 License
This project is licensed under the MIT License.
