
const destinations = [
    {
        name: 'Bora Bora',
        description: 'A stunning island in French Polynesia with turquoise lagoons and luxurious overwater bungalows.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723a9ce6ad3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['beach'],
        itinerary: {
            3: ['Day 1: Arrive and relax on the beach', 'Day 2: Snorkeling and swimming with sharks', 'Day 3: Explore the island on a 4x4 tour'],
            5: ['Day 1: Arrive and relax on the beach', 'Day 2: Snorkeling and swimming with sharks', 'Day 3: Explore the island on a 4x4 tour', 'Day 4: Enjoy a sunset cruise', 'Day 5: Depart'],
            7: ['Day 1: Arrive and relax on the beach', 'Day 2: Snorkeling and swimming with sharks', 'Day 3: Explore the island on a 4x4 tour', 'Day 4: Enjoy a sunset cruise', 'Day 5: Visit a local pearl farm', 'Day 6: Hike to Mount Otemanu', 'Day 7: Depart']
        }
    },
    {
        name: 'Swiss Alps',
        description: 'A majestic mountain range in Switzerland, perfect for hiking, skiing, and breathtaking views.',
        image: 'https://images.unsplash.com/photo-1534940692429-3864b223a5c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['mountain'],
        itinerary: {
            3: ['Day 1: Arrive in Interlaken and take a train to Grindelwald', 'Day 2: Hike to Bachalpsee', 'Day 3: Take the Jungfrau Railway to the Top of Europe'],
            5: ['Day 1: Arrive in Interlaken and take a train to Grindelwald', 'Day 2: Hike to Bachalpsee', 'Day 3: Take the Jungfrau Railway to the Top of Europe', 'Day 4: Skiing or snowboarding', 'Day 5: Depart'],
            7: ['Day 1: Arrive in Interlaken and take a train to Grindelwald', 'Day 2: Hike to Bachalpsee', 'Day 3: Take the Jungfrau Railway to the Top of Europe', 'Day 4: Skiing or snowboarding', 'Day 5: Explore the village of Mürren', 'Day 6: Visit the Trümmelbach Falls', 'Day 7: Depart']
        }
    },
    {
        name: 'Tokyo',
        description: 'A vibrant metropolis in Japan, where ancient traditions meet futuristic technology.',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['city'],
        itinerary: {
            3: ['Day 1: Explore Shibuya Crossing and Harajuku', 'Day 2: Visit the Senso-ji Temple and Tokyo Skytree', 'Day 3: Experience the digital art at teamLab Borderless'],
            5: ['Day 1: Explore Shibuya Crossing and Harajuku', 'Day 2: Visit the Senso-ji Temple and Tokyo Skytree', 'Day 3: Experience the digital art at teamLab Borderless', 'Day 4: Day trip to Hakone', 'Day 5: Depart'],
            7: ['Day 1: Explore Shibuya Crossing and Harajuku', 'Day 2: Visit the Senso-ji Temple and Tokyo Skytree', 'Day 3: Experience the digital art at teamLab Borderless', 'Day 4: Day trip to Hakone', 'Day 5: Explore the Ghibli Museum', 'Day 6: Visit the Tsukiji Fish Market', 'Day 7: Depart']
        }
    },
    {
        name: 'Maldives',
        description: 'A tropical paradise in the Indian Ocean, famous for its pristine beaches and coral reefs.',
        image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['beach'],
        itinerary: {
            3: ['Day 1: Arrive and relax at your resort', 'Day 2: Go for a swim and snorkel in the house reef', 'Day 3: Enjoy a spa treatment'],
            5: ['Day 1: Arrive and relax at your resort', 'Day 2: Go for a swim and snorkel in the house reef', 'Day 3: Enjoy a spa treatment', 'Day 4: Take a dolphin watching cruise', 'Day 5: Depart'],
            7: ['Day 1: Arrive and relax at your resort', 'Day 2: Go for a swim and snorkel in the house reef', 'Day 3: Enjoy a spa treatment', 'Day 4: Take a dolphin watching cruise', 'Day 5: Go diving', 'Day 6: Visit a local island', 'Day 7: Depart']
        }
    },
    {
        name: 'Patagonia',
        description: 'A rugged and remote region in South America with dramatic landscapes of glaciers, mountains, and forests.',
        image: 'https://images.unsplash.com/photo-1526352889243-ea708a38b55d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['mountain'],
        itinerary: {
            3: ['Day 1: Arrive in El Calafate and visit the Glaciarium', 'Day 2: Hike on the Perito Moreno Glacier', 'Day 3: Depart'],
            5: ['Day 1: Arrive in El Calafate and visit the Glaciarium', 'Day 2: Hike on the Perito Moreno Glacier', 'Day 3: Take a boat tour to see other glaciers', 'Day 4: Explore El Chaltén', 'Day 5: Depart'],
            7: ['Day 1: Arrive in El Calafate and visit the Glaciarium', 'Day 2: Hike on the Perito Moreno Glacier', 'Day 3: Take a boat tour to see other glaciers', 'Day 4: Explore El Chaltén', 'Day 5: Hike to Laguna de los Tres', 'Day 6: Visit Torres del Paine National Park', 'Day 7: Depart']
        }
    },
    {
        name: 'Paris',
        description: 'The romantic capital of France, known for its iconic landmarks, art museums, and charming streets.',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['city'],
        itinerary: {
            3: ['Day 1: Visit the Eiffel Tower and the Louvre Museum', 'Day 2: Explore the Latin Quarter and Notre-Dame Cathedral', 'Day 3: Take a cruise on the Seine River'],
            5: ['Day 1: Visit the Eiffel Tower and the Louvre Museum', 'Day 2: Explore the Latin Quarter and Notre-Dame Cathedral', 'Day 3: Take a cruise on the Seine River', 'Day 4: Visit the Palace of Versailles', 'Day 5: Depart'],
            7: ['Day 1: Visit the Eiffel Tower and the Louvre Museum', 'Day 2: Explore the Latin Quarter and Notre-Dame Cathedral', 'Day 3: Take a cruise on the Seine River', 'Day 4: Visit the Palace of Versailles', 'Day 5: Explore Montmartre and the Sacré-Cœur Basilica', 'Day 6: Visit the Musée d\'Orsay', 'Day 7: Depart']
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

                .itinerary ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .itinerary li {
                    margin-bottom: 0.5rem;
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
                        <ul></ul>
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

        const itineraryList = this.shadowRoot.querySelector('.itinerary ul');
        itineraryList.innerHTML = '';
        for (const item of itinerary) {
            const li = document.createElement('li');
            li.textContent = item;
            itineraryList.appendChild(li);
        }
    }
}

customElements.define('travel-recommender', TravelRecommender);
customElements.define('recommender-form', RecommenderForm);
customElements.define('destination-card', DestinationCard);
