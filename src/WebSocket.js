export function WebSocketComponent() {
    const socketRef = useRef(null);
    useEffect(() => {
        socketRef.current = new WebSocket("ws://localhost:8080");

        socketRef.current.onopen = () => {
            console.log("WebSocket connection established");
        }
        socketRef.current.onmessage = (event) => {
            alert(`New ad created: ${event.data}`);
        }
        socketRef.current.onclose = () => {
            console.log("WebSocket connection closed");
        }
        socketRef.current.onerror = (error) => {
            console.error("WebSocket error:", error);
        }
        return () => {
            socketRef.current.close();
        }
    }, []);
}