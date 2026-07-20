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
}

export namespace PFriendSend {
  /** 获取通讯录列表 */
  export const AddressBookList = ProtoMessage.of({
    /** 上一次通讯录的 MD5,如果和服务端一致则返回空列表 */
    md5: ProtoField(2, "string")
  });
}
