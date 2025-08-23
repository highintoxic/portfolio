import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

type Message = ChatMessage | UserJoinMessage | UserLeaveMessage;

const ChatSection = () => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState("");
	const [userCount, setUserCount] = useState(0);
	const [connectionStatus, setConnectionStatus] = useState<
		"connecting" | "connected" | "disconnected"
	>("disconnected");
	const [username, setUsername] = useState("");
	const ws = useRef<WebSocket | null>(null);
	const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const messagesContainerRef = useRef<HTMLDivElement>(null);
	const [isUserScrolling, setIsUserScrolling] = useState(false);

	const connectWebSocket = () => {
		try {
			setConnectionStatus("connecting");
			// Connect to WebSocket server using environment variable
			const wsUrl = import.meta.env.VITE_WS_URL || "ws://localhost:3001";
			ws.current = new WebSocket(wsUrl);

			ws.current.onopen = () => {
				console.log("Connected to WebSocket server");
				setConnectionStatus("connected");
				// Clear any reconnection timeout
				if (reconnectTimeoutRef.current) {
					clearTimeout(reconnectTimeoutRef.current);
					reconnectTimeoutRef.current = null;
				}
			};

			ws.current.onmessage = (event) => {
				try {
					const message: Message = JSON.parse(event.data);
					setMessages((prevMessages) => [...prevMessages, message]);

					if (message.type === "user_join" || message.type === "user_leave") {
						setUserCount(message.userCount);
					}

					// Set username when user joins (for displaying current user)
					if (message.type === "user_join" && !username) {
						setUsername(message.username);
					}
				} catch (error) {
					console.error("Failed to parse WebSocket message:", error);
				}
			};

			ws.current.onclose = (event) => {
				console.log(
					"Disconnected from WebSocket server",
					event.code,
					event.reason
				);
				setConnectionStatus("disconnected");

				// Attempt to reconnect after 3 seconds if not manually closed
				if (event.code !== 1000) {
					reconnectTimeoutRef.current = setTimeout(() => {
						console.log("Attempting to reconnect...");
						connectWebSocket();
					}, 3000);
				}
			};

			ws.current.onerror = (error) => {
				console.error("WebSocket error:", error);
				setConnectionStatus("disconnected");
			};
		} catch (error) {
			console.error("Failed to connect to WebSocket:", error);
			setConnectionStatus("disconnected");
		}
	};

	useEffect(() => {
		connectWebSocket();

		return () => {
			if (reconnectTimeoutRef.current) {
				clearTimeout(reconnectTimeoutRef.current);
			}
			if (ws.current) {
				ws.current.close(1000, "Component unmounting");
			}
		};
	}, []);

	// Auto-scroll to bottom when new messages arrive (only if user hasn't scrolled up)
	useEffect(() => {
		const container = messagesContainerRef.current;
		if (container && !isUserScrolling) {
			const isAtBottom =
				container.scrollHeight - container.scrollTop <=
				container.clientHeight + 50;
			if (isAtBottom) {
				container.scrollTop = container.scrollHeight;
			}
		}
	}, [messages, isUserScrolling]);

	// Handle user scrolling to detect if they've scrolled up
	const handleScroll = () => {
		const container = messagesContainerRef.current;
		if (container) {
			const isAtBottom =
				container.scrollHeight - container.scrollTop <=
				container.clientHeight + 50;
			setIsUserScrolling(!isAtBottom);
		}
	};

	const sendMessage = () => {
		if (input.trim() && ws.current?.readyState === WebSocket.OPEN) {
			const message = {
				type: "message",
				message: input,
			};
			ws.current.send(JSON.stringify(message));
			setInput("");
		}
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			sendMessage();
		}
	};

	return (
		<section
			id='chat'
			className='min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 sm:p-6 lg:p-8'
		>
			<div className='w-full max-w-4xl flex flex-col'>
				<div className='text-center mb-6 flex-shrink-0'>
					<h2 className='text-4xl font-black mb-4'>JOIN THE CONVERSATION</h2>
					<p className='text-lg font-mono text-muted-foreground'>
						REAL-TIME CHAT WITH OTHER VISITORS
					</p>
				</div>

				<div className='brutalist-block bg-card border-4 border-foreground p-0 flex flex-col h-96'>
					<div className='flex justify-between items-center px-4 py-2 border-b-4 border-foreground flex-shrink-0 bg-black/20'>
						<div className='flex flex-col'>
							<h3 className='text-lg font-black text-green-400 font-mono tracking-wide uppercase'>
								&gt; RETRO_CHAT.EXE
							</h3>
							<div className='flex items-center gap-2'>
								<div
									className={`w-1 h-1 ${
										connectionStatus === "connected"
											? "bg-green-400 animate-pulse"
											: connectionStatus === "connecting"
											? "bg-yellow-400 animate-pulse"
											: "bg-red-400"
									}`}
								/>
								<span className='font-mono text-xs text-muted-foreground tracking-wide uppercase'>
									{connectionStatus === "connected"
										? `>> SYS_USER: ${username} <<`
										: connectionStatus === "connecting"
										? ">> INITIALIZING_SYSTEM <<"
										: ">> CONNECTION_FAILED <<"}
								</span>
							</div>
						</div>
						<div className='font-mono text-sm tracking-wide'>
							<div className='text-green-400 font-bold text-right text-sm'>
								[{userCount}]
							</div>
							<span className='text-muted-foreground text-xs uppercase'>
								ACTIVE_USERS
							</span>
						</div>
					</div>

					<div
						ref={messagesContainerRef}
						onScroll={handleScroll}
						className='flex-grow overflow-y-auto p-4 space-y-1 crt-effect min-h-0'
					>
						{messages.length === 0 && connectionStatus === "connected" && (
							<div className='font-mono text-sm text-muted-foreground text-center tracking-wider uppercase'>
								&gt;&gt; Welcome to the retro chat! Start a conversation...
							</div>
						)}
						{messages.length === 0 && connectionStatus === "disconnected" && (
							<div className='font-mono text-sm text-red-400 text-center tracking-wider uppercase'>
								&gt;&gt; Unable to connect to chat server. Please try refreshing
								the page.
							</div>
						)}
						{messages.length === 0 && connectionStatus === "connecting" && (
							<div className='font-mono text-sm text-yellow-400 text-center tracking-wider uppercase'>
								&gt;&gt; Connecting to chat server...
							</div>
						)}
						{messages.map((msg, index) => (
							<div key={index} className='font-mono text-sm leading-tight'>
								{msg.type === "message" && (
									<div className='flex flex-wrap items-baseline gap-1'>
										<span className='text-accent font-bold tracking-wide uppercase text-xs'>
											[{msg.username}]:
										</span>
										<span className='text-green-400 tracking-wide break-all'>
											{msg.message}
										</span>
										<span className='text-muted-foreground text-xs opacity-60 tracking-wider'>
											{msg.timestamp}
										</span>
									</div>
								)}
								{msg.type === "user_join" && (
									<div className='text-green-400 text-xs tracking-wider uppercase opacity-80'>
										*** {msg.username} has entered the system ***
									</div>
								)}
								{msg.type === "user_leave" && (
									<div className='text-red-400 text-xs tracking-wider uppercase opacity-80'>
										*** {msg.username} has left the system ***
									</div>
								)}
							</div>
						))}
					</div>

					<div className='flex px-4 py-2 border-t-4 border-foreground flex-shrink-0 bg-black/20'>
						<div className='flex-grow flex items-center px-2 py-1'>
							<span className='text-muted-foreground font-mono text-xs mr-1'>
								&gt;
							</span>
							<Input
								type='text'
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyPress={handleKeyPress}
								placeholder={
									connectionStatus === "connected"
										? "ENTER_MESSAGE_HERE..."
										: "SYSTEM_OFFLINE..."
								}
								disabled={connectionStatus !== "connected"}
								className='flex-grow bg-transparent border-none font-mono text-xs tracking-wide placeholder:text-muted-foreground placeholder:uppercase disabled:opacity-30 text-foreground'
							/>
						</div>
						<Button
							variant='brutal'
							onClick={sendMessage}
							disabled={connectionStatus !== "connected" || !input.trim()}
							className='brutalist-block ml-3 disabled:opacity-30 bg-green-400/20 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono text-xs tracking-wide uppercase px-2 py-1'
						>
							<Send size={12} className='mr-1' />
							EXEC
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ChatSection;
