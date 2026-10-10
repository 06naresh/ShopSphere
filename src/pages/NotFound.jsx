
import { Link } from "react-router-dom";
import Card from "../shared/components/Card";
import Button from "../shared/components/Button";

function NotFound() {
    return ( 
        <div className="mx-auto max-w-xl">
            <Card className="text-center">
                <p className="text-6xl font-bold text-blue-600">
                    404
                </p>

                <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Page Not Found
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                    The page you are looking for does not exist.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-block no-underline"
                >
                    <Button>
                        Back to Home
                    </Button>
                </Link>
            </Card>
        </div>
     );
}

export default NotFound;