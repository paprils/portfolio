import Page from "@/components/Layout/Page";
import Image from "next/image";
import css from "./Page404.module.css";

const Page404 = () => {
  return (
    <Page>
      <div className={css.page404}>
        <div className={css.page404__image}>
          <Image
            src={"/404.svg"}
            alt={"Pat Strulak 404 page"}
            layout={"fill"}
          />
        </div>
      </div>
    </Page>
  );
};

export default Page404;
