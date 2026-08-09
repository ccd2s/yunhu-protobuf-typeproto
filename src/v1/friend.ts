import { ProtoField, ProtoMessage } from "@saltify/typeproto";
import { PV1 } from "./index.ts";

export namespace PFriend {
  /** 聊天对象具体数据 */
  export const AddressBookDataList = ProtoMessage.of({
    /** 聊天对象ID */
    chatId: ProtoField(1, "string"),
    /** 聊天对象名称(可能备注) */
    remark: ProtoField(2, "string"),
    /** 聊天对象头像url */
    avatarUrl: ProtoField(3, "string"),
    /**
     * 群权限等级
     * 普通用户无此项(数值为0或无此项), 群主100, 管理员2
     * 只有群列表才有此项
     */
    permissionLevel: ProtoField(4, "int32"),
    /** 免打扰 */
    noDisturb: ProtoField(5, "bool"),
    // field6: ProtoField(6, "int32"),
    /** 聊天对象原始名称 */
    name: ProtoField(8, "string")
  });

  /** 聊天分类数据 */
  export const AddressBookData = ProtoMessage.of({
    /**
     * 聊天对象列表名称。
     * - "用户"
     * - "我加入的群聊"
     * - "机器人"
     */
    listName: ProtoField(1, "string"),
    data: ProtoField(2, AddressBookDataList, "repeated"),
    chatType: ProtoField(3, "int32")
  });

  /** 获取通讯录 */
  export const AddressBookList = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    data: ProtoField(2, AddressBookData, "repeated"),
    md5: ProtoField(3, "string")
  });

  /** 申请/邀请列表数据 */
  export const RequestListData = ProtoMessage.of({
    /** 接收者名称 */
    receiverName: ProtoField(1, "string"),
    /** 接收者头像 */
    receiverAvatar: ProtoField(2, "string"),
    /** 请求方名称 */
    name: ProtoField(3, "string"),
    /** 请求方头像 */
    avatar: ProtoField(4, "string"),
    /** 群组名称 */
    groupName: ProtoField(5, "string"),
    /** 群组头像 */
    groupAvatar: ProtoField(6, "string"),
    /** 邀请者 ID (字段8同此含义) */
    inviterId: ProtoField(7, "string"),
    /** 来源类型 */
    sourceType: ProtoField(9, "int32"),
    /** 目标类型 */
    targetType: ProtoField(10, "int32"),
    /** 目标 ID */
    targetId: ProtoField(11, "string"),
    /** 接收者 ID */
    receiverId: ProtoField(12, "string"),
    /** 处理结果 */
    result: ProtoField(13, "int32"),
    /** 处理时间戳 */
    processedAt: ProtoField(14, "int64"),
    /** 邀请时间戳 */
    inviteAt: ProtoField(16, "int64"),
    /** 邀请时间字符串 */
    inviteAtStr: ProtoField(17, "string"),
    /** 请求 ID */
    requestId: ProtoField(18, "int32"),
    /** 机器人名称 */
    botName: ProtoField(19, "string"),
    /** 机器人头像 */
    botAvatar: ProtoField(20, "string"),
    /** 处理者名称 */
    processorName: ProtoField(22, "string"),
    /** 备注信息 */
    note: ProtoField(23, "string"),
    /** 是否为 VIP */
    isVip: ProtoField(24, "bool")
  });

  /** 申请/邀请列表 */
  export const RequestList = ProtoMessage.of({
    status: ProtoField(1, () => PV1.Status),
    requests: ProtoField(2, RequestListData, "repeated"),
    total: ProtoField(3, "int32"),
    pending: ProtoField(4, "int32")
  });
}

export namespace PFriendSend {
  /** 获取通讯录列表 */
  export const AddressBookList = ProtoMessage.of({
    /** 上一次通讯录的 MD5,如果和服务端一致则返回空列表 */
    md5: ProtoField(2, "string")
  });
}
