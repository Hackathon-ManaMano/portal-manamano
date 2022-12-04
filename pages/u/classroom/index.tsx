import { ReactElement } from "react";
import LayoutLogged from "../../../components/LayoutLogged";

export default function ClassRoom() {
  return <h1>Classroom</h1>;
}

ClassRoom.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <LayoutLogged>{page}</LayoutLogged>
    </>
  );
};
