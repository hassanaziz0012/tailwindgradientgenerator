export type GradientColor = {
    hex: string;
    position: string | undefined;
    className: string;
};

export type Tab = {
    name: string;
    render: () => React.ReactNode;
}
