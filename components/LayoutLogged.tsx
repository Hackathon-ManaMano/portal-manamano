// React & Next
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
// Primereact
import { Avatar } from "primereact/avatar";
import { Menubar } from "primereact/menubar";
import { TieredMenu } from "primereact/tieredmenu";
// Service
import { ManaManoService } from "../services/manamano_service";
// Supabase
import { supabase } from "../services/supabase";

export default function LayoutLogged({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const menu = useRef(null);
  const [nameUser, setNameUser] = useState<string>("");

  useEffect(() => {
    const getNameUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        const response = await supabase
          .from("empreendedora")
          .select("nome")
          .filter("id_empreendedora", "eq", session.user.id);
        if (response.data) setNameUser(response.data.shift()?.nome);
      }
    };
    getNameUser();
  }, []);

  const items = [
    {
      label: "Materiais de aula",
      command: () => {
        router.push("/u/classroom");
      },
    },
  ];

  const profile = [
    {
      label: "Perfil",
      icon: "pi pi-user",
      command: () => {
        router.push("/u/profile");
      },
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
      command: () => {
        ManaManoService.SignOut();
        router.push("/");
      },
    },
  ];

  const start = (
    <Link href="/u/dashboard">
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
        className="mr-2"
        size="xlarge"
        label={nameUser[0]}
        shape="circle"
        onClick={(event) => (menu.current as any).toggle(event)}
        aria-haspopup
        aria-controls="overlay_tmenu"
      />
    </>
  );

  return (
    <>
      <Menubar model={items} start={start} end={end} />
      {children}
    </>
  );
}
