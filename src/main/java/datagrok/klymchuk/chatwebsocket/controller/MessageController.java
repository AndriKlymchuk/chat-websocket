package datagrok.klymchuk.chatwebsocket.controller;

import datagrok.klymchuk.chatwebsocket.model.Message;
import datagrok.klymchuk.chatwebsocket.model.OutputMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class MessageController {

    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public OutputMessage send(Message message) {
        String time = new SimpleDateFormat("dd.MM.yy HH:mm").format(new Date());
        return new OutputMessage(message.getFrom(),message.getMessage(), time);
    }
}
