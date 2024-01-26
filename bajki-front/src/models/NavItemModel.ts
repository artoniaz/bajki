export interface NavItemsModel {
  [key: string]: NavItemModel;
}

interface NavItemModel {
  path: String;
  content: String;
}