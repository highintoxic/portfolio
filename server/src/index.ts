import { WebSocketServer, WebSocket } from "ws";

interface ChatMessage {
	type: "message";
	username: string;
	message: string;
	timestamp: string;
}

interface UserJoinMessage {
	type: "user_join";
	username: string;
	userCount: number;
}

interface UserLeaveMessage {
	type: "user_leave";
	username: string;
	userCount: number;
}

interface CursorMoveMessage {
	type: "cursor_move";
	username: string;
	x: number;
	y: number;
}

type Message =
	| ChatMessage
	| UserJoinMessage
	| UserLeaveMessage
	| CursorMoveMessage;

const wss = new WebSocketServer({ port: 8080 });

let userCounter = 0;
const clients = new Map<WebSocket, string>();

wss.on("connection", (ws) => {
	userCounter++;
	const username = `Anon-${userCounter}`;
	clients.set(ws, username);

	console.log(`Client connected: ${username}`);

	const userJoinMessage: UserJoinMessage = {
		type: "user_join",
		username,
		userCount: wss.clients.size,
	};
	broadcast(userJoinMessage);

	ws.on("message", (message) => {
		try {
			const data = JSON.parse(message.toString());

			switch (data.type) {
				case "message":
					const chatMessage: ChatMessage = {
						type: "message",
						username,
						message: data.message,
						timestamp: new Date().toLocaleTimeString(),
					};
					broadcast(chatMessage);
					break;
				case "cursor_move":
					const cursorMessage: CursorMoveMessage = {
						type: "cursor_move",
						username,
						x: data.x,
						y: data.y,
					};
					broadcastToOthers(ws, cursorMessage);
					break;
			}
		} catch (error) {
			console.error("Failed to process message:", error);
		}
	});

	ws.on("close", () => {
		const leavingUsername = clients.get(ws);
		clients.delete(ws);
		console.log(`Client disconnected: ${leavingUsername}`);

		if (leavingUsername) {
			const userLeaveMessage: UserLeaveMessage = {
				type: "user_leave",
				username: leavingUsername,
				userCount: wss.clients.size,
			};
			broadcast(userLeaveMessage);
		}
	});

	ws.on("error", (error) => {
		console.error("WebSocket error:", error);
	});
});

function broadcast(message: Message) {
	const jsonMessage = JSON.stringify(message);
	for (const client of clients.keys()) {
		if (client.readyState === WebSocket.OPEN) {
			client.send(jsonMessage);
		}
	}
}

function broadcastToOthers(sender: WebSocket, message: Message) {
	const jsonMessage = JSON.stringify(message);
	for (const client of clients.keys()) {
		if (client !== sender && client.readyState === WebSocket.OPEN) {
			client.send(jsonMessage);
		}
	}
}

console.log("WebSocket server started on port 8080");
