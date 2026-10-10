import { NavLink, Outlet } from "react-router-dom";

function ProductsLayout() {

        const navClass = ({isActive}) => 
            `
                rounded-lg
                px-4
                py-2
                text-sm
                font-medium
                transition
                ${
                    isActive
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }
            `;

    return (
        <section>
            <div className="mb-6 flex flex-wrap gap-2">
                <NavLink 
                    to="/products"
                    end
                    className={navClass}
                >
                    All Products
                </NavLink>

                <NavLink 
                    to="/"
                    className={navClass}
                >
                    Home
                </NavLink>
            </div>

            <Outlet />
        </section>
    )
}

export default ProductsLayout;