function sortCards(order) {
    const container = document.querySelector('.container');
    const cards = Array.from(container.querySelectorAll('.card'));
    
    cards.sort((a, b) => {
        const titleA = a.querySelector('h3').textContent.toLowerCase();
        const titleB = b.querySelector('h3').textContent.toLowerCase();

        if (order === 'asc') {
            return titleA.localeCompare(titleB);
        } else {
            return titleB.localeCompare(titleA);
        }
    });

    container.innerHTML = '';
    cards.forEach(card => {
        container.appendChild(card);
    });
}