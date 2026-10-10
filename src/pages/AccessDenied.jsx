import { Link } from "react-router-dom";
import Card from "../shared/components/Card";
import Button from "../shared/components/Button";

function AccessDenied() {
    return ( 
        <div className="mx-auto max-w-xl">
            <Card className="text-center">
                <div className="text-5xl">
                    🔒
                </div>

                <h1 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
                    Access Denied
                </h1>

                <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                    You don't have permission to view this page.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-block no-underline"
                >
                    <Button>
                        Go Home
                    </Button>
                </Link>
            </Card>
        </div>
     );
}

export default AccessDenied;