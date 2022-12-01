import { ReactElement } from "react";
import LayoutLogged from "../../../components/LayoutLogged";

export default function Dashboard() {
  return <h1>Dashboard</h1>;
}
Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <LayoutLogged>{page}</LayoutLogged>
    </>
  );
};
