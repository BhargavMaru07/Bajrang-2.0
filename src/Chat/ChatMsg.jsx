import React from "react";
import { ICONS } from "../assets/Icons/icon";

const ChatMsg = ({ chat }) => {
  return (
    !chat.hideInChat && (
      <div
        className={`flex flex-col items-end gap-3 message ${
          chat.role === "model" ? "bot" : "user"
        }-msg`}
      >
        {chat.role === "model" && (
          <span className="w-8 h-8 p-1 rounded-lg bg-btn">
            <ICONS.CHAT_BOT className="fill-[#fff] w-full h-full" />
          </span>
        )}
        <p className="msg-text py-3 px-4 max-w-[75%] bg-btn text-white rounded-[13px] rounded-br-[0px] text-wrap whitespace-pre-line text-[0.9rem]">
          {chat.text}
        </p>
      </div>
    )
  );
};

export default ChatMsg;
