export interface Post {
    id: number,
    attributes: PostAttributes
}

export interface PostAttributes {
    title: string,
    slug: string,
    tags: any[]
    description: string,
    date: string,
    content: string
    createdAt: string,
    updatedAt: string,
    publishedAt: string
}