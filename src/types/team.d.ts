// src/types/team.d.ts
/* Define Interfaces */
export interface TeamMember {
    id: number;
    name: string;
    role: string;
    imageSrc: string;
    bio: string;
    socialLinks: {
        linkedin?: string;
        twitter?: string;
    };
}