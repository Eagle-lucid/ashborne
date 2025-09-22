// src/data/team.ts

/* Data Content */
import type { TeamMember } from '../types/team';

export const team: TeamMember[] = [
    {
        id: 1,
        name: 'David Sterling',
        role: 'Lead Strategy Consultant',
        imageSrc: '/images/team/david-sterling.jpg',
        bio: 'David has over 15 years of experience in digital strategy and transformation. He has worked with Fortune 500 companies to drive growth through innovative digital solutions.',
        socialLinks: {
            linkedin: 'https://www.linkedin.com/in/david-sterling',
            twitter: 'https://twitter.com/davidsterling'
        }
    },
    {
        id: 2,
        name: 'Chloe Williams',
        role: 'Data Analytics Director',
        imageSrc: '/images/team/chloe-williams.jpg',
        bio: 'Chloe is a seasoned data scientist with a passion for turning complex data into clear insights. She has led analytics teams in various industries, helping businesses make data-driven decisions.',
        socialLinks: { 
            linkedin: 'https://www.linkedin.com/in/chloewilliams',
            twitter: 'https://twitter.com/chloewilliams'
        }
    },
    {
        id: 3,
        name: 'James Sportsman',
        role: 'AI Solutions Architect',
        imageSrc: '/images/team/james-sportsman.jpg',
        bio: 'James specializes in AI and machine learning, designing solutions that enhance business processes and customer experiences. He has a strong background in both technology and business strategy.',
        socialLinks: {
            linkedin: 'https://www.linkedin.com/in/jamessportsman',
            twitter: 'https://twitter.com/jamessportsman'
        }
    },
    {
        id: 4,
        name: 'Alice Greene',
        role: 'Marketing & Communications Manager',
        imageSrc: '/images/team/alice-greene.jpg',
        bio: 'Alice brings a wealth of experience in marketing and communications, helping to craft compelling narratives that resonate with audiences. She has a knack for storytelling and brand building.',
        socialLinks: {
            linkedin: 'https://www.linkedin.com/in/alicegreene',
            twitter: 'https://twitter.com/alicegreene'
        }
    }
];