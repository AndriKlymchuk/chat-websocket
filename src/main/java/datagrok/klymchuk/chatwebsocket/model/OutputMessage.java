package datagrok.klymchuk.chatwebsocket.model;

public class OutputMessage {
    private String from;
    private String message;
    private String onTime;

    public OutputMessage(String from, String message, String onTime) {
        this.from = from;
        this.message = message;
        this.onTime = onTime;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getOnTime() {
        return onTime;
    }

    public void setOnTime(String onTime) {
        this.onTime = onTime;
    }
}
