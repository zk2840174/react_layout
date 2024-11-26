import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import BasicLayout from "../layout/BasicLayout.tsx";

const MainPage = lazy(() => import("../pages/MainPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

export const Loading = <div>Loading...</div>;

const mainRouter = createBrowserRouter([
    {
        path: "/", // 레이아웃 컴포넌트를 최상위로 설정
        element: (
            <Suspense fallback={Loading}>
                <BasicLayout /> {/* Layout 적용 */}
            </Suspense>
        ),
        children: [
            {
                index: true, // 기본 경로 ("/")
                element: (
                    <Suspense fallback={Loading}>
                        <MainPage />
                    </Suspense>
                ),
            },
            {
                path: "about", // "/about" 경로
                element: (
                    <Suspense fallback={Loading}>
                        <AboutPage />
                    </Suspense>
                ),
            },
            {
                path: "contact", // "/contact" 경로
                element: (
                    <Suspense fallback={Loading}>
                        <ContactPage />
                    </Suspense>
                ),
            },
        ],
    },
]);

export default mainRouter;