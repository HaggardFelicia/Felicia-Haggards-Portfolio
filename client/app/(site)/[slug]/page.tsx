import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

// type for the params
type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({params}: Props){
    // getting the page by the slug
    const page = await getPage(params.slug);
        return(
            <div>
                <h1 className="responsive-special-text">
                    {page.title}
                </h1>
                <div className="responsive-p-text text-rose margin4rem">
                    <PortableText value={page.content}/>
                </div>
            </div>
        )
    }