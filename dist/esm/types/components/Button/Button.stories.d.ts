declare const _default: {
    title: string;
    component: import("react").FC<import(".").Props>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        children: {
            description: string;
            control: {
                type: string;
            };
        };
        variant: {
            options: string[];
            control: {
                type: string;
            };
        };
        disabled: {
            control: string;
        };
    };
};
export default _default;
export declare const Button1: {
    args: {
        children: string;
        variant: string;
        disabled: boolean;
    };
};
