import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../components/MainLayout";
import Link from "next/link";

export default function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);
  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/posts");
      const json = await response.json();
      setPosts(json);
    }
    if (!serverPosts) {
      load();
    }
  }, []);
  if (!posts) {
    return (
      <MainLayout>
        <p className="red">Loading...</p>
      </MainLayout>
    );
  }
  <h2></h2>;

  return (
    <MainLayout title="Post Page">
      <h1>Posts </h1>
      <h3>I get posts from the database (provided by JSON Server)</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>{" "}
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

// оприділяю статичний метод, який виконується на сервері
// getInitialPropsвключает рендеринг на стороне сервера и позволяет выполнять начальное заполнение данных ,
//  что означает отправку страницы с данными, уже заполненными с сервера. Это особенно полезно для SEO .

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return {
    posts: posts,
  };
};
