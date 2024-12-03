import { initializeGallery } from './gallery.js';
import { initializeMembersGrid } from './members.js';
import { initializeForm } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    initializeMembersGrid();
    initializeForm();
});