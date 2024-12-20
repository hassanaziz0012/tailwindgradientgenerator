import React, { useState } from "react";
import TabButtons from "./TabButtons";
import { Tab } from "../data/types";

export default function Tabs({ tabs }: { tabs: Array<Tab> }) {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].name);

    return (
        <div>
            <TabButtons
                tabs={tabs}
                activeTabState={[activeTab, setActiveTab]}
            />
            <div className=" mt-4">
                {tabs.map((tab, i: number) => {
                    return (
                        activeTab === tab.name && (
                            <div
                                key={i}
                                className=" opacity-0 animate-fadeIn transition-opacity duration-500"
                            >
                                {tab.render()}
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
}
