export function useDevTools() {
  const isDev = process.env.NODE_ENV === 'development';

  const isProDev = isDev ? true : false;

  const fakeTicketData = isDev
    ? {
        subject: 'Test Ticket Subject',
        message: 'This is a test message for debugging.',
        attachmentName: 'example.pdf',
      }
    : null;

  const testReferralId = isDev ? 'devtester123' : null;

  return { isProDev, fakeTicketData, testReferralId };
}
