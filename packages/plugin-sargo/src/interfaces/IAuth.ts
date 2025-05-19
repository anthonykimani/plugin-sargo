import { OnboardType } from "../enums/OnboardType";
import { INotificationSetting } from "../interfaces/INotificationSetting";
import { NotificationSetting } from "../enums/NotificationSetting";
import { RegistrationStatus } from "../enums/RegistrationStatus";
import { IPaymentMethod } from "./IPaymentMethod";
import { IUserTier } from "./ITier";

/**TODO: move to library when ready */
export interface IProfile {
  username: string;
  languageCode: string;
  currencyCode: string;
  recoverySaved: boolean;
  minTxAmount?: number;
  maxTxAmount?: number;
  requirePin: boolean;
  shareAnalytics: boolean;
  viewAddressInfo: boolean;
  paymentMethod: IPaymentMethod[];
  notifications: INotificationSetting[];
  imgPath?: string;
  registered?: boolean;
}

const _notificationsTopics: string[] = Object.keys(NotificationSetting).filter(
  (NotificationSetting) => NotificationSetting
);

let _ns: INotificationSetting[] = [];

for (let i = 0; i < _notificationsTopics.length; i++) {
  _ns.push({
    notification: _notificationsTopics[i] as NotificationSetting,
    active: true,
    description: "",
  });
}

export const _notificationSettings = _ns;

export const _profile: IProfile = {
  username: "",
  languageCode: "",
  currencyCode: "",
  registered: false,
  recoverySaved: false,
  requirePin: false,
  shareAnalytics: true,
  viewAddressInfo: false,
  paymentMethod: [],
  notifications: _notificationSettings,
};

export interface IAddress {
  privateKey: string;
  publicKey: string;
  address: string;
  mnemonic: string;
  rsaPrivate: string;
  rsaPublic: string;
}

export interface IAccount {
  address: string;
}

export const _account: IAccount = {
  address: "",
};

export const _wallet: IAddress = {
  privateKey: "",
  publicKey: "",
  address: "",
  mnemonic: "",
  rsaPrivate: "",
  rsaPublic: "",
};

export interface IAuth {
  id: string;
  address: string;
  profile: IProfile;
  username: string;
  account: IAccount;
  wallet: IAddress;
  onboardType: OnboardType;
  fullname: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  phoneNumberConfirmStatus?: RegistrationStatus;
  countryCode: string;
  email: string;
  emailConfirmed: boolean;
  emailConfirmStatus?: RegistrationStatus;
  password: string;
  regKey: string;
  twoFactorEnabled: boolean;
  registered: boolean;
  created: Date;
  lastUpdated: Date;
  updateType: string;
  deviceId: string;
  browserId: string;
  accessToken: string;
  disabled?: boolean;
  disableReason?: string;
  lastDisabled?: Date | null;
  accessFailedCount: number;
  lockoutEndDateUtc: Date | null;
  lockoutEnabled: boolean;
  deleted?: boolean;
  deleteReason?: string;
  deleteDate?: Date | null;
  pin?: string;
  newPin?: string;
  userTier?: Array<IUserTier>;
}

export const AUTH: IAuth = {
  profile: _profile,
  account: _account,
  username: "",
  wallet: _wallet,
  onboardType: OnboardType.NEW,
  id: "",
  deviceId: "",
  browserId: "",
  disabled: false,
  disableReason: "",
  lastDisabled: null,
  created: new Date(),
  lastUpdated: new Date(),
  deleted: false,
  deleteReason: "",
  deleteDate: null,
  address: "",
  fullname: "",
  firstname: "",
  lastname: "",
  phoneNumber: "",
  phoneNumberConfirmed: false,
  phoneNumberConfirmStatus: undefined,
  countryCode: "",
  email: "",
  emailConfirmed: false,
  emailConfirmStatus: undefined,
  password: "",
  regKey: "",
  twoFactorEnabled: false,
  registered: false,
  updateType: "",
  accessToken: "",
  accessFailedCount: 0,
  lockoutEndDateUtc: null,
  lockoutEnabled: false,
};

export interface ISession {
  uuid: string;
  accessToken: string;
  email: string;
  name: string;
  timestamp: number;
}
