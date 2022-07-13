/* eslint-disable @next/next/no-img-element */
import { BlogPost } from '../../../data/@types/BlogPostInterface';
import styles from './PostList.module.css';
import Link from 'next/Link';


export default function PostList({ posts }: { posts: BlogPost[] }) {
    return <ul className={styles['post-list']}>
        {
            posts.map(post => (
                <PostListItem key={post.id} post={post}/>
                ))}
    </ul>;
}

export function PostListItem({ post }: { post: BlogPost }){
    return (
    <li className={styles['post-list-item']}>
        <Link href={`posts/${post.slug}`} >
            <a>
                <img className={styles['post-picture']} src={post.picture} alt={post.title}/>
                <h2 className={styles['post-title']} >{post.title}</h2>
                <p className={styles['post-p']} >{post.description}</p>
            </a>
        </Link>
        
    </li>
    );
}