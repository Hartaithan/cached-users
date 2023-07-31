export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: Company;
  address: any;
}
