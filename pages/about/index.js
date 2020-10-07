import Router from "next/router";
import MainLayout from "../../components/MainLayout";
// для навігації - при виклику подій

export default function About({ title }) {
  const linkClickHandler = () => {
    Router.push(("url", "/"));
  };

  // Router.push(("url", "/"));  - якщо без двойних дужок, то тупить \ БЕЗ динаміки

  return (
    <MainLayout title="About Page">
      <h1>
        {title}
        {/* About - в url без конретизації, але і не треба писати
      /localhost:3000/about/about   --  двічі about, якщо в цій папці назвати стартову сторінку index.js   І тут незмінно компонент називаєт about*/}
      </h1>
      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push(("url", "/posts"))}>
        Go to posts
      </button>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/about");
  const data = await response.json();

  return { title: data.title };
};
