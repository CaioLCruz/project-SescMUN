const galleryData = [
    { type: 'photos', url: 'https://live.staticflickr.com/65535/54037393376_ea6fa45db6_b.jpg' },
    { type: 'photos', url: 'https://live.staticflickr.com/65535/54037654483_0970bac0a3_z.jpg' },
    { type: 'photos', url: 'https://live.staticflickr.com/65535/54037849355_05d6a81fd4_z.jpg' },
    {type: 'photos', url: 'https://live.staticflickr.com/65535/54037848390_c99a88e574_b.jpg'},
    {type: 'photos', url: 'https://live.staticflickr.com/65535/54037718959_02c43d26c8_z.jpg'},
    { type: 'photos', url: 'https://live.staticflickr.com/65535/54037394411_b2151d8d46_b.jpg' },
    { type: 'photos', url: 'https://live.staticflickr.com/65535/54037847815_2536b538e6_z.jpg' },
    {type: 'photos', url:  'https://live.staticflickr.com/65535/54037720494_6fb58b1a97_z.jpg' },
    { type: 'videos', url: 'SescMUN CJ 2024.mp4' }
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