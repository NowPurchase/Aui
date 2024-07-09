import { jsx, jsxs } from 'react/jsx-runtime';

const Button = ({ children, variant = "default", disabled = false, onClick, }) => {
    const buttonStyle = () => {
        if (disabled) {
            return "bg-grey text-white cursor-not-allowed";
        }
        switch (variant) {
            case "default":
                return "bg-blue-100 text-white cursor-pointer";
            case "outlined":
                return "bg-transparent text-blue-100 border border-blue-100 cursor-pointer";
            case "secondary":
                return "bg-blue-20 text-blue-100 border border-blue-100 cursor-pointer ";
            default:
                return "bg-blue-100 text-white cursor-pointer";
        }
    };
    return (jsx("button", { disabled: disabled, className: `p-2 w-full rounded-normal ${buttonStyle()} font-medium `, onClick: onClick, children: children }));
};

const SearchIcon = ({ fill }) => {
    return (jsxs("svg", { width: "20", height: "20", viewBox: "0 0 13 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("g", { clipPath: "url(#clip0_6_64)", children: jsx("path", { d: "M9.09037 9.18925L11.214 11.3124L10.5124 12.014L8.38926 9.89035C7.59927 10.5236 6.61665 10.8681 5.60416 10.8667C3.14086 10.8667 1.14166 8.86745 1.14166 6.40415C1.14166 3.94085 3.14086 1.94165 5.60416 1.94165C8.06746 1.94165 10.0667 3.94085 10.0667 6.40415C10.0681 7.41664 9.72366 8.39925 9.09037 9.18925ZM8.09573 8.82134C8.72499 8.17422 9.07642 7.30678 9.075 6.40415C9.075 4.48627 7.52155 2.93332 5.60416 2.93332C3.68628 2.93332 2.13333 4.48627 2.13333 6.40415C2.13333 8.32154 3.68628 9.87498 5.60416 9.87498C6.50679 9.87641 7.37423 9.52498 8.02135 8.89571L8.09573 8.82134Z", fill: `${fill ? fill : "#909090"}` }) }), jsx("defs", { children: jsx("clipPath", { id: "clip0_6_64", children: jsx("rect", { width: "11.9", height: "11.9", fill: "white", transform: "translate(0.150002 0.950012)" }) }) })] }));
};

const SearchBar = ({ value, onChange, handleSearch, }) => {
    return (jsxs("div", { className: "flex border border-grey flex-row justify-between p-2 rounded-lg items-center gap-2 bg-white ", children: [jsx("input", { value: value ?? "", className: "border-none w-full outline-none", onChange: (e) => {
                    onChange(e);
                } }), jsx("button", { onClick: handleSearch, type: "submit", children: jsx(SearchIcon, {}) })] }));
};

const Prompt = ({ isOpen }) => {
    //   const modalRef = useRef(null);
    const backdropStyle = "fixed top-0 left-0 !w-screen !h-screen bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center";
    const dialogContentStyle = "bg-white p-2  w-[50%]";
    return (jsx("div", { className: backdropStyle, 
        //   ref={modalRef}
        style: { display: isOpen ? "inline-block" : "none", position: "fixed" }, children: jsx("div", { className: dialogContentStyle, children: "zdvs" }) }));
};

export { Button, Prompt, SearchBar };
//# sourceMappingURL=index.js.map
