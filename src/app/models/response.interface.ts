import { Detail } from './detail.interface';

export interface Response {
  data: Detail[];
  count: number;
  totalPages: number;
  nextPage: string;
}
