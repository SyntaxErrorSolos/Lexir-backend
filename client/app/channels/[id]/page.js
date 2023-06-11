"use client";
import { useEffect } from "react";


export default function PostList() {
  useEffect(() => {
    const inputElement = document.getElementById("input");
    const parentElement = document.getElementById("maindiv");

    const handleKeyDown = (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        const messageText = inputElement.value.trim();
        if (messageText !== "") {
          const messageContainer = document.createElement("div");
          messageContainer.className = "message-container";

          const messageContent = document.createElement("h1");
          messageContent.innerText = `User - [socket.id]\n${messageText}`;
          messageContent.style.margin = "10px";
          messageContent.style.fontSize = "20px";
          messageContent.style.borderBottomColor = "#166534";
          messageContent.style.borderBottomWidth = "2px";
          messageContent.style.color = "#000000";
          messageContent.style.padding = "10px";
          messageContent.style.fontFamily =
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

          messageContainer.appendChild(messageContent);

          // Insert the new message at the top
          parentElement.insertBefore(
            messageContainer,
            parentElement.firstChild
          );

          inputElement.value = "";
          inputElement.focus();
        } else {
          alert("Empty message.")
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="flex h-screen">
        <div className="m-auto">
          <div
            className="bg-green-500 shadow-green-600 shadow-sm w-[900px] h-[500px] rounded-lg relative overflow-auto"
            id="maindiv"
          ></div>
          <input
            className="bg-green-800 rounded-lg w-[700px] h-14 absolute bottom-20 left-[15rem] text-white font-mono px-5 outline-none"
            placeholder="Send a message"
            id="input"
            type="text"
          ></input>
          <button className="bg-green-800 rounded-lg w-44 h-14 absolute bottom-20 right-[15rem] text-white font-mono px-5">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}




