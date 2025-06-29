//Post Blueprint
type Post = {
    title: String;
    date: String;
    description: String;
    imageSource: String;
}

//All actual posts
const SupersetPost: Post = {
    title: "Exploring Apache Superst",
    date: "06/29/2025",
    description: "Recently I had the opprotunity to explore Apache Superset. A free, open source, fully featured, and highly customizable business intellegience platform. This post explains how to setup a local Superset instance and explores some customizations I found useful while building with Superset.",
    imageSource: "superset-logo.png"
}

//All Available Posts
export const POSTS: Post[] = [
    SupersetPost
]