const SARGO_INTERN_API_KEY = process.env.SARGO_INTERN_API_KEY;
const SARGO_INTERN_ENV = process.env.SARGO_INTERN_ENV;
const SARGO_INTERN_NAME = process.env.SARGO_INTERN_NAME;

const transactionsApiBaseUrl =
  process.env.SARGO_INTERN_TRANSACTIONS_API_BASE_URI;
  const identityApiBaseUrl = process.env.SARGO_INTERN_IDENTITY_API_BASE_URI;
const appBaseUrl = process.env.SARGO_INTERN_APP_BASE_URI;

export const apiOptions = {
    env: SARGO_INTERN_ENV,
    apiKey: SARGO_INTERN_API_KEY,
    name: SARGO_INTERN_NAME,
    endPoints: {
        transactions: `${transactionsApiBaseUrl}/transactions`,
            account: `${identityApiBaseUrl}/account`,
        appBaseUrl: `${appBaseUrl}`,
    }
}