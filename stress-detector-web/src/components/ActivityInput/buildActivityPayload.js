import { activityNumberFields, getYesterdayDateString } from "./activityFormConstants";

function buildActivityPayload(form, status) {
  return {
    activityDate: getYesterdayDateString(),
    activityStatus: status,
    note: form.dailyNote,
    ...Object.fromEntries(
      activityNumberFields.map((fieldName) => [
        fieldName,
        Number(form[fieldName] || 0),
      ]),
    ),
  };
}

export default buildActivityPayload;
