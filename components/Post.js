import Link from 'next/link'

export default function Post({post}) {
    return (
        <div class = 'card'>
            <img src="post.frontmatter.cover_image" alt="" />
        </div>
    )
}