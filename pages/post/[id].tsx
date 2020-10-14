import { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import Router, { useRouter  } from "next/router";
import { CircularProgress, Container, Button } from "@material-ui/core";
import { NextPageContext } from "next";
import { MyPost } from "../../interfaces/post";
// імя файлу служить ключем. А за допомогою useRouter() -можемо діставати url і не тільки...  router.query.id

interface PostPageProps{
  post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps) {
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
      <div className="center"> 
      <Button  variant="outlined" color="primary" onClick={() => Router.push(( "/posts"))}>
      Back to all posts
      </Button>
</div>
            
      </Container>
     
    </MainLayout>
  );
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}


Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return { post: null };
  }

  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post: MyPost = await response.json();

  return {
    post: post,
  };
};
