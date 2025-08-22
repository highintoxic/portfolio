import { WebSocketServer, WebSocket } from "ws";
import { createServer } from "http";
import { URL } from "url";

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

// Create HTTP server
const server = createServer((req, res) => {
	// Enable CORS
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");

	if (req.method === "OPTIONS") {
		res.writeHead(200);
		res.end();
		return;
	}

	const url = new URL(req.url!, `http://${req.headers.host}`);

	if (req.method === "GET" && url.pathname === "/health") {
		// Health check endpoint
		const healthStatus = {
			status: "healthy",
			timestamp: new Date().toISOString(),
			uptime: process.uptime(),
			websocket: {
				port: 8080,
				connectedClients: clients.size,
				status: "running",
			},
			server: {
				port: 3001,
				status: "running",
			},
		};

		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(healthStatus, null, 2));
	} else if (req.method === "GET" && url.pathname === "/") {
		// Basic info endpoint
		const info = {
			name: "Portfolio WebSocket Server",
			version: "1.0.0",
			endpoints: {
				health: "/health",
				websocket: "ws://localhost:8080",
			},
		};

		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(info, null, 2));
	} else {
		// 404 for other routes
		res.writeHead(404, { "Content-Type": "application/json" });
		res.end(JSON.stringify({ error: "Not Found" }));
	}
});

// Create WebSocket server using the HTTP server
const wss = new WebSocketServer({ server });

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

// Start the HTTP server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
	console.log(`HTTP server started on port ${PORT}`);
	console.log(`Health check available at: http://localhost:${PORT}/health`);
	console.log(`WebSocket server available at: ws://localhost:${PORT}`);
});
