import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../features/layout/components/AppLayout";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import RequireRole from "../features/auth/components/RequireRole";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children: [
            {
                index: true,
                lazy: async () => ({
                    Component: (await import("../pages/Home")).default,
                }),
            },

            {
                path: "products",
                lazy: async () => ({
                    Component: (await import("../features/products/components/ProductsLayout")).default,
                }),
                children: [
                    {
                        index: true,
                        lazy: async () => ({
                            Component: (await import("../pages/Home")).default,
                        }),
                    },
                    {
                        path: ":productId",
                        lazy: async () => ({
                            Component: (await import ("../pages/ProductDetail")).default,
                        }),
                    },
                ],
            },

            {
                path: "cart",
                lazy: async () => ({
                    Component: (await import("../pages/CartPage")).default,
                }),
            },

            {
                path: "login",
                lazy: async () => ({
                    Component: (await import("../pages/LoginPage")).default,
                }),
            },

            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "checkout",
                        lazy: async () => ({
                            Component: (await import("../pages/CheckoutPage")).default,
                        }),
                    },

                    {
                        path: "order-success",
                        lazy: async () => ({
                            Component: (await import("../pages/OrderSuccess")).default,
                        }),
                    },
                ],
            },

            {
                element: <RequireRole role="admin" />,
                children: [
                    {
                        path: "admin",
                        lazy: async () => ({
                            Component: (await import("../pages/AdminPage")).default,
                        }),
                    },
                ],
            },

            {
                path: "access-denied",
                lazy: async () => ({
                    Component: (await import("../pages/AccessDenied")).default,
                }),
            },

            {
                path: "*",
                lazy: async () => ({
                    Component: (await import("../pages/NotFound")).default,
                }),
            },
        ],
    },
]);