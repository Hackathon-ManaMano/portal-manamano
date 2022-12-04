import C from "./constants";
/**
 * Ativa o toast de feedback quando a mensagem for warn ou success.
 *
 * @param {string, string, string}
 *  { severity, summary, detail } - Objeto que contém tipo, título e conteúdo da mensagem, respectivamente.
 * @param {Toast} toast - Componente Toast que ativa o display de feedback.
 *
 */
export function showMessage(
  severity: string,
  summary: string,
  detail: string,
  toast: any
): void {
  // @ts-ignore: Object is possibly 'null'. PrimeReact limitation.
  toast.current?.show({
    severity: severity,
    summary: summary,
    detail: detail,
    life: 3000,
  });
}

/**
 * Ativa o toast de feedback quando a mensagem for warn ou success.
 *
 * @param {string, string, string}
 *  { severity, summary, detail } - Objeto que contém tipo, título e conteúdo da mensagem, respectivamente.
 * @param {Toast} toast - Componente Toast que ativa o display de feedback.
 *
 */
export function showMessageError(
  summary: string,
  detail: string,
  toast: any
): void {
  // @ts-ignore: Object is possibly 'null'. PrimeReact limitation.
  toast.current?.show({
    severity: C.SERVER_ERROR,
    summary: summary,
    detail: detail,
    life: 3000,
  });
}

/**
 * Formata as datas no formato ISO para o formato pt-br.
 *
 * @param {string} date - Data a ser formatada.
 * @param {boolean} hour - Parâmetro opcional para formação com horário.
 *
 * @return {string} Data formatada para o formato pt-br.
 */
export function formatViewDate(date: string, hour?: boolean): string {
  if (date) {
    if (hour) {
      return new Date(date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
  return "";
}
