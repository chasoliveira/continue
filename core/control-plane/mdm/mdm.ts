export interface LicenseKey {}
export interface LicenseKeyData {}

export function validateLicenseKey(_licenseKey: string): {
  isValid: boolean;
  licenseKeyData?: LicenseKey;
} {
  // License validation disabled in this fork
  return { isValid: true };
}

export function getLicenseKeyData(): LicenseKey | undefined {
  // Enterprise license keys are not used
  return undefined;
}

export function setMdmLicenseKey(_licenseKey: string): boolean {
  // Accept all license keys without validation
  return true;
}
