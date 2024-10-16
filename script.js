// Collapsible sections
document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll('.collapsible');

    headings.forEach(heading => {
        heading.addEventListener('click', () => {
            const content = heading.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // Table of Contents
    const toc = document.getElementById("toc-list");
    document.querySelectorAll('h1, h2').forEach((heading, index) => {
        const item = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.textContent = heading.textContent;
        anchor.href = `#${heading.tagName + index}`;
        heading.id = heading.tagName + index;  // Add id to each heading for linking
        item.appendChild(anchor);
        toc.appendChild(item);
    });
});
