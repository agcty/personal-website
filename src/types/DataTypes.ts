export interface Item {
  img: string;
  link: string;
  title: string;
  description: string;
  id: string;
  tags: { title: string; link: string; className: string }[];
}
