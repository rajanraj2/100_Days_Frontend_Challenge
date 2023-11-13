export function getLocaleDateString(timezone, locales) {
    const currentDate = new Date();
    const options = { timeZone: timezone };
    const formattedDateString = currentDate.toLocaleDateString(locales, options);  
    return formattedDateString;
  }