// React e Next
import Link from "next/link";
import Image from "next/image";

// Primeract
import { Card } from "primereact/card";
import { Sidebar } from "primereact/sidebar";

interface LayoutLoginRegisterProps {
  children: React.ReactNode;
}

export function LayoutLoginRegister({ children }: LayoutLoginRegisterProps) {
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "fixed" }}>
        <Image
          src={"/background-manamano.jpg"}
          alt="background-image"
          fill
          priority
          quality={100}
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 100vw,
            100vw"
        />
        <Sidebar
          visible={true}
          modal={false}
          position="right"
          onHide={() => {}}
          showCloseIcon={false}
          style={{ width: "600px" }}
        >
          <div className="flex justify-content-center">
            <Link href="/">
              <Image
                src="/logo-completo-manamano.png"
                alt="logo"
                height={130}
                width={170}
              />
            </Link>
          </div>
          <Card className="shadow-none border-noround">{children}</Card>
        </Sidebar>
      </div>
    </>
  );
}
