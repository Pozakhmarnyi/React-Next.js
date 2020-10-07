import Link from "next/link";
import MainLayout from "../components/MainLayout";
import Router from "next/router";

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className="error">Error 404</h1>
      <p>The address is incorrect</p>
      <button className="bBig" onClick={() => Router.push(("url", "/"))}>
        Go to home
      </button>
      {/* <p>
        Please{" "}
        <Link href={"/"}>
          <a>go back </a> to safety
        </Link>
      </p> */}
    </MainLayout>
  );
}
