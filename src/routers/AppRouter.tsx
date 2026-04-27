/**가을 축제 에서는 main.tsx에서 전체 관리를 했었는데,
 * 이번 프로젝트에서는 더 모듈화 시키고 유지보수가 편하게
 * 라우터들을 별도 파일에 분리하는게 어떨까해서
 * 파일을 main.tsx랑 AppRouter.tsx로 분리해놨습니다! **/

import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layouts/Layout";

import ErrorPage400 from "@/pages/error/ErrorPage400";
import ErrorPage500 from "@/pages/error/ErrorPage500";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "error/400",
        element: <ErrorPage400 />,
      },
      {
        path: "error/500",
        element: <ErrorPage500 />,
      },
      {
        path: "*",
        element: (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <p>페이지 제작 중</p>
          </div>
        ),
      },
    ],
  },
]);