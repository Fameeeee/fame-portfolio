export type Certification = {
  title: string;
  issuer: string;
  issuerLong?: string;
  date: string;
  hours?: number;
  credentialId?: string;
  pdf?: string;
};

export const certifications: Certification[] = [
  {
    title: "Cybersecurity Foundation Course",
    issuer: "NCSA",
    issuerLong: "National Cyber Security Agency, Thailand",
    date: "April 2026",
    hours: 21,
    credentialId: "0975454639TT",
    pdf: "/certifications/cybersecurity-foundation-ncsa.pdf",
  },
];
