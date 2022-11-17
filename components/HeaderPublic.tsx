import Image from "next/image";

import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

export default function HeaderPublic(){
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
        <>
          <Image
            src="/logo-manamano.png"
            alt="Logo ManaMano"
            height={40}
            width={120}
          />
        </>
      );
    
      const end = (
        <>
          <Button className="p-button-primary p-button-sm mr-1" label="Entrar" />
        </>
      );
    return (      
    
        <Menubar model={items} start={start} end={end} />
    );
};
