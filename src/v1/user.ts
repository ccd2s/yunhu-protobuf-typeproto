import { ProtoField, ProtoMessage } from "@saltify/typeproto";
import { PV1 } from "./index.ts";

export namespace PUser {
  export const SelfInfoData = ProtoMessage.of({
    id: ProtoField(1, "string"),
    name: ProtoField(2, "string"),
    avatarUrl: ProtoField(4, "string"),
    avatarId: ProtoField(5, "int64"),
    phone: ProtoField(6, "string"),
    email: ProtoField(7, "string"),
    coin: ProtoField(8, "double"),
    isVip: ProtoField(9, "bool"),
    vipExpiredTimestamp: ProtoField(10, "int64"),
    invitationCode: ProtoField(12, "string")
  });

  /**
   * 获取自身信息
   */
  export const SelfInfo = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, SelfInfoData)
  });

  /**
   * 勋章信息
   */
  export const MedalInfo = ProtoMessage.of({
    /** 勋章 ID */
    id: ProtoField(1, "uint64"),
    /** 勋章名称 */
    name: ProtoField(2, "string"),
    /** 勋章顺序 */
    sort: ProtoField(5, "uint64")
  });

  /**
   * 备注信息
   */
  export const RemarkInfo = ProtoMessage.of({
    /** 备注名 */
    remarkName: ProtoField(1, "string"),
    /** 手机号 */
    phone: ProtoField(2, "string"),
    /** 其他备注（格式为 JSON，示例：'[{"key":"他是","value":"我的朋友"},{"key":"职业","value":"打工人"}]'） */
    extraRemark: ProtoField(3, "string")
  });

  /**
   * 个人信息
   */
  export const ProfileInfo = ProtoMessage.of({
    /** 该用户上次活跃时间 */
    lastActiveTime: ProtoField(1, "string"),
    /** 简介 */
    introduction: ProtoField(2, "string"),
    /** 性别: 1-男，2-女，3-其他 */
    gender: ProtoField(3, "int32"),
    /** 生日时间戳 */
    birthdayTimestamp: ProtoField(4, "uint64"),
    /** 城市 */
    city: ProtoField(5, "string"),
    /** 地区 */
    district: ProtoField(6, "string"),
    /** 详细地址 */
    address: ProtoField(7, "string")
  });

  export const GetUserData = ProtoMessage.of({
    /** 用户 id */
    id: ProtoField(1, "string"),
    /** 用户名 */
    name: ProtoField(2, "string"),
    /** 名称 ID */
    nameId: ProtoField(3, "uint64"),
    /** 头像 URL */
    avatarUrl: ProtoField(4, "string"),
    /** 头像 ID */
    avatarId: ProtoField(5, "uint64"),
    /** 勋章信息 */
    medal: ProtoField(6, MedalInfo, "repeated"),
    /** 注册时间,格式: YYYY-MM-DD hh:mm:ss */
    registerTime: ProtoField(7, "string"),
    /** 免打扰 */
    doNotDisturb: ProtoField(8, "bool"),
    /** 封禁 ID */
    banId: ProtoField(9, "int64"),
    /** 封禁结束时间(时间戳),永久无此项 */
    banUntilTimestamp: ProtoField(10, "int64"),
    /** 在线天数 */
    onlineDay: ProtoField(11, "int32"),
    /** 连续在线天数 */
    continuousOnlineDay: ProtoField(12, "int32"),
    /** 是否为 vip */
    isVip: ProtoField(13, "bool"),
    /** VIP 过期时间(时间戳) */
    vipExpiredTimestamp: ProtoField(14, "uint64"),
    /** VIP 情况 */
    vipstatus: ProtoField(15, "int32"),
    /** 黑名单 */
    isBlocked: ProtoField(16, "bool"),
    /** 置顶会话 */
    top: ProtoField(17, "bool"),
    /** 备注信息 */
    remarkInfo: ProtoField(18, RemarkInfo),
    /** 用户资料信息 */
    profileInfo: ProtoField(19, ProfileInfo),
    /** IP 归属地（国家） */
    ipGeo: ProtoField(20, "string"),
    /** 封禁原因 */
    banReason: ProtoField(21, "string")
  });

  /**
   * 获取用户信息
   */
  export const GetUser = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, GetUserData)
  });

  /**
   * 获取自身勋章
   */
  export const GetSelfMedal = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, MedalInfo, "repeated")
  });
}

export namespace PUserSend {
  /**
   * 获取用户信息
   */
  export const GetUser = ProtoMessage.of({
    data: ProtoField(2, "string")
  });

  /**
   * 更改自身名称
   *
   * 响应 {@link PV1.Base}
   */
  export const EditNickname = ProtoMessage.of({
    /** 欲修改的名称 */
    name: ProtoField(3, "string")
  });

  /**
   * 更改自身头像
   *
   * 响应 {@link PV1.Base}
   */
  export const EditAvatar = ProtoMessage.of({
    /** 完整 URL(https://...) */
    url: ProtoField(2, "string")
  });
}
