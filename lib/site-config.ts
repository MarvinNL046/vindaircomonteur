// Site configuration for VindAircoMonteur.nl (Netherlands)
export const getSiteConfig = () => {
  const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN ||
                 (typeof window !== 'undefined' ? window.location.hostname : 'vindaircomonteur.nl');

  const configs: Record<string, {
    id: string;
    domain: string;
    name: string;
    description: string;
  }> = {
    'vindaircomonteur.nl': {
      id: 'airco',
      domain: 'vindaircomonteur.nl',
      name: 'VindAircoMonteur.nl',
      description: 'Vind een airco monteur bij jou in de buurt'
    },
    'www.vindaircomonteur.nl': {
      id: 'airco',
      domain: 'vindaircomonteur.nl',
      name: 'VindAircoMonteur.nl',
      description: 'Vind een airco monteur bij jou in de buurt'
    },
    'localhost:3000': {
      id: 'airco',
      domain: 'vindaircomonteur.nl',
      name: 'VindAircoMonteur.nl',
      description: 'Vind een airco monteur bij jou in de buurt'
    },
    'localhost:3001': {
      id: 'airco',
      domain: 'vindaircomonteur.nl',
      name: 'VindAircoMonteur.nl',
      description: 'Vind een airco monteur bij jou in de buurt'
    }
  };

  return configs[domain] || configs['vindaircomonteur.nl'];
};
