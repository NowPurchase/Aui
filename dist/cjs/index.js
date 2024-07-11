'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*\n! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com\n*/*,:after,:before{border:0 solid;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.fixed{position:fixed}.left-0{left:0}.top-0{top:0}.flex{display:flex}.\\!h-screen{height:100vh!important}.min-h-\\[200px\\]{min-height:200px}.\\!w-screen{width:100vw!important}.w-full{width:100%}.min-w-\\[500px\\]{min-width:500px}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.flex-row{flex-direction:row}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-normal{border-radius:4px}.border{border-width:1px}.border-none{border-style:none}.border-blue-100{--tw-border-opacity:1;border-color:rgb(21 121 190/var(--tw-border-opacity))}.border-grey{--tw-border-opacity:1;border-color:rgb(170 170 170/var(--tw-border-opacity))}.bg-\\[\\#00000080\\]{background-color:#00000080}.bg-blue-100{--tw-bg-opacity:1;background-color:rgb(21 121 190/var(--tw-bg-opacity))}.bg-blue-20{--tw-bg-opacity:1;background-color:rgb(208 228 242/var(--tw-bg-opacity))}.bg-grey{--tw-bg-opacity:1;background-color:rgb(170 170 170/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-2{padding:.5rem}.font-medium{font-weight:500}.text-blue-100{--tw-text-opacity:1;color:rgb(21 121 190/var(--tw-text-opacity))}.text-green-100{--tw-text-opacity:1;color:rgb(43 162 76/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.outline-none{outline:2px solid transparent;outline-offset:2px}";
styleInject(css_248z,{"insertAt":"top"});

const Button = ({ children, variant = "primary", disabled = false, onClick, }) => {
    const buttonStyle = () => {
        if (disabled) {
            return "bg-grey text-white cursor-not-allowed";
        }
        switch (variant) {
            case "primary":
                return "bg-blue-100 text-white cursor-pointer";
            case "outlined":
                return "bg-transparent text-blue-100 border border-blue-100 cursor-pointer";
            case "secondary":
                return "bg-blue-20 text-blue-100 border border-blue-100 cursor-pointer ";
            default:
                return "bg-blue-100 text-white cursor-pointer";
        }
    };
    return (jsxRuntime.jsx("button", { disabled: disabled, className: `p-2 w-full rounded-normal ${buttonStyle()} font-medium `, onClick: onClick, children: children }));
};

const SearchIcon = ({ fill }) => {
    return (jsxRuntime.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 13 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("g", { clipPath: "url(#clip0_6_64)", children: jsxRuntime.jsx("path", { d: "M9.09037 9.18925L11.214 11.3124L10.5124 12.014L8.38926 9.89035C7.59927 10.5236 6.61665 10.8681 5.60416 10.8667C3.14086 10.8667 1.14166 8.86745 1.14166 6.40415C1.14166 3.94085 3.14086 1.94165 5.60416 1.94165C8.06746 1.94165 10.0667 3.94085 10.0667 6.40415C10.0681 7.41664 9.72366 8.39925 9.09037 9.18925ZM8.09573 8.82134C8.72499 8.17422 9.07642 7.30678 9.075 6.40415C9.075 4.48627 7.52155 2.93332 5.60416 2.93332C3.68628 2.93332 2.13333 4.48627 2.13333 6.40415C2.13333 8.32154 3.68628 9.87498 5.60416 9.87498C6.50679 9.87641 7.37423 9.52498 8.02135 8.89571L8.09573 8.82134Z", fill: `${fill ? fill : "#909090"}` }) }), jsxRuntime.jsx("defs", { children: jsxRuntime.jsx("clipPath", { id: "clip0_6_64", children: jsxRuntime.jsx("rect", { width: "11.9", height: "11.9", fill: "white", transform: "translate(0.150002 0.950012)" }) }) })] }));
};

const SearchBar = ({ value, onChange, handleSearch, }) => {
    return (jsxRuntime.jsxs("div", { className: "flex border border-red-100 flex-row justify-between p-2 rounded-lg items-center gap-2 bg-white hover:border-red-100 ", children: [jsxRuntime.jsx("input", { value: value ?? "", className: "border-none w-full outline-none", onChange: (e) => {
                    onChange(e);
                } }), jsxRuntime.jsx("button", { onClick: handleSearch, type: "submit", children: jsxRuntime.jsx(SearchIcon, {}) })] }));
};

const Success = () => {
    return (jsxRuntime.jsx("svg", { width: "34", height: "34", viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsxRuntime.jsx("path", { d: "M17.0002 33.6668C7.79516 33.6668 0.333496 26.2052 0.333496 17.0002C0.333496 7.79516 7.79516 0.333496 17.0002 0.333496C26.2052 0.333496 33.6668 7.79516 33.6668 17.0002C33.6668 26.2052 26.2052 33.6668 17.0002 33.6668ZM17.0002 30.3335C20.5364 30.3335 23.9278 28.9287 26.4283 26.4283C28.9287 23.9278 30.3335 20.5364 30.3335 17.0002C30.3335 13.4639 28.9287 10.0726 26.4283 7.57207C23.9278 5.07159 20.5364 3.66683 17.0002 3.66683C13.4639 3.66683 10.0726 5.07159 7.57207 7.57207C5.07159 10.0726 3.66683 13.4639 3.66683 17.0002C3.66683 20.5364 5.07159 23.9278 7.57207 26.4283C10.0726 28.9287 13.4639 30.3335 17.0002 30.3335ZM15.3385 23.6668L8.26683 16.5952L10.6235 14.2385L15.3385 18.9535L24.7652 9.52516L27.1235 11.8818L15.3385 23.6668Z", fill: "#2BA24C" }) }));
};

const Prompt = ({ isOpen, closeModal, title }) => {
    const modalRef = react.useRef(null);
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current?.contains(event.target)) {
            closeModal();
        }
    };
    react.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, modalRef]);
    const backdropStyle = "fixed top-0 left-0  !w-screen !h-screen bg-[#00000080] flex-row justify-center items-center";
    const dialogContentStyle = "bg-white p-2 min-w-[500px] min-h-[200px] rounded";
    return (jsxRuntime.jsx("div", { className: backdropStyle, ref: modalRef, style: {
            display: isOpen ? "flex" : "none",
        }, children: jsxRuntime.jsx("div", { className: dialogContentStyle, children: jsxRuntime.jsxs("div", { className: "flex flex-row justify-start gap-1 items-center", children: [jsxRuntime.jsx("div", { children: jsxRuntime.jsx(Success, {}) }), jsxRuntime.jsx("div", { className: "text-green-100 font-semibold text-xl", children: title })] }) }) }));
};

exports.Button = Button;
exports.Prompt = Prompt;
exports.SearchBar = SearchBar;
//# sourceMappingURL=index.js.map
