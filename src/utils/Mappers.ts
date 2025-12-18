import dayjs, { Dayjs } from "dayjs";
import { Formats } from "../constants/index";

export type DateWrapper = { date: Dayjs; dateTime: boolean };

export const mapDate = (date?: Date | string): string | undefined => {
  if (!date) {
    return "\n";
  }
  const result = parseDate(date);
  return result?.date.format(
    result.dateTime ? Formats.DATE_TIME_VIEW : Formats.DATE_VIEW
  );
};

export const parseDate = (date?: Date | string): DateWrapper | undefined => {
  if (typeof date === "string") {
    return toDateWrapper(date, date.includes("T"));
  }
  return undefined;
};

export const toDateWrapper = (
  date: Date | string,
  dateTime: boolean
): DateWrapper => ({
  date: dayjs(date, dateTime ? Formats.DATE_TIME : Formats.DATE),
  dateTime,
});
