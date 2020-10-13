import { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import Router, { useRouter  } from "next/router";
import Link from "next/link";
import { CircularProgress, Container, Button } from "@material-ui/core";
// імя файлу служить ключем. А за допомогою useRouter() -можемо діставати url і не тільки router.query.id

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
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
  
    <MainLayout title={post.title}>
      <Container>
        <h1 className="center pt">"{post.title}" </h1>
      <hr />
      <p>&ensp;&ensp;{post.body}</p>
      <Button variant="outlined" color="primary" onClick={() => Router.push(("url", "/posts"))}>
      Back to all posts
      </Button>

        {/* <Link href={`/posts/`}>
          <a>Back to all posts</a>
        </Link> */} 
        {/* Особисті спостереження - Router.push бистріше відгукується ніж <Link> */}
       
      </Container>
     
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null };
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();

  return {
    post: post,
  };
};
