export type CreateContactData = {
  responsibleId: number;
  firstName?: string;
  lastName?: string;
  phones?: string[];
  emails?: string[];
  tags?: string[];
  attributes?: ContactAttribute[];
  messengers?: string[];
  attachments?: string[];
};

export type ContactAttribute = {
  name: string;
  value: string;
  type?: 0 | 1 | 2 | 3 | 4 | 5; // Optional attribute type. Options: 0 - text, 1 - number, 2 - date, 3 - link, 4 - select, 5 - multiSelect.
};
