
const destinations = [
    {
        name: 'Bora Bora',
        description: 'A stunning island in French Polynesia with turquoise lagoons and luxurious overwater bungalows.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723a9ce6ad3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['beach'],
        itinerary: {
            3: [
                { day: 1, morning: 'Arrive and check into your overwater bungalow', afternoon: 'Relax on the beach and swim in the lagoon', evening: 'Enjoy a sunset cocktail' },
                { day: 2, morning: 'Snorkeling excursion to the Coral Gardens', afternoon: 'Lunch on a motu (small islet)', evening: 'Traditional Polynesian dinner and show' },
                { day: 3, morning: 'Explore the island on a 4x4 tour', afternoon: 'Shop for local crafts in Vaitape', evening: 'Depart' }
            ],
            5: [
                { day: 1, morning: 'Arrive and check into your overwater bungalow', afternoon: 'Relax on the beach and swim in the lagoon', evening: 'Enjoy a sunset cocktail' },
                { day: 2, morning: 'Snorkeling excursion to the Coral Gardens', afternoon: 'Lunch on a motu (small islet)', evening: 'Traditional Polynesian dinner and show' },
                { day: 3, morning: 'Explore the island on a 4x4 tour', afternoon: 'Shop for local crafts in Vaitape', evening: 'Enjoy a romantic dinner at a seaside restaurant' },
                { day: 4, morning: 'Canoe breakfast delivered to your bungalow', afternoon: 'Jet ski tour around the island', evening: 'Stargazing on the beach' },
                { day: 5, morning: 'Last swim in the lagoon', afternoon: 'Depart', evening: '' }
            ],
            7: [
                { day: 1, morning: 'Arrive and check into your overwater bungalow', afternoon: 'Relax on the beach and swim in the lagoon', evening: 'Enjoy a sunset cocktail' },
                { day: 2, morning: 'Snorkeling excursion to the Coral Gardens', afternoon: 'Lunch on a motu (small islet)', evening: 'Traditional Polynesian dinner and show' },
                { day: 3, morning: 'Explore the island on a 4x4 tour', afternoon: 'Shop for local crafts in Vaitape', evening: 'Enjoy a romantic dinner at a seaside restaurant' },
                { day: 4, morning: 'Canoe breakfast delivered to your bungalow', afternoon: 'Jet ski tour around the island', evening: 'Stargazing on the beach' },
                { day: 5, morning: 'Visit a local pearl farm', afternoon: 'Learn about the history of pearl cultivation', evening: 'Enjoy a seafood dinner' },
                { day: 6, morning: 'Hike to Mount Otemanu', afternoon: 'Picnic lunch with panoramic views', evening: 'Relax with a couple\'s massage' },
                { day: 7, morning: 'Last swim in the lagoon', afternoon: 'Depart', evening: '' }
            ]
        }
    },
    {
        name: 'Swiss Alps',
        description: 'A majestic mountain range in Switzerland, perfect for hiking, skiing, and breathtaking views.',
        image: 'https://images.unsplash.com/photo-1534940692429-3864b223a5c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['mountain'],
        itinerary: {
            3: [
                { day: 1, morning: 'Arrive in Interlaken and take a train to Grindelwald', afternoon: 'Check into your hotel and explore the village', evening: 'Enjoy a traditional Swiss fondue dinner' },
                { day: 2, morning: 'Hike to Bachalpsee', afternoon: 'Picnic lunch by the lake', evening: 'Relax at your hotel' },
                { day: 3, morning: 'Take the Jungfrau Railway to the Top of Europe', afternoon: 'Explore the Ice Palace and Sphinx Observatory', evening: 'Depart' }
            ],
            5: [
                { day: 1, morning: 'Arrive in Interlaken and take a train to Grindelwald', afternoon: 'Check into your hotel and explore the village', evening: 'Enjoy a traditional Swiss fondue dinner' },
                { day: 2, morning: 'Hike to Bachalpsee', afternoon: 'Picnic lunch by the lake', evening: 'Relax at your hotel' },
                { day: 3, morning: 'Take the Jungfrau Railway to the Top of Europe', afternoon: 'Explore the Ice Palace and Sphinx Observatory', evening: 'Dinner at a restaurant with panoramic views' },
                { day: 4, morning: 'Skiing or snowboarding in the Grindelwald-Wengen area', afternoon: 'Après-ski at a mountain bar', evening: 'Enjoy a hearty dinner' },
                { day: 5, morning: 'Visit the Trümmelbach Falls', afternoon: 'Depart', evening: '' }
            ],
            7: [
                { day: 1, morning: 'Arrive in Interlaken and take a train to Grindelwald', afternoon: 'Check into your hotel and explore the village', evening: 'Enjoy a traditional Swiss fondue dinner' },
                { day: 2, morning: 'Hike to Bachalpsee', afternoon: 'Picnic lunch by the lake', evening: 'Relax at your hotel' },
                { day: 3, morning: 'Take the Jungfrau Railway to the Top of Europe', afternoon: 'Explore the Ice Palace and Sphinx Observatory', evening: 'Dinner at a restaurant with panoramic views' },
                { day: 4, morning: 'Skiing or snowboarding in the Grindelwald-Wengen area', afternoon: 'Après-ski at a mountain bar', evening: 'Enjoy a hearty dinner' },
                { day: 5, morning: 'Explore the village of Mürren', afternoon: 'Take the Schilthorn cable car for stunning views', evening: 'Dinner at the Piz Gloria revolving restaurant' },
                { day: 6, morning: 'Visit the Trümmelbach Falls', afternoon: 'Take a boat trip on Lake Thun', evening: 'Enjoy a farewell dinner in Interlaken' },
                { day: 7, morning: 'Last chance for souvenir shopping', afternoon: 'Depart', evening: '' }
            ]
        }
    },
    {
        name: 'Tokyo',
        description: 'A vibrant metropolis in Japan, where ancient traditions meet futuristic technology.',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['city'],
        itinerary: {
            3: [
                { day: 1, morning: 'Explore Shibuya Crossing and the Hachiko statue', afternoon: 'Shop in the trendy Harajuku district', evening: 'Dinner and drinks in Shinjuku\'s Golden Gai' },
                { day: 2, morning: 'Visit the historic Senso-ji Temple in Asakusa', afternoon: 'Go up the Tokyo Skytree for panoramic views', evening: 'Enjoy a traditional Japanese dinner' },
                { day: 3, morning: 'Experience the digital art at teamLab Borderless', afternoon: 'Explore the Odaiba waterfront', evening: 'Depart' }
            ],
            5: [
                { day: 1, morning: 'Explore Shibuya Crossing and the Hachiko statue', afternoon: 'Shop in the trendy Harajuku district', evening: 'Dinner and drinks in Shinjuku\'s Golden Gai' },
                { day: 2, morning: 'Visit the historic Senso-ji Temple in Asakusa', afternoon: 'Go up the Tokyo Skytree for panoramic views', evening: 'Enjoy a traditional Japanese dinner' },
                { day: 3, morning: 'Experience the digital art at teamLab Borderless', afternoon: 'Explore the Odaiba waterfront', evening: 'Dinner at a themed restaurant' },
                { day: 4, morning: 'Day trip to Hakone', afternoon: 'Enjoy views of Mount Fuji and a cruise on Lake Ashi', evening: 'Relax in an onsen (hot spring)' },
                { day: 5, morning: 'Last-minute souvenir shopping in Ginza', afternoon: 'Depart', evening: '' }
            ],
            7: [
                { day: 1, morning: 'Explore Shibuya Crossing and the Hachiko statue', afternoon: 'Shop in the trendy Harajuku district', evening: 'Dinner and drinks in Shinjuku\'s Golden Gai' },
                { day: 2, morning: 'Visit the historic Senso-ji Temple in Asakusa', afternoon: 'Go up the Tokyo Skytree for panoramic views', evening: 'Enjoy a traditional Japanese dinner' },
                { day: 3, morning: 'Experience the digital art at teamLab Borderless', afternoon: 'Explore the Odaiba waterfront', evening: 'Dinner at a themed restaurant' },
                { day: 4, morning: 'Day trip to Hakone', afternoon: 'Enjoy views of Mount Fuji and a cruise on Lake Ashi', evening: 'Relax in an onsen (hot spring)' },
                { day: 5, morning: 'Explore the Ghibli Museum (requires advance booking)', afternoon: 'Wander through the charming neighborhood of Kichijoji', evening: 'Dinner at a local restaurant' },
                { day: 6, morning: 'Visit the Tsukiji Fish Market for a sushi breakfast', afternoon: 'Explore the Imperial Palace East Garden', evening: 'Experience a traditional tea ceremony' },
                { day: 7, morning: 'Last-minute souvenir shopping in Ginza', afternoon: 'Depart', evening: '' }
            ]
        }
    },
    {
        name: 'Maldives',
        description: 'A tropical paradise in the Indian Ocean, famous for its pristine beaches and coral reefs.',
        image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['beach'],
        itinerary: {
            3: [
                { day: 1, morning: 'Arrive and relax at your resort', afternoon: 'Go for a swim and snorkel in the house reef', evening: 'Enjoy a cocktail by the pool' },
                { day: 2, morning: 'Enjoy a spa treatment', afternoon: 'Take a cooking class', evening: 'Have a romantic dinner on the beach' },
                { day: 3, morning: 'Go for a final swim', afternoon: 'Depart', evening: '' }
            ],
            5: [
                { day: 1, morning: 'Arrive and relax at your resort', afternoon: 'Go for a swim and snorkel in the house reef', evening: 'Enjoy a cocktail by the pool' },
                { day: 2, morning: 'Enjoy a spa treatment', afternoon: 'Take a cooking class', evening: 'Have a romantic dinner on the beach' },
                { day: 3, morning: 'Take a dolphin watching cruise', afternoon: 'Explore a deserted island', evening: 'Watch a movie under the stars' },
                { day: 4, morning: 'Go diving or snorkeling', afternoon: 'Relax by the pool', evening: 'Enjoy a seafood barbecue' },
                { day: 5, morning: 'Go for a final swim', afternoon: 'Depart', evening: '' }
            ],
            7: [
                { day: 1, morning: 'Arrive and relax at your resort', afternoon: 'Go for a swim and snorkel in the house reef', evening: 'Enjoy a cocktail by the pool' },
                { day: 2, morning: 'Enjoy a spa treatment', afternoon: 'Take a cooking class', evening: 'Have a romantic dinner on the beach' },
                { day: 3, morning: 'Take a dolphin watching cruise', afternoon: 'Explore a deserted island', evening: 'Watch a movie under the stars' },
                { day: 4, morning: 'Go diving or snorkeling', afternoon: 'Relax by the pool', evening: 'Enjoy a seafood barbecue' },
                { day: 5, morning: 'Visit a local island', afternoon: 'Learn about Maldivian culture', evening: 'Enjoy a traditional Maldivian dinner' },
                { day: 6, morning: 'Go on a fishing trip', afternoon: 'Have your catch cooked for you', evening: 'Enjoy a farewell cocktail' },
                { day: 7, morning: 'Go for a final swim', afternoon: 'Depart', evening: '' }
            ]
        }
    },
    {
        name: 'Patagonia',
        description: 'A rugged and remote region in South America with dramatic landscapes of glaciers, mountains, and forests.',
        image: 'https://images.unsplash.com/photo-1526352889243-ea708a38b55d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['mountain'],
        itinerary: {
            3: [
                { day: 1, morning: 'Arrive in El Calafate and visit the Glaciarium', afternoon: 'Explore the town of El Calafate', evening: 'Enjoy a traditional Argentine barbecue' },
                { day: 2, morning: 'Hike on the Perito Moreno Glacier', afternoon: 'Take a boat tour to see the glacier up close', evening: 'Relax at your hotel' },
                { day: 3, morning: 'Last chance for souvenir shopping', afternoon: 'Depart', evening: '' }
            ],
            5: [
                { day: 1, morning: 'Arrive in El Calafate and visit the Glaciarium', afternoon: 'Explore the town of El Calafate', evening: 'Enjoy a traditional Argentine barbecue' },
                { day: 2, morning: 'Hike on the Perito Moreno Glacier', afternoon: 'Take a boat tour to see the glacier up close', evening: 'Relax at your hotel' },
                { day: 3, morning: 'Take a boat tour to see other glaciers', afternoon: 'Visit a traditional estancia (ranch)', evening: 'Enjoy a horseback ride' },
                { day: 4, morning: 'Explore El Chaltén', afternoon: 'Hike to a viewpoint for stunning mountain views', evening: 'Dinner at a local restaurant' },
                { day: 5, morning: 'Last chance for souvenir shopping', afternoon: 'Depart', evening: '' }
            ],
            7: [
                { day: 1, morning: 'Arrive in El Calafate and visit the Glaciarium', afternoon: 'Explore the town of El Calafate', evening: 'Enjoy a traditional Argentine barbecue' },
                { day: 2, morning: 'Hike on the Perito Moreno Glacier', afternoon: 'Take a boat tour to see the glacier up close', evening: 'Relax at your hotel' },
                { day: 3, morning: 'Take a boat tour to see other glaciers', afternoon: 'Visit a traditional estancia (ranch)', evening: 'Enjoy a horseback ride' },
                { day: 4, morning: 'Explore El Chaltén', afternoon: 'Hike to a viewpoint for stunning mountain views', evening: 'Dinner at a local restaurant' },
                { day: 5, morning: 'Hike to Laguna de los Tres', afternoon: 'Picnic lunch with views of Fitz Roy', evening: 'Relax at your hotel' },
                { day: 6, morning: 'Visit Torres del Paine National Park (Chile)', afternoon: 'Hike to the base of the towers', evening: 'Dinner and overnight in the park' },
                { day: 7, morning: 'Last chance for souvenir shopping', afternoon: 'Depart', evening: '' }
            ]
        }
    },
    {
        name: 'Paris',
        description: 'The romantic capital of France, known for its iconic landmarks, art museums, and charming streets.',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['city'],
        itinerary: {
            3: [
                { day: 1, morning: 'Visit the Eiffel Tower', afternoon: 'Explore the Louvre Museum', evening: 'Enjoy a dinner cruise on the Seine River' },
                { day: 2, morning: 'Explore the Latin Quarter and Notre-Dame Cathedral', afternoon: 'Visit Shakespeare and Company bookstore', evening: 'Attend a classical music concert' },
                { day: 3, morning: 'Wander through the charming streets of Montmartre', afternoon: 'Visit the Sacré-Cœur Basilica', evening: 'Depart' }
            ],
            5: [
                { day: 1, morning: 'Visit the Eiffel Tower', afternoon: 'Explore the Louvre Museum', evening: 'Enjoy a dinner cruise on the Seine River' },
                { day: 2, morning: 'Explore the Latin Quarter and Notre-Dame Cathedral', afternoon: 'Visit Shakespeare and Company bookstore', evening: 'Attend a classical music concert' },
                { day: 3, morning: 'Wander through the charming streets of Montmartre', afternoon: 'Visit the Sacré-Cœur Basilica', evening: 'Enjoy a traditional French dinner' },
                { day: 4, morning: 'Visit the Palace of Versailles', afternoon: 'Explore the vast gardens', evening: 'Attend a performance at the Opéra Garnier' },
                { day: 5, morning: 'Last-minute souvenir shopping on the Champs-Élysées', afternoon: 'Depart', evening: '' }
            ],
            7: [
                { day: 1, morning: 'Visit the Eiffel Tower', afternoon: 'Explore the Louvre Museum', evening: 'Enjoy a dinner cruise on the Seine River' },
                { day: 2, morning: 'Explore the Latin Quarter and Notre-Dame Cathedral', afternoon: 'Visit Shakespeare and Company bookstore', evening: 'Attend a classical music concert' },
                { day: 3, morning: 'Wander through the charming streets of Montmartre', afternoon: 'Visit the Sacré-Cœur Basilica', evening: 'Enjoy a traditional French dinner' },
                { day: 4, morning: 'Visit the Palace of Versailles', afternoon: 'Explore the vast gardens', evening: 'Attend a performance at the Opéra Garnier' },
                { day: 5, morning: 'Explore the Musée d\'Orsay', afternoon: 'Walk through the Tuileries Garden', evening: 'Enjoy a drink at a rooftop bar' },
                { day: 6, morning: 'Visit the Centre Pompidou', afternoon: 'Explore the Le Marais district', evening: 'Enjoy a farewell dinner' },
                { day: 7, morning: 'Last-minute souvenir shopping on the Champs-Élysées', afternoon: 'Depart', evening: '' }
            ]
        }
    }
];

