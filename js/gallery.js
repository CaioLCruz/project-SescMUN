const galleryData = [
    { type: 'photos', url: 'assets/gallery/photo1.jpg' },
    { type: 'photos', url: 'assets/gallery/photo2.jpg' },
    { type: 'videos', url: 'assets/gallery/video1.mp4' }
];

export function initializeGallery() {
    const gallery = document.getElementById('gallery');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderGallery(filter = 'all') {
        gallery.innerHTML = '';
        const filteredItems = filter === 'all' 
            ? galleryData 
            : galleryData.filter(item => item.type === filter);

        filteredItems.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';

            if (item.type === 'photos') {
                const img = document.createElement('img');
                img.src = item.url;
                img.alt = 'Gallery Image';
                galleryItem.appendChild(img);
            } else {
                const video = document.createElement('video');
                video.src = item.url;
                video.controls = true;
                galleryItem.appendChild(video);
            }

            gallery.appendChild(galleryItem);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.dataset.filter);
        });
    });

    renderGallery();
}