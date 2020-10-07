import next from "next";
import Link from "next/link";
import MainLayout from "../components/MainLayout";
import { Button } from "@material-ui/core";
// оскільки звичайного index.html - тут нема,то можна вказати мета-теги за допомогою компонетну -- Head --

export default function index() {
  return (
    <MainLayout title="Home Page">
      <h1>This application was created with Next.js</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href={"/posts"}>
          <a>Posts</a>
        </Link>
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
        excepturi!
      </p>
      <Button color="primary">Hello World</Button>
    </MainLayout>
  );
}
