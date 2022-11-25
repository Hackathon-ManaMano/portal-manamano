import Image from "next/image";

import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useRouter } from "next/router";

export default function HeaderPublic() {
  const router = useRouter();
  const items = [
    {
      label: "Sobre Nós",
    },
    {
      label: "Quem Apoiamos",
    },
    {
      label: "Contribua",
    },
  ];

  const start = (
    <Image
      src="/icon-manamano.png"
      alt="Logo ManaMano"
      height={40}
      width={40}
      priority
      style={{ aspectRatio: 1 }}
    />
  );

  const end = (
    <Button
    label="Entrar"
    iconPos="right"
    icon="pi pi-sign-in"
    className="p-button-primary"
      onClick={() => router.push("/login")}
    />
  );
  return <Menubar model={items} start={start} end={end} />;
}
