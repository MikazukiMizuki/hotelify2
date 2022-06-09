import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

type Page = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}