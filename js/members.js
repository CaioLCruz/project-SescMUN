const membersData = [

    {
        name: 'Riquelle Magalhães',
        position: 'Professora Conselheira',
        image: 'https://live.staticflickr.com/65535/54037720494_6fb58b1a97_z.jpg',
        description: 'Dedicated leader with a strong focus on diplomacy and international cooperation.',
        social: {
            linkedin: 'https://linkedin.com/in/riquelle',
            twitter: 'https://twitter.com/riquelle'
        }
    },
    {
        name: 'Caio Lima da Cruz',
        position: 'Secretário de Relações Públicas',
        image: 'assets/members/caio.jpg',
        description: 'Passionate about global issues and effective communication in international relations.',
        social: {
            linkedin: 'https://linkedin.com/in/caiolima',
            twitter: 'https://twitter.com/caiolima'
        }
    },
    {
        name: 'Luiza Rezende Calazans',
        position: 'Vice-Secretária Geral',
        image: 'assets/members/luiza.jpg',
        description: 'Creative and strategic thinker with a focus on media relations and communication.',
        social: {
            linkedin: 'https://linkedin.com/in/luiza',
            twitter: 'https://twitter.com/luiza'
        }
    },
    {
        name: 'Eduarda Lima Vilela',
        position: 'Secretária Geral',
        image: 'assets/members/eduarda.jpg',
        description: 'Expert in organizing events with a focus on smooth operations and coordination.',
        social: {
            linkedin: 'https://linkedin.com/in/eduarda',
            twitter: 'https://twitter.com/eduarda'
        }
    },
    {
        name: 'Maria Alyce',
        position: 'Secretária Administrativa',
        image: 'assets/members/mariaalyce.jpg',
        description: 'Skilled in building strategic alliances and fostering long-term relationships.',
        social: {
            linkedin: 'https://linkedin.com/in/mariaalyce',
            twitter: 'https://twitter.com/mariaalyce'
        }
    },
    {
        name: 'Juciana',
        position: 'Secretária Acadêmica',
        image: 'assets/members/juciana.jpg',
        description: 'Experienced in securing funding and partnerships to support meaningful projects.',
        social: {
            linkedin: 'https://linkedin.com/in/juciana',
            twitter: 'https://twitter.com/juciana'
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