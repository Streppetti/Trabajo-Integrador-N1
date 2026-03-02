import Sidebar from "../components/Sidebar";
import { Outlet, useParams } from "react-router-dom";

const ChatDashboard = () => {
    const { id } = useParams();

    return (
        <div className="chat-layout">
            <div className={`sidebar-panel ${id ? 'hidden-mobile' : ''}`}>
                <Sidebar />
            </div>
            <div className={`chat-panel ${id ? 'visible-mobile' : ''}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default ChatDashboard;
