import { ReactNode } from "react";

import Footer from "@/templates/Common/footer";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  isMobile: boolean;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-1">
    {props.meta}

    <div className="w-full">
      <div className="py-5 text-xl content">{props.children}</div>
      <Footer isMobile={props.isMobile} />
    </div>
  </div>
);

export { Main };
