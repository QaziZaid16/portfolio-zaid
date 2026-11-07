const DEFAULT_SITE_URL = "https://portfolio-zaid-rho.vercel.app";

function normalizeSiteUrl(value?: string): string | undefined {
  if (!value) return undefined;

  try {
    const withProtocol = /^[a-z][a-z\d+.-]*:\/\//i.test(value)
      ? value
      : `https://${value}`;
    return new URL(withProtocol).origin;
  } catch {
    return undefined;
  }
}

export const SITE_URL =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeSiteUrl(process.env.VERCEL_URL) ??
  DEFAULT_SITE_URL;

export function absoluteSiteUrl(path: string, baseUrl?: string): string {
  try {
    return new URL(path, normalizeSiteUrl(baseUrl) ?? SITE_URL).toString();
  } catch {
    return new URL(path, SITE_URL).toString();
  }
}
