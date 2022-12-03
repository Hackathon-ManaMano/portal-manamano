// React & Next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// Primeract
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

export default function LayoutPublic({ children }: React.PropsWithChildren) {
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
    <Button
      label="Entrar"
      iconPos="right"
      icon="pi pi-sign-in"
      className="p-button-primary"
      onClick={() => router.push("/login")}
    />
  );
  return (
    <>
      <Menubar model={items} start={start} end={end} />
      {children}
    </>
  );
}
