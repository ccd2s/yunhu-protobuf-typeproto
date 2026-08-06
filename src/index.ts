/**
 * 云湖 API 的基地址
 */
export const BASE_URL = {
  /** v1 路由 */
  v1: "https://chat-go.jwzhd.com/v1/",
  /** web 路由 */
  web: "https://chat-web-go.jwzhd.com/v1/",
  /** websocket 路由 */
  ws: "wss://chat-ws-go.jwzhd.com/",
  /** 音频路由 */
  audio1: "https://chat-audio1.jwznb.com/",
  /** 文件路由 */
  file: "https://chat-file.jwznb.com/",
  /** 文件路由 */
  storage1: "https://chat-storage1.jwznb.com/",
  /** 文件路由 */
  fileOss: "https://chat-file-oss.jwznb.com/",
  /** 图片路由 */
  img: "https://chat-img.jwznb.com/",
  /** 图片路由 */
  img2: "https://chat-img2.jwznb.com/",
  /** 图片路由 */
  img3: "https://chat-img3.jwznb.com/",
  /** 视频路由 */
  video1: "https://chat-video1.jwznb.com/"
} as const satisfies Record<string, string>;

export * from "./v1/index.ts";

export * from "./websocket/index.ts";
