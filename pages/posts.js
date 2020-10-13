import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../components/MainLayout";
import Link from "next/link";
import { CircularProgress, Container } from "@material-ui/core";

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
        <div className="center pt">
          <CircularProgress />
          <p className="red">Loading...</p>
        </div>
      </MainLayout>
    );
  }
  

  return (
    <MainLayout title="Post Page">
      <Container>
      <h1 className="center pt">Posts </h1>
      <h3 className="center">I get posts from the database (in this case it is provided by its own JSON server)</h3>
      <ul className="my_post ">
        {posts.map((post) => (
          <li className="center" key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>{" "}
          </li>
        ))}
      </ul>
      </Container>
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
