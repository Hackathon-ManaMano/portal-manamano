// React & Next
import { useEffect, useState } from "react";
// Componentes
import PostContainer, { PostProps } from "../../../components/PostContainer";
import InputWrapper, { InputProps } from "../../../components/InputWrapper";
// Supabase
import { supabase } from "../../../services/supabase";
// Utils
import { changeFormatDate } from "../../../utils/utils";
import Head from "next/head";

export default function Feed() {
  const [post, setPost] = useState<PostProps[]>([]);
  const [user, setUser] = useState<InputProps[]>([]);

  useEffect(() => {
    supabase
      .from("publicacao")
      .select(
        `
       *,
        empreendedora(
          nome,
          id_empreendedora
        )
      `
      )
      .then(
        (response) => (
          setPost(response?.data as any), console.log(response?.data)
        )
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
            (response) => (
              setUser(response?.data as any), console.log(response?.data)
            )
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
    <>
      <Head>
        <title>Feed</title>
      </Head>
      <main>
        <div className="card">
          <div className="flex flex-wrap align-items-center justify-content-center card-container blue-container">
            <div className="border-round p-1 m-1" style={{ width: 850 }}>
              {user?.map((postInfo, index) => (
                <InputWrapper
                  key={index}
                  id_empreendedora={postInfo.id_empreendedora}
                  nome={postInfo.nome}
                  email={postInfo.email}
                  postIndex={post.length}
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
                        data_hora={changeFormatDate(postInfo.data_hora)}
                      />
                    ))
                : " "}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
