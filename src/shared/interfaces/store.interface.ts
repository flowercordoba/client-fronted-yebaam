import { IAuthUser } from 'src/features';

export interface IReduxState {
  authUser: IAuthUser;
  header: string;
  logout: boolean;
  //
  buyer: object;
  seller: object;
  showCategoryContainer: boolean;
  showNotificationContainer: boolean;
  notification: object;
}
