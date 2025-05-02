/**TODO: move to library when ready */
export interface IResponse {
  payload: any;
  status: number;
  message: any;
  errors?: [];
}

export const RESPONSE_DEFAULT: IResponse = {
  payload: undefined,
  status: 0,
  message: "",
  errors: [],
};
