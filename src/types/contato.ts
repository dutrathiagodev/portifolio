export type ContactContent = {
  label: string;
  title: string;
  email: string;
  mailSubjectPrefix: string;
  copyright: string;
  fields: {
    name: string;
    subject: string;
    email: string;
  };
};
