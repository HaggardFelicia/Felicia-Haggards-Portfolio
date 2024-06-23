import { PortableTextBlock } from "next-sanity";

export type Page = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
    alt: string;
}