// Utils
import { formatViewDate } from "../../utils/utils";

// DataTable Paginator
export const paginatorTemplate =
  "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown";

//Filters
export const dateBodyTemplate = (
  rowData: any,
  field: string,
  hour?: boolean
): string => {
  return formatViewDate(rowData[field] as string, hour);
};