class TravelRecommender extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <recommender-form></recommender-form>
            <div class="results"></div>
        `;

        this.shadowRoot.querySelector('recommender-form').addEventListener('recommendations', (event) => {
            this.displayRecommendations(event.detail.interest, event.detail.days);
        });
    }

    displayRecommendations(interest, days) {
        const resultsContainer = this.shadowRoot.querySelector('.results');
        resultsContainer.innerHTML = '';

        const filteredDestinations = destinations.filter(destination => destination.tags.includes(interest));

        for (const destination of filteredDestinations) {
            const destinationCard = document.createElement('destination-card');
            destinationCard.setAttribute('name', destination.name);
            destinationCard.setAttribute('description', destination.description);
            destinationCard.setAttribute('image', destination.image);
            destinationCard.setAttribute('days', days);
            destinationCard.itinerary = destination.itinerary; // Pass the itinerary object
            resultsContainer.appendChild(destinationCard);
        }
    }
}

class RecommenderForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

                :host {
                    --primary-color: oklch(65.88% 0.224 244.38);
                    --secondary-color: oklch(78.9% 0.15 275.29);
                    --accent-color: oklch(81.77% 0.176 302.7);
                    --text-color: oklch(95% 0.02 244.38);
                    --bg-color: oklch(34.12% 0.056 244.38);
                    --card-bg-color: oklch(40% 0.056 244.38);
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                    color: var(--secondary-color);
                }

                select, input, button {
                    width: 100%;
                    padding: 1rem;
                    border: 1px solid var(--secondary-color);
                    border-radius: 0.5rem;
                    background-color: var(--bg-color);
                    color: var(--text-color);
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-sizing: border-box;
                }

                button {
                    background-color: var(--primary-color);
                    border: none;
                    font-weight: 600;
                    box-shadow: 0 4px 15px oklch(0% 0 0 / 0.3);
                }

                button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px oklch(0% 0 0 / 0.4);
                }
            </style>
            <form>
                <div class="form-group">
                    <label for="interest">What's your travel interest?</label>
                    <select id="interest">
                        <option value="beach">Beach</option>
                        <option value="mountain">Mountain</option>
                        <option value="city">City</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="days">Number of days?</label>
                    <input type="number" id="days" value="3" min="1">
                </div>
                <button type="submit">Get Recommendations</button>
            </form>
        `;

        this.shadowRoot.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();
            const interest = this.shadowRoot.querySelector('#interest').value;
            const days = this.shadowRoot.querySelector('#days').value;
            this.dispatchEvent(new CustomEvent('recommendations', {
                bubbles: true,
                composed: true,
                detail: { interest, days }
            }));
        });
    }
}

class DestinationCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

                :host {
                    --accent-color: oklch(81.77% 0.176 302.7);
                    --card-bg-color: oklch(40% 0.056 244.38);
                }

                .card-image img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }

                .card-content {
                    padding: 1.5rem;
                }

                h3 {
                    margin: 0 0 1rem 0;
                    color: var(--accent-color);
                }

                p {
                    margin: 0 0 1.5rem 0;
                }
                
                .itinerary {
                    border-top: 1px solid var(--accent-color);
                    padding-top: 1.5rem;
                }

                .itinerary h4 {
                    margin: 0 0 1rem 0;
                    color: var(--accent-color);
                }

                .itinerary .day {
                    margin-bottom: 1rem;
                }

                .itinerary .day h5 {
                    margin: 0 0 0.5rem 0;
                    font-weight: 600;
                }

                .itinerary .day ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .itinerary .day li {
                    margin-bottom: 0.25rem;
                }

            </style>
            <div class="card">
                <div class="card-image">
                    <img src="" alt="">
                </div>
                <div class="card-content">
                    <h3></h3>
                    <p></p>
                    <div class="itinerary">
                        <h4></h4>
                        <div class="days-container"></div>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('h3').textContent = this.getAttribute('name');
        this.shadowRoot.querySelector('p').textContent = this.getAttribute('description');
        this.shadowRoot.querySelector('img').src = this.getAttribute('image');
        this.shadowRoot.querySelector('img').alt = this.getAttribute('name');

        const days = this.getAttribute('days');
        const itinerary = this.itinerary[days] || this.itinerary[Object.keys(this.itinerary).pop()];

        this.shadowRoot.querySelector('.itinerary h4').textContent = `${days}-Day Itinerary`;

        const daysContainer = this.shadowRoot.querySelector('.days-container');
        daysContainer.innerHTML = '';

        for (const day of itinerary) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.innerHTML = `
                <h5>Day ${day.day}</h5>
                <ul>
                    <li><strong>Morning:</strong> ${day.morning}</li>
                    <li><strong>Afternoon:</strong> ${day.afternoon}</li>
                    <li><strong>Evening:</strong> ${day.evening}</li>
                </ul>
            `;
            daysContainer.appendChild(dayElement);
        }
    }
}

customElements.define('travel-recommender', TravelRecommender);
customElements.define('recommender-form', RecommenderForm);
customElements.define('destination-card', DestinationCard);
