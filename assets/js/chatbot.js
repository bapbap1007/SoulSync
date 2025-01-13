// Khôi phục tin nhắn từ Local Storage
document.addEventListener("DOMContentLoaded", function () {
    var chatBox = document.getElementById("chatBox");
    var messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.forEach(function (message) {
        var messageDiv = document.createElement("div");
        messageDiv.style.display = "flex";
        messageDiv.style.justifyContent = "center";
        messageDiv.style.alignItems = "center";
        messageDiv.className = "message " + message.class; messageDiv.textContent = message.text;
        chatBox.appendChild(messageDiv);
    }); chatBox.scrollTop = chatBox.scrollHeight;

});
// Hàm lưu trữ tin nhắn vào Local Storage 
function saveMessage(text, className) {
    var messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push({ text: text, class: className });
    localStorage.setItem("messages", JSON.stringify(messages));
}
// Hàm để gửi tin nhắn và thêm vào khung chat 
function sendMessage() {
    var input = document.getElementById("userInput");
    var chatBox = document.getElementById("chatBox");
    if (input.value.trim() !== " ") {
        var userMessageDiv = document.createElement("div");
        userMessageDiv.className = "user_message";
        userMessageDiv.textContent = input.value;
        userMessageDiv.style.display = "flex";
        userMessageDiv.style.justifyContent = "center";
        userMessageDiv.style.alignItems = "center";
        chatBox.appendChild(userMessageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
        // Tự động cuộn xuống cuối khung chat 
        // // Lưu tin nhắn của người dùng 
        saveMessage(input.value, "user_message");
        // Phản hồi từ hệ thống dựa trên nội dung tin nhắn
        var systemMessage = "";
        if (input.value.toLowerCase() === "hi") { systemMessage = "chào bạn"; }
        else if (input.value.toLowerCase() === "bạn khỏe không") { systemMessage = "cảm ơn, tôi khỏe"; }
        else if (input.value.toLowerCase() === "cách giải stress") {


        }
        if (systemMessage) {
            var systemMessageDiv = document.createElement("div");

            systemMessageDiv.className = "system_message";
            systemMessageDiv.textContent = systemMessage;
            systemMessageDiv.style.display = "flex";
            systemMessageDiv.style.justifyContent = "center";
            systemMessageDiv.style.alignItems = "center";


            console.log([systemMessage]);


            if (systemMessage)

                setTimeout(function () {
                    chatBox.appendChild(systemMessageDiv);
                    chatBox.scrollTop = chatBox.scrollHeight;
                    // Tự động cuộn xuống cuối khung chat 
                    // // Lưu tin nhắn của hệ thống 
                    saveMessage(systemMessage, "system_message");
                }, 2000);
            // Trì hoãn 500ms để phản hồi trông tự nhiên hơn
        }
        // Xóa nội dung ô input sau khi gửi
        input.value = "";
    }
}


document.querySelector(".inputSend").onclick = function () {
    sendMessage();

}