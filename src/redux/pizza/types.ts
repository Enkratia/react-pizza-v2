import { Status } from './slice';

export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};
export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

export type SearchPizzaParams = {
  currentPage: string;
  category: string;
  sortBy: string;
  order: string;
  search: string;
};
