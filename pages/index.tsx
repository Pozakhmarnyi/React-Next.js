import MainLayout from "../components/MainLayout";


import { Container } from "@material-ui/core";

// оскільки звичайного index.html - тут нема,то можна вказати мета-теги за допомогою компонетну -- Head --

export default function index() {
  return (
    <MainLayout title="Home Page">
      <Container>
        <h1 className="center pt">This is just a simple example...</h1>
        <h2 className="center">Which has a huge potential !</h2>
      </Container>
    </MainLayout>
  );
}
