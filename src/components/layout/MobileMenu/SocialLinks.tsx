// src/components/layout/MobileMenu/SocialLinks.tsx
import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import Button from '../../ui/Button';

interface SocialLinksProps {
    onItemClick: (href: string) => void;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ onItemClick }) => {
    const socialIcons = [
        { icon: Twitter, href: 'https://twitter.com/ashborne', label: 'Twitter' },
        { icon: Github, href: 'https://github.com/ashborne', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/company/ashborne', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://instagram.com/ashborne', label: 'Instagram' },
    ];
    return (
        <div className='space-y-4'>
           <Button 
             onClick={() => onItemClick('#consultation')}
             variant='primary'
             className='w-full'
             type='button'>
            Get Consultation
           </Button>

           {/* Social icons */}
           <div>
              {socialIcons.map((social) => {
                const IconComponent = social.icon;
                return (
                    <a 
                      key={social.label}
                      href={social.href}
                      traget='_blank'
                      rel='noopener noreferrer'
                      className='p-2'
                      aria-label={`Visit our {social.label}`}
                    >
                        <IconComponent size={20} />
                    </a>    
                );
              })}
           </div>

           <div>
             © 2025 Ashborne. All rights reserved.
           </div>
        </div>
    );
};