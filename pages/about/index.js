import Router from "next/router";
import MainLayout from "../../components/MainLayout";
import { Container, Button } from "@material-ui/core";

// для навігації - при виклику подій

export default function About({ date: title }) {
  const linkClickHandler = () => {
    Router.push(("url", "/"));
  };

  // Router.push(("url", "/"));  - якщо без двойних дужок, то тупить \ БЕЗ динаміки

  return (
    <MainLayout title="About Page">
      <Container >
    
      <h1 className="center pt size"> {title}  </h1>
     <ul className="about_text">
       <li>Therefore in short, for me, this remarkable tool has from a box server prerendering of pages. This is very good for SEO, and for FMP metrics - the time from page opening to the first meaningful content.</li>
       <li>There is one nuance, we render the page twice: first on the server, then on the client, and the total load time will inevitably increase.</li>
       <li>But this is easily fixed: by adding a dynamic rendering, and a little magic :)</li>
       <li><a href="https://developers.google.com/search/docs/guides/dynamic-rendering">Google recommends</a>  using dynamic rendering if SEO is important.</li>
       <li> <i>And of course I did, I implemented it on this example.</i></li>
     </ul>
     
     <div className="center"> <Button variant="outlined" onClick={linkClickHandler}>Go back to home</Button><Button variant="outlined" onClick={() => Router.push(("url", "/posts"))}>Go to posts</Button> 
     </div>
     
     
      </Container>
    </MainLayout>
  );
  }

About.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/about");
  const data = await response.json();

  return { date: data.title };
};
