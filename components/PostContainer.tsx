import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";


// https://www.primefaces.org/primereact/carousel/

export interface PostProps {
  id_publicacao: number;
  id_usuario: string;
  empreendedora: {
    nome: string;
  };
  legenda: string;
  data_hora: string;
}

const profilePhoto = {
  backgroundColor: "white",
  width: 50,
  height: 50,
  borderRadius: 100,
  marginTop: 15,
  marginLeft: 35,
};
export const info = {
  color: "black",
  paddingLeft: 20,
  paddingTop: 15,
  marginLeft: 15,
};

const PostWrapper = {
  width: "100%",
  height: "auto",
  marginBottom: "10%",
  backgroundColor: "#170e4935",
  borderRadius: 10,
  boxShadow: "10px 5px 5px #0000001d",
};

const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 5,
  },
  {
    breakpoint: "768px",
    numVisible: 3,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
  },
];

function PostContainer({ data_hora, legenda, empreendedora }: PostProps) {
  return (
    <div>
      <div style={PostWrapper}>
        <div className="grid">
          <Avatar
            label={empreendedora.nome[0]}
            shape="circle"
            image=""
            style={profilePhoto}
          />
          <p style={info}>{empreendedora.nome}</p>
          <p style={info}>{data_hora}</p>
        </div>
        <div style={{ marginLeft: 35 }}>
          <p>{legenda}</p>
        </div>
        <div
          className="flex flex-wrap align-items-center justify-content-center card-container blue-container"
          style={{ marginBottom: "5%" }}
        >
          <div
            className="border-round p-1 m-1 bg-white"
            style={{ width: "90%", height: 400 }}
          >
            {/* <div className="image-gallery"><img alt="0" src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/praias-brasil-sancho.jpg" style={{width:"100%", height:395}} /></div> */}
          </div>
        </div>
        <div className="grid">
          <div style={{ marginLeft: 15, width: "70%" }}>
            <InputTextarea
              style={{ width: "100%", marginBottom: 25, marginLeft: 10 }}
              placeholder="Escreva um comentário..."
              autoResize
            />
          </div>
          <div style={{ marginLeft: 20, marginTop: "1%" }}>
            <Button label="Enviar" icon="pi pi-check" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostContainer;
