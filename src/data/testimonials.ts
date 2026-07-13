export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Tej Pandey",
    role: "Customer",
    company: "Tez 888",
    quote: "I recently had the pleasure of working with Modern technology for my website design needs, and I am beyond impressed with the results. Their professionalism, attention to detail, and creative expertise truly set them apart in the industry.",
    rating: 5
  },
  {
    id: "t2",
    name: "Soulful Music",
    role: "Customer",
    company: "Soulful Music Academy",
    quote: "Totally satisfied and services is so good, had best experience with you! Will definitely let you know for next project! Thanks",
    rating: 5
  },
  {
    id: "t3",
    name: "The commerce Wala",
    role: "Customer",
    company: "The Commerce Wala",
    quote: "Design a Learning management system they guide thoroughly this project thank you.",
    rating: 5
  }
];
