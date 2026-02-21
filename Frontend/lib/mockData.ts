export type Feature = {
    id: number;
    icon: string;
    title: string;
    description: string;
};

export type Testimonial = {
    id: number;
    name: string;
    role: string;
    image: string;
    text: string;
    rating: number;
};

export type MetroStation = {
    id: number;
    name: string;
    line: string;
    lat: number;
    lng: number;
};

export type RideHistoryItem = {
    id: number;
    from: string;
    to: string;
    date: string;
    distance: string;
    duration: string;
    fare: string;
};

export const features: Feature[] = [
    { id: 1, icon: "🚇", title: "Smart Metro Routes", description: "Find the fastest route to nearby metro stations." },
    { id: 2, icon: "📍", title: "Live Tracking", description: "Track your ride and driver in real time." },
    { id: 3, icon: "💸", title: "Affordable Fares", description: "Transparent pricing optimized for daily commuters." },
    { id: 4, icon: "⚡", title: "Quick Booking", description: "Book a last-mile ride in a few taps." },
    { id: 5, icon: "🛡️", title: "Safe Rides", description: "Verified drivers and secure trip monitoring." },
    { id: 6, icon: "📊", title: "Trip Insights", description: "View ride history, distance covered, and money saved." },
];

export const testimonials: Testimonial[] = [
    { id: 1, name: "Aarav Patil", role: "Daily Commuter", image: "👨", text: "Roadchal made my office commute predictable and stress-free.", rating: 5 },
    { id: 2, name: "Sneha Kulkarni", role: "Student", image: "👩", text: "I can reach the metro station on time every day now.", rating: 5 },
    { id: 3, name: "Rohit Deshmukh", role: "IT Professional", image: "🧑", text: "The tracking and ETA are accurate and very useful.", rating: 4 },
];

export const metroStations: MetroStation[] = [
    { id: 1, name: "Vanaz", line: "Purple", lat: 18.5019, lng: 73.8077 },
    { id: 2, name: "Anand Nagar", line: "Purple", lat: 18.5076, lng: 73.8199 },
    { id: 3, name: "Ideal Colony", line: "Purple", lat: 18.5143, lng: 73.8285 },
    { id: 4, name: "Nal Stop", line: "Purple", lat: 18.5199, lng: 73.8365 },
    { id: 5, name: "Garware College", line: "Purple", lat: 18.5239, lng: 73.8454 },
    { id: 6, name: "Deccan Gymkhana", line: "Purple", lat: 18.5205, lng: 73.8567 },
    { id: 7, name: "Chhatrapati Sambhaji Udyan", line: "Purple", lat: 18.5201, lng: 73.8619 },
    { id: 8, name: "PMC", line: "Purple", lat: 18.5246, lng: 73.8686 },
    { id: 9, name: "Civil Court", line: "Purple", lat: 18.5304, lng: 73.8728 },
];

export const rideHistory: RideHistoryItem[] = [
    {
        id: 1,
        from: "Kothrud",
        to: "Vanaz Metro",
        date: "18 Feb 2026",
        distance: "4.1 km",
        duration: "14 min",
        fare: "₹86",
    },
    {
        id: 2,
        from: "Karve Nagar",
        to: "Nal Stop Metro",
        date: "17 Feb 2026",
        distance: "3.2 km",
        duration: "11 min",
        fare: "₹72",
    },
    {
        id: 3,
        from: "Shivajinagar",
        to: "Civil Court Metro",
        date: "15 Feb 2026",
        distance: "2.8 km",
        duration: "9 min",
        fare: "₹65",
    },
];

export const stats = {
    totalRides: 128,
    totalDistance: "312 km",
    totalTime: "42 hrs",
    moneySaved: "₹6,540",
};
