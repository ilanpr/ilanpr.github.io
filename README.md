# Ilan Hawwari Prasojo — portfolio

An arcade-inspired portfolio of visual design, motion projects, and software.

## Edit

- `index.html`: introduction, About, arcade markup and links.
- `app.js`: four project entries, image galleries, videos and contact links.
- `arcade.js`: independent sprite positions and sizes in `playgroundSettings.screenSprites`, card poses, scroll transitions and preview geometry.
- `arcade.css`: arcade colors, typography, glow and responsive layout.
- `assets/`: individual sprites, original design work and web-optimized videos.

The cabinet name is in `.cabinet-marquee small` in `index.html`. The final cabinet rules in `arcade.css` control its silhouette, joystick, lights and title size. `crt-space` draws the pixel sky; the nine small meteors are created near the start of `initArcade` and use the screen's existing pause behavior.

The three character poses are separate transparent files: `ilan-chibi.webp`, `ilan-chibi-wave.webp`, and `ilan-chibi-laptop.webp`. Move or resize each placement through its own `.scene-mascot` or `.section-mascot` class in `arcade.css`. `archive-list` gives all four collections the same row layout with a category-specific accent color.

Use any static server or editor preview with this folder as the website root. No build or dependencies are required. GitHub Pages serves the `main` branch at its root.

The AEROSENSE dashboard uses sample data. Spots screenshots show its earlier web interface. Details and current source are linked from each project. GitHub screenshots are loaded from their original public repositories.

The supplied campus designs and video edits are Ilan’s work. The arcade illustrations and portrait variants were generated for this portfolio. No license is granted for reusing the artwork, portrait, video material or third-party marks/media.
