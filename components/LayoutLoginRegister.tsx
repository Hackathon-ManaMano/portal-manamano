// React e Next
import Link from "next/link";
import Image from "next/image";
// Primeract
import { Card } from "primereact/card";
import { Sidebar } from "primereact/sidebar";

interface LayoutLoginRegisterProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode | React.ReactNode[];
}

export function LayoutLoginRegister({
  children,
  title,
  subtitle,
}: LayoutLoginRegisterProps) {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
        }}
      >
        <Image
          src="/background-manamano.jpg"
          alt="background-image"
          fill
          priority
          quality={100}
          sizes="100vw"
          style={{ objectFit: "cover", overflow: "hidden" }}
        />
      </div>
      <Sidebar
        visible={true}
        modal={false}
        position="right"
        onHide={() => {}}
        showCloseIcon={false}
        style={{ width: "500px" }}
      >
        <div className="flex justify-content-center">
          <Link href="/">
            <Image
              src="/logo/logo-completo-manamano.png"
              alt="logo"
              priority
              quality={100}
              height={130}
              width={170}
            />
          </Link>
        </div>
        <Card className="shadow-4 mt-4 flex-column align-items-center justify-content-center ">
          <h2
            className="flex justify-content-center mt-0"
            style={{ color: "#170E49" }}
          >
            {title}
          </h2>
          <h4 className="flex justify-content-center text-secondary mb-0">
            {subtitle}
          </h4>
          {children}
        </Card>
      </Sidebar>
    </>
  );
}
