import PrivateRoute from "../utils/routes/PrivateRoutes";
import PageLayout from "../utils/layout/PageLayout";

export default function Cadastro() {
  return (
    <PrivateRoute>
      <PageLayout title="Cadastro">      
        <div className="">Cadastro</div>
      </PageLayout>
    </PrivateRoute>
  );
}
