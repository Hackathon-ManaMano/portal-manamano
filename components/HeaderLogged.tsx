// React & Next
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

// Primereact
import { Avatar } from "primereact/avatar";
import { Menubar } from "primereact/menubar";
import { TieredMenu } from "primereact/tieredmenu";

export default function HeaderLoged() {
  const router = useRouter();
  const menu = useRef(null);
  const items = [
    {
      label: "Materiais de aula",
      command: () => {
        router.push("/classroom");
      },
    },
  ];
  const profile = [
    {
      label: "Perfil",
      icon: "pi pi-user",
    },
    {
      label: "Validar Cadastros",
      icon: "pi pi-lock-open",
    },
    {
      label: "Configurações",
      icon: "pi pi-cog",
    },
    {
      separator: true,
    },
    {
      label: "Sair",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  const start = (
    <Link href="/">
      <Image
        src="/logo-manamano.png"
        alt="Logo ManaMano"
        height={60}
        width={140}
        priority
        quality={100}
        style={{ aspectRatio: 1 }}
      />
    </Link>
  );

  const end = (
    <>
      <TieredMenu model={profile} popup ref={menu} id="overlay_tmenu" />
      <Avatar
        image="/icon-manamano.png"
        className="mr-2"
        size="xlarge"
        shape="circle"
        onClick={(event) => (menu.current as any).toggle(event)}
        aria-haspopup
        aria-controls="overlay_tmenu"
      />
    </>
  );
  return <Menubar model={items} start={start} end={end} />;
}
