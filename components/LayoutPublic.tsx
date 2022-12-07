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
        src="/logo/logo-manamano.png"
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
	
    
      <footer className="site-footer pt-6">

        <div className="flex flex-row">

        </div>

        <div className="flex flex-row bg-gray-900 text-center">
          <div className="col-12 mt-6 mb-6">
            <p className="text-xl text-white none" >
						  Rua das Palmeiras, 65 - Botafogo, Rio de Janeiro, RJ - Brasil &emsp;&emsp;&emsp; CEP: 22270-070 	
              &emsp;&emsp;&emsp; Contato: +55 (21)  22869988 / 30821632 &emsp;&emsp;&emsp; Email: manamano@manamano.org.br			
            </p>
          </div>
        </div>

      </footer>
    </>
  );
}
