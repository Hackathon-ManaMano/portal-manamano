import { locale, addLocale } from "primereact/api";

addLocale("pt-br", {
    firstDayOfWeek: 1,
    dayNames: [
        "domingo",
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta",
        "sábado",
    ],
    dayNamesShort: ["dom", "seg", "ter", "quart", "quint", "sex", "sáb"],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    monthNames: [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
    ],
    monthNamesShort: [
        "jan",
        "fev",
        "mar",
        "abr",
        "mai",
        "jun",
        "jul",
        "ago",
        "set",
        "out",
        "nov",
        "dez",
    ],
    today: "Hoje",
    clear: "Limpar",
});

locale("pt-br");
