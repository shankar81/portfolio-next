export type MailBody = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

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
    phone.split("").find((character) => isNaN(parseInt(character))) !==
    undefined;

  return !notANumber;
}

export function buildMailTemplate(body: MailBody): string {
  return `<h1>Hello Mr. Shankar,</h1>
  <table>
    <thead>
      <tr>
        <td>Customer Name</td>
        <td>Customer Phone</td>
        <td>Customer Email</td>
        <td>Customer Message</td>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>${body.name}</td>
        <td>${body.phone}</td>
        <td>${body.email}</td>
        <td>${body.message}</td>
      </tr>
    </tbody>
  </table>
  `;
}
