import React from "react";

interface TabButtonProps {
    tabName: string;
    activeTabState: [string, React.Dispatch<React.SetStateAction<string>>];
}

export default function TabButton({ tabName, activeTabState }: TabButtonProps) {
    const [activeTab, setActiveTab] = activeTabState;

    return (
        <button
            className={`flex-1 py-2 text-center ${
                activeTab === tabName
                    ? "text-blue-500 border-b border-blue-500"
                    : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tabName)}
        >
            {tabName}
        </button>
    );
}
