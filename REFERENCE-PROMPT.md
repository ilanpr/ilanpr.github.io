# Arcade portfolio direction

Refine Ilan Hawwari Prasojo's existing portfolio using these references:

- https://jjettas.com/ — spatial storytelling, image-led pacing, collectible artwork and personal presence.
- https://www.behance.net/gallery/229512455/Play-Arcade — chamfered game panels, sharp typography, layered characters and cohesive arcade art direction.

Keep the original arcade cabinet, CRT display, pixel sprites, chibi, yellow accent, real project artwork and functioning five-chapter navigation. Adapt the references' principles to this portfolio; do not reproduce their logos, characters, photographs, copy or exact compositions.

Make the portfolio feel like entering Ilan's own arcade. Build one authored motion sequence: the cabinet hands the visitor into a project workbench, then a spatial picture wall resolves from tilted depth into a legible collection as the visitor scrolls. Keep normal vertical scrolling, bounded pointer parallax and fast, predictable feedback. Tie the chibi's pose to the same chapter transition as its workbench. Remove idle floating, arbitrary light rays, blur blobs and glowing borders.

Design text boxes as game information panels: clipped corner geometry belongs to the background, with fine rims, a flat dark surface, generous inner padding, a clear title and readable body copy. Never clip the text or artwork. Use pixel type for the game interface and display headings, readable sans-serif for descriptions, and a small consistent spacing and colour system. Let images lead; avoid repeating identical card wrappers around every section.

Use the existing portrait for a more personal About section. Preserve HIMATEKKOM Visuals, AEROSENSE, Spots and Motion Studies, their galleries, source links and status disclosures. AEROSENSE uses sample data; Spots images show its earlier web interface. Do not invent achievements, clients, metrics or project claims. Keep Instagram @ilannpr, LinkedIn /in/ilanprasojo and GitHub /ilanpr.

Implement in the existing static HTML, CSS and JavaScript. Reuse the native animation and scroll loop; add no framework or animation dependency. Animate transforms and opacity only while relevant content is visible. Honour Pause motion and prefers-reduced-motion with complete, readable static compositions. Touch users must not depend on hover. Keep every control keyboard accessible, visible focus, 44px touch targets and adequate contrast.

Verify the cabinet, all five chapters, the gallery, project dialogs, portrait and footer at desktop and 320, 375, 414 and 768px. Check text wrapping, artwork containment, horizontal overflow and browser errors. Publish only the tested result and verify GitHub Pages independently.
