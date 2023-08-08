export interface IMenuModel {
  name: string;
  href?: string[];
  icon?: string;
  children?: IMenuModel[];
}