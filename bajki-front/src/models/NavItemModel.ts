export interface NavItemsModel {
  [key: string]: NavItemModel;
}

interface NavItemModel {
  path: string;
  pathMobile?: string;
  content: string;
}