export interface Item {
  img?: string;
  link: string;
  title: string;
  description: string;
  id: string;
  createdAt: string;
  tags?: { title: string; link: string; className: string }[];
}
