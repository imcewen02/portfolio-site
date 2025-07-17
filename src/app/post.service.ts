import { ApacheSupersetConfigurationPost } from "./posts/apache-superset-configuration-post";
import { ApacheSupersetSetupPost } from "./posts/apache-superset-setup-post";

export type Post = {
    id: string;
    title: string;
    date: string;
    cardImage: string;
    description: string;
    content: string;
}

export const ALL_POSTS: Post[] = [ ApacheSupersetConfigurationPost, ApacheSupersetSetupPost ];
export const LATEST_POST: Post = ApacheSupersetConfigurationPost;
export const EMPTY_POST: Post = { id: '', title: '', date: '', cardImage: '', description: '', content: '' };

export function getPostById(id: string): Post { 
    return ALL_POSTS.filter(post => post.id === id)[0]; 
}