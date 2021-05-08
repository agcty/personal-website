export interface Tag {
  title: string;
  link: string;
  className: string;
}

export interface Item {
  img?: string;
  link: string;
  title: string;
  description: string;
  id: string;
  createdAt: string;
  tags?: Tag[];
}
