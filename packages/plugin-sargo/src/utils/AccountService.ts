import { OnboardType } from "../enums/OnboardType";
import { AUTH, IAuth } from "../interfaces/IAuth";
import { IResponse } from "../interfaces/IResponse";
import { apiOptions } from "../res/api.config";
import Http from "../shared/Http";

/**
 *  Get account details
 * @param req Request data
 * @returns Promise<IResponse>
 */
export async function get(req: IAuth): Promise<IResponse> {
  const _user: IResponse = await getByAddress(req);

  if (_user && _user.payload.data && _user.status === 200) {
    return _user;
  } else {
    return {
      payload: { ...AUTH },
      status: 0,
      message: "",
    };
  }
}

/**
 * Save user profile details to
 * @param req Request data
 * @return Promise<IResponse>
 */
export async function create(req: IAuth): Promise<IResponse> {
  let _user: IResponse = await get(req);

  if (!_user || !_user.payload.data || _user.status !== 200) {
    req.updateType = "NEW_ACCOUNT";
    req.onboardType = OnboardType.NEW;
    req.profile = {
      ...req.profile,
      currencyCode: "KES",
      languageCode: "en",
    };

    const _req = { ...req, url: apiOptions.endPoints.appBaseUrl };

    return await Http.post(`${apiOptions.endPoints.account}/register`, _req);
  } else {
    return await update(req);
  }
}

/**
 * Update profile details on device storage
 * @param req request data
 * @return Promise<IResponse>
 */
export async function update(req: IAuth): Promise<IResponse> {
  let _user: IResponse = await get(req);
  if (_user && _user.payload.data && _user.status === 200) {
    req.updateType = "PROFILE_UPDATE";

    return await Http.post(
      `${apiOptions.endPoints.account}/edit/${req.id}`,
      req
    );
  }

  return _user;
}

/**
 * Change accounts username
 * @param req request data
 * @return Promise<IResponse>
 */
export async function changeUsername(req: IAuth): Promise<IResponse> {
  let _user: IResponse = await get(req);
  if (_user && _user.payload.data && _user.status === 200) {
    return await Http.post(`${apiOptions.endPoints.account}/username`, {
      id: _user.payload.data.id,
      username: req.username,
    });
  }

  return _user;
}

/**
 * Change accounts email
 * @param req request data
 * @return Promise<IResponse>
 */
export async function changeUserEmail(req: IAuth): Promise<IResponse> {
  let _user: IResponse = await get(req);
  if (_user && _user.payload.data && _user.status === 200) {
    return await Http.post(`${apiOptions.endPoints.account}/email`, {
      id: _user.payload.data.id,
      email: req.email,
    });
  }

  return _user;
}

/**
 * Remove account and profile details from device storage
 * @param req request data
 * @return Promise<IResponse>
 */
export async function remove(req: IAuth): Promise<IResponse> {
  let _user: IResponse = await get(req);

  if (_user && _user.payload.data && _user.status === 200) {
    return await Http.delete(`${apiOptions.endPoints.account}/delete`, {
      id: _user.payload.id,
      deleteReason: "Reset Wallet",
    });
  }

  return _user;
}

/**
 * Query user data by id
 * @param req request data
 * @returns Promise<IResponse>
 */
export function getById(req: IAuth): Promise<IResponse> {
  return Http.post(`${apiOptions.endPoints.account}`, { id: req.id });
}

/**
 * Query user data by address
 * @param req request data
 * @returns Promise<IResponse>
 */
export function getByAddress(req: IAuth): Promise<IResponse> {
  return Http.post(`${apiOptions.endPoints.account}/address`, {
    address: req.address,
  });
}

/**
 * Confirm account email address
 * @param token Token
 * @returns Promise<IResponse>
 */
export function confirmEmail(token: string): Promise<IResponse> {
  return Http.post(`${apiOptions.endPoints.account}/confirm`, {
    token: token,
  });
}
