import { ReactElement, useEffect, useState } from "react";

// Componentes
import PostContainer, { PostProps } from "../../../components/PostContainer";
import InputWrapper, { InputProps } from "../../../components/InputWrapper";

import { supabase } from "../../../services/supabase";
import LayoutLogged from "../../../components/LayoutLogged";

export default function Feed() {
  const [post, setPost] = useState<PostProps[]>([]);
  const [user, setUser] = useState<InputProps[]>([]);
  var meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  //  Essa função converte o formato da data YYYY/MM/DD para DD-MM, ajustando no card
  function Date(ent: any) {
    var str = "";
    var index = parseInt(str.concat(ent[5], ent[6]));
    var formatação = ent[8] + ent[9] + " " + meses[index - 1];
    return formatação;
  }

  useEffect(() => {
    supabase
      .from("publicacao")
      .select(
        `
       *,
        empreendedora(
          nome
        )
      `
      )
      .then(
        (response) => (setPost(response?.data), console.log(response?.data))
      );
  }, []);

  useEffect(() => {
    const getNomeEmpreendedora = async () => {
      const EmpUser = await userLogged();
      if (EmpUser != "")
        supabase
          .from("empreendedora")
          .select("*")
          .eq("id_empreendedora", EmpUser)
          .then(
            (response) => (setUser(response?.data), console.log(response?.data))
          );
    };
    getNomeEmpreendedora();
  }, []);
  const userLogged = async () => {
    const usuario = supabase.auth.getSession().then((res) => {
      return res.data.session != null ? res.data.session?.user.id : "";
    });
    return usuario;
  };

  // Alguém me ajuda, sou uma cadela do styled components e o arquivo css externo não tava funfando
  const profilePhoto = {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 100,
    marginTop: 15,
    marginLeft: 30,
  };
  
//   const avatarFile = event.target.files[0];
//   const { data, error } = await supabase.storage
//     .from("avatars")
//     .upload("public/avatar1.png", avatarFile);

  return (
    <main className="bg-blue-100">
      <div className="card">
        <div className="flex flex-wrap align-items-center justify-content-center card-container blue-container">
          <div className="border-round p-1 m-1" style={{ width: 850 }}>
            {user?.map((postInfo, index) => (
              <InputWrapper
                key={index}
                id_empreendedora={postInfo.id_empreendedora}
                nome={postInfo.nome}
                email={postInfo.email}
                postIndex = {post.length}
              />
            ))}
            {post?.length > 0
              ? post
                  ?.slice(0)
                  .reverse()
                  .map((postInfo, index) => (
                    <PostContainer
                      key={index}
                      id_publicacao={postInfo.id_publicacao}
                      id_usuario={postInfo.id_usuario}
                      empreendedora={postInfo.empreendedora}
                      legenda={postInfo.legenda}
                      data_hora={Date(postInfo.data_hora)}
                    />
                  ))
              : " "}
          </div>
        </div>
      </div>
    </main>
  );
}
Feed.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <LayoutLogged>{page}</LayoutLogged>
    </>
  );
};
