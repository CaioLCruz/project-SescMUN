const membersData = [
    {
        name: 'John Doe',
        position: 'President',
        image: 'assets/members/member1.jpg',
        description: 'Experienced leader with a passion for international relations.',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe'
        }
    },
    {
        name: 'Jane Smith',
        position: 'Vice President',
        image: 'assets/members/member2.jpg',
        description: 'Dedicated to fostering diplomatic dialogue and understanding.',
        social: {
            linkedin: 'https://linkedin.com/in/janesmith',
            twitter: 'https://twitter.com/janesmith'
        }
    }
];

export function initializeMembersGrid() {
    const membersGrid = document.getElementById('members-grid');

    membersData.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <div class="member-image-container">
                <img src="${member.image}" alt="${member.name}" class="member-image">
            </div>
            <div class="member-info">
                <h3 class="member-name">${member.name}</h3>
                <p class="member-position">${member.position}</p>
                <p class="member-description">${member.description}</p>
                <div class="member-social">
                    ${member.social.linkedin ? `<a href="${member.social.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>` : ''}
                    ${member.social.twitter ? `<a href="${member.social.twitter}" target="_blank" rel="noopener noreferrer">Twitter</a>` : ''}
                </div>
            </div>
        `;
        membersGrid.appendChild(memberCard);
    });
}