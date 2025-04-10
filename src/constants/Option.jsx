export const SelectTravelsList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A sole traveler in exploration',
        icon: '🚶',
        people: '1'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two travelers in tandem',
        icon: '👫',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun-loving adventurers',
        icon: '👨‍👩‍👧‍👦',
        people: 'Family'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'Exploring the world with your best buddies',
        icon: '👭👬',
        people: '3-5 People'
    },
    {
        id: 5,
        title: 'Business Trip',
        desc: 'Traveling for work and networking',
        icon: '💼',
        people: 'Varies'
    },
    {
        id: 8,
        title: 'Senior Travelers',
        desc: 'Relaxed and comfortable journeys for older adults',
        icon: '👴👵',
        people: 'Family'
    },
    {
        id: 9,
        title: 'Adventure Seekers',
        desc: 'Thrill-seekers looking for extreme experiences',
        icon: '🏔️',
        people: 'Solo or Group'
    },
    {
        id: 10,
        title: 'Cultural Explorers',
        desc: 'Discovering new traditions, food, and history',
        icon: '🏛️',
        people: 'Solo or Group'
    }
];


export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💵',
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '$',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Indulge in premium experiences',
        icon: '💎',
    },
];

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Rating, Time to travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.'