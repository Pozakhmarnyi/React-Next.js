import next from "next";
import Link from "next/link";
import MainLayout from "../components/MainLayout";
import { Button } from "@material-ui/core";

import { Container } from "@material-ui/core";

// оскільки звичайного index.html - тут нема,то можна вказати мета-теги за допомогою компонетну -- Head --

export default function index() {
  return (
    <MainLayout title="Home Page">
      <Container>
        <h1 className="center pt">This is just a simple example...</h1>
        <h2 className="center">Which has a huge potential !</h2>

        {/* <Button color="primary">
          <Link href="/about">
            <a>About</a>
          </Link>
        </Button>

        <Button color="primary">
          <Link href={"/posts"}>
            <a>Posts</a>
          </Link>
        </Button>

        <p>
          Faccc Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Perspiciatis, excepturi!
        </p> */}
      </Container>
    </MainLayout>
  );
}
