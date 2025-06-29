export type Post = {
    id: String;
    title: String;
    date: String;
    description: String;
    imageSource: String;
}

const SupersetPost: Post = {
    id: "exploring-apache-superset",
    title: "Exploring Apache Superset",
    date: "06/29/2025",
    description: "Recently I had the opportunity to explore Apache Superset. A free, open source, fully featured, and highly customizable business intellegience platform. This post explains how to setup a local Superset instance and explores some customizations I found useful while building with Superset.",
    imageSource: "superset-logo.png"
}

export const POSTS: Post[] = [ SupersetPost ];
export const LATEST_POST: Post = SupersetPost;
export const EMPTY_POST: Post = { id: '', title: '', date: '', description: '', imageSource: '' };

export function getPostById(id: String): Post { 
    return POSTS.filter(post => post.id === id)[0]; 
}