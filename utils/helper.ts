export function validateEmail(email: string): boolean {
  if (email.length < 0) {
    return false;
  }

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email.toLowerCase());
}

export function validatePhone(phone: string): boolean {
  if (phone.length < 10) {
    return false;
  }

  const notANumber =
    phone.split("").find((character) => isNaN(parseInt(character))) !== undefined;

  return !notANumber;
}
