export interface Complaint {
    id?: number;
    occurrenceCode?: string;
    cep: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    description: string;
    image?: string;
    user?: any;
  }
  