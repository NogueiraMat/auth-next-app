import PrivateRoutes from "../utils/routes/PrivateRoutes";
import PageLayout from "../utils/layout/PageLayout";

export default function Characters() {
    return (
        <PrivateRoutes>
            <PageLayout title="Personagens">
                <div>
                    Cards
                </div>
            </PageLayout>   
        </PrivateRoutes>
    );
}