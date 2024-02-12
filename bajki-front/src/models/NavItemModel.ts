export interface NavItemsModel {
  [key: string]: NavItemModel;
}

interface NavItemModel {
  path: string;
  content: string;
}