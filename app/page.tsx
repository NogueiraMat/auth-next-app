import PrivateRoute from "./utils/routes/PrivateRoutes";

export default function Home() {
  return (
    <PrivateRoute>
      <div className="">Dashboard</div>
    </PrivateRoute>
  );
}
