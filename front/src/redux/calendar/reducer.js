import dayjs from "dayjs";
import { formatMonth } from "../../services/calendar";
import { CALENDAR_SET_MONTH } from "./actions";

const day = dayjs();

const init = formatMonth(day);

const calendarReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
};

export default calendarReducer;
