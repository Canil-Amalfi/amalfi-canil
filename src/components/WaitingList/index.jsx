import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./WaitingList.module.css";
import { returnDate } from "../../utils/returnData";
import Amount from "../Amount";

export default function WaitingList() {
  const [quantidade, setQuantidade] = useState(1);
  const [loading, setLoading] = useState(null);

  const waitingListSchema = z.object({
    nome: z.string().min(1, { message: "*Nome é obrigatório*" }),
    local: z.string().min(1, { message: "*Local é obrigatório*" }),
    email: z.string().email("*Email inválido*"),
    telefone: z.string().min(1, { message: "*Telefone é obrigatório*" }),
    genero: z.string().min(1),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(waitingListSchema),
  });

  const handleSubmitWaitingList = (data) => {
    const formattedDate = returnDate();
    const listed = {
      Data: formattedDate,
      Nome: data.nome,
      Local: data.local,
      Email: data.email,
      Telefone: data.telefone,
      Quantidade: quantidade,
      Gênero: data.genero,
    };

    setLoading(true);

    fetch("https://api.sheetmonkey.io/form/jjD8BaWrK45hRGM7VSMJ9p", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listed),
    }).then(() => {
      setLoading(null);
      reset();
      setQuantidade(1);
    });
  };

  return (
    <form
      className={styles.waitingList__form}
      onSubmit={handleSubmit(handleSubmitWaitingList)}
    >
      <h2>Lista de Espera</h2>
      <span>
        Preencha os campos abaixo e garanta sua reserva na lista de espera para
        os futuros filhotes.
      </span>
      <div className={styles.column__inputs__form}>
        <input
          type="text"
          placeholder="Nome Completo"
          {...register("nome")}
          className={styles.column__inputs}
        />
        {errors.nome && <small>{errors.nome.message}</small>}
        <input
          type="text"
          placeholder="Estado/Cidade"
          {...register("local")}
          className={styles.column__inputs}
        />
        {errors.local && <small>{errors.local.message}</small>}
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className={styles.column__inputs}
        />
        {errors.email && <small>{errors.email.message}</small>}
        <input
          type="tel"
          placeholder="Telefone"
          {...register("telefone")}
          className={styles.column__inputs}
        />
        {errors.telefone && <small>{errors.telefone.message}</small>}
        <Amount handleAmount={setQuantidade} value={quantidade} />
      </div>
      <h3>Gênero Pretendido</h3>
      <div className={styles.flex__inputs__form}>
        <div className={styles.male___radio}>
          <input type="radio" id="male" value="Macho" {...register("genero")} />
          <label htmlFor="male">Macho</label>
        </div>
        <div className={styles.female___radio}>
          <input
            type="radio"
            id="female"
            value="Fêmea"
            {...register("genero")}
          />
          <label htmlFor="female">Fêmea</label>
        </div>
      </div>
      {errors.genero && <small>*Selecione o gênero*</small>}
      <button type="submit">
        {loading ? (
          <img
            src="/images/load-icon.png"
            alt="load icon"
            className={styles.loading}
          />
        ) : (
          "Enviar"
        )}
      </button>
    </form>
  );
}
