export interface Product {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface ModalProps {
  children?: React.ReactNode;
  open:boolean;
  toggleModal: () => void; 
}
export interface ButtonProps {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Типизируем onClick
  children?: React.ReactNode;
  isActive?: boolean;
  disabled?: boolean;
}
export interface SecondSectionProps {
  handleClick: (param: string) => void;
  content: string | null;
}
export interface TabSectionProps {
  onChange: (param: string) => void;
  active: string;
}
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo; // Вложенный объект Geo
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address; // Вложенный объект Address
  phone: string;
  website: string;
  company: Company; // Вложенный объект Company
}
export interface UseInputReturn {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}