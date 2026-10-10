import Card from "../shared/components/Card";

function AdminPage() {
    return ( 
        <div>
            <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Admin Dashboard
            </h1>

            <Card title="Admin Area">
                <p className="text-gray-600 dark:text-gray-300">
                    Only users with the admin role can access this page.
                </p>
            </Card>
        </div>
     );
}

export default AdminPage;