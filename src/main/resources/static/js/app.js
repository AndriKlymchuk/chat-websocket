let ws = null;
let ws_path = '/websocket';
let mapping_path = '/app/chat';
let messages_path = '/topic/messages';

const $connectBtn = $('#connect-btn');
const $disconnectBtn = $('#disconnect-btn');
const $sendBtn = $("#send-btn");

let $from = $('#from');
let $message = $('#message');
let $messages = $('#messages');

function setConnected(connected) {
    $connectBtn.prop('disabled', connected);
    $disconnectBtn.prop('disabled', !connected);
    $messages.html("");
}

function connect() {
    let socket = new SockJS(ws_path);
    ws = Stomp.over(socket);

    ws.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        ws.subscribe(messages_path, function (greeting) {
            showMessage(JSON.parse(greeting.body));
        });
    });
}

function disconnect() {
    if (ws != null) {
        ws.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendMessage() {
    let data = JSON.stringify({
        'from': $from.val(),
        'message': $message.val()
    });
    ws.send(mapping_path, {}, data);
}

function showMessage(message) {
    let msg ='' +
        '<tr>' +
        '   <td class="text-center text-muted small">'+ message.onTime +'</td>' +
        '   <td class="text-center fw-bold"> '+ message.from +'</td>' +
        '   <td class="">'+ message.message +'</td>' +
        '</tr>';
    $messages.append(msg);
}

$(function () {
    $from.on('submit', function (event) {
        event.preventDefault();
    });

    $connectBtn.click(function () {
        connect();
    });

    $disconnectBtn.click(function () {
        disconnect();
    });

    $sendBtn.click(function () {
        sendMessage();
    });
});