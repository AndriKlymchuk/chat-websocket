# Develop web-based chat application

> ### Description
> It should be a client-server application (or two independent applications:
> server and index.html file with some scripting) written in any language
> and hosted somewhere (localhost is OK too).
>
> User should be able to choose his name, change it anytime, and post any text
> message to the chat.
>
> Do not store messages on the server.
> Use web sockets to connect to the server and get and send messages to other
> users.
>

## Tech, Framework and other Dependencies

* Java version: **OpenJDK 17**
* Gradle version: **7.4.1**
* SpringBoot version: **2.7.8**

## Links:

<details>
<summary>Click to view the links</summary>

- [Heroku](https://datagrok-chat-websocket.herokuapp.com/)

</details>

## Building

<details>
<summary>Instructions for building project</summary>

1. Clone repository local directory.

```shell
git clone https://github.com/AndriKlymchuk/chat-websocket.git
```

2. Building project.

**Gradle:**

```shell
./gradlew :build
```
</details>

## Running

<details>
<summary>Instructions for running project</summary>

for **Gradle:**

```shell
./gradlew :bootRun
```

for **Java:**

```shell
 java -jar similartrello-0.0.1-SNAPSHOT.jar
```

</details>