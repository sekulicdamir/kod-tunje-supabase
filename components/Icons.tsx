
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className={className}
  >
    {children}
  </svg>
);

const LineIconWrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

export const MenuIcon: React.FC<{className?: string}> = ({className}) => <LineIconWrapper className={className}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></LineIconWrapper>;
export const CloseIcon: React.FC<{className?: string}> = ({className}) => <LineIconWrapper className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></LineIconWrapper>;
export const PhoneIcon: React.FC<{className?: string}> = ({className}) => <LineIconWrapper className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></LineIconWrapper>;
export const WhatsAppIcon: React.FC<{className?: string}> = ({className}) => <IconWrapper className={className}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></IconWrapper>;
export const TelegramIcon: React.FC<{className?: string}> = ({className}) => <IconWrapper className={className}><path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></IconWrapper>;
export const MessengerIcon: React.FC<{className?: string}> = ({className}) => <IconWrapper className={className}><path d="M12 2C6.48 2 2 6.03 2 11c0 2.87 1.48 5.43 3.8 7.03V22l3.47-1.9c1.07.3 2.21.46 3.38.46 5.52 0 10-4.03 10-9S17.52 2 12 2zm1.09 12.35l-2.76-2.94-5.4 2.94 5.94-6.3 2.78 2.93 5.38-2.93-5.94 6.3z" /></IconWrapper>;
export const InstagramIcon: React.FC<{className?: string}> = ({className}) => <LineIconWrapper className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></LineIconWrapper>;
export const FacebookIcon: React.FC<{className?: string}> = ({className}) => <LineIconWrapper className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></LineIconWrapper>;
export const MapPinIcon: React.FC<{className?: string}> = ({className}) => <LineIconWrapper className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></LineIconWrapper>;
export const ChevronDownIcon: React.FC<{className?: string}> = ({className}) => <LineIconWrapper className={className}><polyline points="6 9 12 15 18 9"></polyline></LineIconWrapper>;
export const EmailIcon: React.FC<{className?: string}> = ({className}) => <LineIconWrapper className={className}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></LineIconWrapper>;
export const ChevronLeftIcon: React.FC<{className?: string}> = ({className}) => <LineIconWrapper className={className}><polyline points="15 18 9 12 15 6"></polyline></LineIconWrapper>;
export const ChevronRightIcon: React.FC<{className?: string}> = ({className}) => <LineIconWrapper className={className}><polyline points="9 18 15 12 9 6"></polyline></LineIconWrapper>;
export const ViberIcon: React.FC<{className?: string}> = ({className}) => <LineIconWrapper className={className}><path d="M22 12c0 5.5-4.5 10-10 10-1.2 0-2.4-.2-3.5-.6l-4.4 1.1 1.2-4.2C3.2 16.5 2 14.4 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10z"/><path d="M17 14c-1 1.3-2.5 2-4 2-3 0-6-3-6-6 0-1.5.7-3 2-4l1.5 1.5-1 1.5c0 0 1 2 3 4l1.5-1 1.5 1.5z"/></LineIconWrapper>;
