// React & Next
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
// Primereact
import { InputText } from "primereact/inputtext";
// Componentes
import PostContainer, { PostProps, ImagesProps } from "../../../components/Post";
import InputWrapper, { InputProps } from "../../../components/newPost";

// Supabase
import { supabase } from "../../../services/supabase";
// Utils
import { changeFormatDate } from "../../../utils/utils";
import Head from "next/head";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function Feed() {
    const [postPinado, setPostPinado] = useState<PostProps[]>([]);
    const [post, setPost] = useState<PostProps[]>([]);
    const [user, setUser] = useState<InputProps[]>([]);
    const [search, setSearch] = useState<string>("");
    const toast = useRef(null);

    const updatePosts = () => {
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
            ).order("data_hora", {
                ascending: false,
            })
            .then((response) => setPost(response?.data as any));

    };
    useEffect(() => {
        const getNomeEmpreendedora = async () => {
            const EmpUser = await userLogged();
            if (EmpUser != "")
                supabase
                    .from("empreendedora")
                    .select("*")
                    .eq("id_empreendedora", EmpUser)
                    .then((response) => setUser(response?.data as any));

            supabase
                .from("publicacao")
                .select(
                    `*,
                            empreendedora(
                            nome,
                            id_empreendedora
                            )`
                )
                .eq("pinado", "true")
                .order("data_hora", {
                    ascending: false,
                })
                .then((response) => setPostPinado(response?.data as any));
        };
        getNomeEmpreendedora();
        updatePosts();
    }, []);

    const userLogged = async () => {
        const usuario = supabase.auth.getSession().then((res) => {
            return res.data.session != null ? res.data.session?.user.id : "";
        });
        return usuario;
    };

    const pesquisa = async () => {
        if (search != "") {
            try {
                await supabase
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
                    .textSearch("legenda", search.toUpperCase(), {
                        type: "websearch",
                    }).order("data_hora", {
                        ascending: false,
                    })
                    .then((response) => {
                        let newPostList = [...post];
                        newPostList = response?.data as any;
                        setPost(newPostList);
                        console.log(newPostList);
                    });
            } catch (err) {
                alert(err);
            }
        } else {
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
                ).order("data_hora", {
                    ascending: false,
                })
                .then((response) => setPost(response?.data as any));
        }
    };
    const Click = () => {
        const getPostImportante = async () => {
            setPost(postPinado);
        };
        getPostImportante();
    };
    return (
        <>
            <Head>
                <title>Feed</title>
            </Head>
            <main>
                <div className="card">
                    <div className="flex flex-wrap align-items-center justify-content-center card-container blue-container">
                        <div
                            className="flex flex-column border-round p-1 m-1"
                            style={{ width: 850 }}
                        >
                            <div className="my-4 p-inputgroup">
                                <InputText
                                    placeholder="Pesquisar conteúdo"
                                    value={search}
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => setSearch(e.target.value)}
                                />
                                <Button
                                    icon="pi pi-search"
                                    onClick={pesquisa}
                                />
                            </div>

                            {user?.map((postInfo, index) => (
                                <InputWrapper
                                    key={index}
                                    id_empreendedora={postInfo.id_empreendedora}
                                    nome={postInfo.nome}
                                    email={postInfo.email}
                                    postIndex={post?.map(
                                        (infoPost, index) =>
                                            infoPost.id_publicacao
                                    )}
                                    updatePost={updatePosts}
                                    toast={toast}
                                />
                            ))}
                            <Button
                                type="button"
                                label="PUBLICAÇÕES IMPORTANTES"
                                badge={postPinado.length + ""}
                                style={{ marginTop: "2%" }}
                                icon={"pi pi-chevron-down"}
                                onClick={Click}
                            />
                            {post?.length > 0
                                ? post.map((postInfo, index) => (
                                      <PostContainer
                                          key={index}
                                          id_publicacao={postInfo.id_publicacao}
                                          id_usuario={postInfo.id_usuario}
                                          empreendedora={postInfo.empreendedora}
                                          usuario={user[0]}
                                          legenda={postInfo.legenda}
                                          data_hora={changeFormatDate(
                                              postInfo.data_hora
                                          )}
                                          pinado={postInfo.pinado}
                                          toast={toast}
                                      />
                                  ))
                                : " "}
                        </div>
                    </div>
                </div>
            </main>
            <Toast ref={toast} position="bottom-left" />
        </>
    );
}
