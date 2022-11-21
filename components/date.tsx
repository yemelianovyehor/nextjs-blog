import { parseISO, format } from "date-fns";
import React from "react";

interface DateProps {
  dateString: string;
}

const Date: React.FunctionComponent<DateProps> = (props) => {
  const date = parseISO(props.dateString);
  return (
    <time dateTime={props.dateString}>{format(date, "LLLL d, yyyy")}</time>
  );
};

export default Date;
