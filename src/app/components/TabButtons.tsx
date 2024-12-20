import React from "react";
import TabButton from "./TabButton";

interface TabButtonsProps {
    tabs: Array<{ name: string }>;
    activeTabState: [string, React.Dispatch<React.SetStateAction<string>>];
}

export default function TabButtons({ tabs, activeTabState }: TabButtonsProps) {
    const [activeTab, setActiveTab] = activeTabState;

    return (
        <div className="flex border-b border-gray-300">
            {tabs.map((tab, i) => (
                <TabButton
                    key={i}
                    tabName={tab.name}
                    activeTabState={[activeTab, setActiveTab]}
                />
            ))}
        </div>
    );
}
