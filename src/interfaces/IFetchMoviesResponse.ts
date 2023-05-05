import IMovie from './IMovie';
import IPagination from './IPagination';

export default interface IFetchMoviesResponse {
  data: IMovie[];
  pagination: IPagination;
}
