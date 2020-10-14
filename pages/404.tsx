import Link from "next/link";
import MainLayout from "../components/MainLayout";
import Router from "next/router";
import {  Container, Button } from "@material-ui/core";

export default function ErrorPage() {
  return (
    <MainLayout>
      <Container>
        <div className="center column">
        <h1 className="error">Error 404</h1>
      <p>The address is incorrect</p>
      <Button variant="outlined" color="primary" className="bBig" onClick={() => Router.push(("url", "/"))}>
      Go to home
      </Button>
        </div>
     
      
      </Container>
      
    </MainLayout>
  );
}
