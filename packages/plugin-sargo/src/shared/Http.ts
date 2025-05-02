import { request } from "undici";
import { apiOptions } from "../res/api.config";
import { IResponse } from "../interfaces/IResponse";

interface Params {
  headers: any;
}

const httpConfig: Params = {
  headers: {
    Authorization: "",
    apiKey: `${apiOptions.apiKey}`,
    "Content-Type": "application/json",
  },
};

const Http = {
  /**
   * Post request
   * @param url Url endpoint path
   * @param data Post data
   * @returns Promise<IResponse>
   */
  post: async function (url: string, data: any): Promise<IResponse> {
    try {
      const { body, statusCode, headers } = await request(url, {
        method: "POST",
        headers: httpConfig.headers,
        body: JSON.stringify(data),
      });

      const responseData = await body.json();

      return {
        payload: responseData,
        status: statusCode,
        message: headers["status"] as string ?? "OK",
      };
    } catch (error) {
      console.error("[Http POST] error:", error);
      return {
        payload: undefined,
        status: 512,
        message: (error as Error).message,
      };
    }
  },

  /**
   * Get request
   * @param url Url endpoint path
   * @returns Promise<IResponse>
   */
  get: async function (url: string): Promise<IResponse> {
    try {
      const { body, statusCode, headers } = await request(url, {
        method: "GET",
        headers: httpConfig.headers,
      });

      const responseData = await body.json();

      return {
        payload: responseData,
        status: statusCode,
        message: headers["status"] as string ?? "OK",
      };
    } catch (error) {
      console.error("[Http GET] error:", error);
      return {
        payload: undefined,
        status: 512,
        message: (error as Error).message,
      };
    }
  },

  /**
   * Delete request
   * @param url Url endpoint path
   * @param data Delete data
   * @returns Promise<IResponse>
   */
  delete: async function (url: string, data: any): Promise<IResponse> {
    try {
      const { body, statusCode, headers } = await request(url, {
        method: "DELETE",
        headers: httpConfig.headers,
        body: JSON.stringify(data),
      });

      const responseData = await body.json();

      return {
        payload: responseData,
        status: statusCode,
        message: headers["status"] as string ?? "OK",
      };
    } catch (error) {
      console.error("[Http DELETE] error:", error);
      return {
        payload: undefined,
        status: 512,
        message: (error as Error).message,
      };
    }
  },
};

export default Http;
