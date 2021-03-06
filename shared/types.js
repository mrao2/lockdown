// Referrence: https://docs.google.com/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit#gid=663521510
const DATA_ENTRY_STATUS = {
  STANDBY: '1',
  READY: '2',
  DEMO: '3',
  FLAGGED: '4',
};

const DATA_ENTRY = {
  OFFICIAL_PROCLAMATION: '1',
  MEDIA: '2',
  OTHER: '3',
};

// AKA Answer
const MEASURE = {
  YES: '1',
  PARTIAL: '2',
  NO: '3',
  UNCLEAR: '4',
};

// const LOCKDOWN = {
//   NO: '1',
//   PARTIAL: '2',
//   YES: '3',
//   UNCLEAR: '4',
// }

const COUNTRY_STATUS = {
  UNCLEAR: '1',
  NA: '2',
  STATE_OF_CALAMITY: '3',
  STATE_OF_EMERGENCY: '4',
  STATE_OF_ALERT: '5',
  OTHER_YES: '6',
  OTHER_NO: '7',
  STATE_OF_NATURAL_DISASTER: '8',
  STATE_OF_NATIONAL_DISASTER: '9',
}

// AKA In & Out
const TRAVEL = {
  YES: '1',
  PARTIALLY: '2',
  NO: '3',
  UNCLEAR: '4',
  NA: '5',
};

const GLOBAL_COUNTRY_STATUS = {
  NO_DATA: '1',
  ACTIVE: '2',
  DEMO: '3',
  DELETE: '4',
};

const UPDATE = {
  NEW_ENTRY: '1',
  ANNOUNCEMENTS: '2',
  RECTIFICATIONS: '3',
  PROMOTING_OTHER_PROJECTS: '4',
  PROMOTING_PETITIONS: '5',
};

const UPDATE_STATUS = {
  STANDBY: '1',
  READY: '2',
  DEMO: '3',
  FLAGGED: '4',
}

module.exports = {
  DATA_ENTRY_STATUS: DATA_ENTRY_STATUS,
  DATA_ENTRY: DATA_ENTRY,
  MEASURE: MEASURE,
  COUNTRY_STATUS: COUNTRY_STATUS,
  TRAVEL: TRAVEL,
  GLOBAL_COUNTRY_STATUS: GLOBAL_COUNTRY_STATUS,
  UPDATE: UPDATE,
  UPDATE_STATUS: UPDATE_STATUS,
}