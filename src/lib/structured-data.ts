import { site, links } from '../content/site';

/** schema.org JSON-LD for the practice: a Physician working at a MedicalClinic. */
export function buildStructuredData(siteUrl: URL) {
  const { professional, office, contact, meta } = site;
  const { address } = office;

  const postalAddress = {
    '@type': 'PostalAddress',
    streetAddress: [address.street, address.detail].filter(Boolean).join(', '),
    addressLocality: address.city,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: address.country,
  };

  const openingHoursSpecification = office.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
    opens: h.opens,
    closes: h.closes,
  }));

  const clinicId = new URL('#consultorio', siteUrl).href;
  const physicianId = new URL('#profesional', siteUrl).href;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': clinicId,
        name: office.name,
        url: siteUrl.href,
        telephone: `+${contact.phoneE164}`,
        email: contact.email,
        address: postalAddress,
        openingHoursSpecification,
        medicalSpecialty: 'Dermatology',
        hasMap: address.mapLink,
        description: meta.description,
      },
      {
        '@type': 'Physician',
        '@id': physicianId,
        name: professional.name,
        url: siteUrl.href,
        telephone: `+${contact.phoneE164}`,
        medicalSpecialty: 'Dermatology',
        address: postalAddress,
        openingHoursSpecification,
        workLocation: { '@id': clinicId },
        potentialAction: {
          '@type': 'ReserveAction',
          target: links.booking,
        },
      },
    ],
  };
}
