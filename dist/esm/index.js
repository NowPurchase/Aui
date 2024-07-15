import React, { useRef, useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

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

var css_248z$1 = ".btn {\n  background-color: #1579BE;\n  border: none;\n  width: 100%;\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 11px 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.btn.primary {\n  background-color: #1579BE;\n  font-weight: 700;\n  color: #fff;\n}\n.btn.primary:hover {\n  box-shadow: 12px 8px 24px 0px rgba(33, 126, 192, 0.2);\n}\n.btn.primary:active {\n  box-shadow: 2px 3px 5px 0px rgba(10, 53, 83, 0.4) inset;\n}\n.btn.secondary {\n  background-color: #E8F2F8;\n  border: 1px solid #1579BE;\n  font-weight: 700;\n  color: #1579BE;\n}\n.btn.secondary:hover {\n  box-shadow: 12px 8px 24px 0px rgba(33, 126, 192, 0.2);\n}\n.btn.secondary:active {\n  box-shadow: 12px 8px 24px 0px rgba(33, 126, 192, 0.2) inset;\n}\n.btn.outlined {\n  background-color: transparent;\n  color: #1579BE;\n  border: 1px solid #1579BE;\n  font-weight: 700;\n}\n.btn.outlined:hover {\n  box-shadow: 12px 8px 24px 0px rgba(33, 126, 192, 0.2);\n}\n.btn.outlined:active {\n  box-shadow: 2px 3px 10px 0px rgba(170, 170, 170, 0.4) inset;\n}\n.btn:disabled {\n  background-color: #AAAAAA;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  transform: none;\n  color: #fff;\n}\n.btn:disabled:hover, .btn:disabled:active {\n  box-shadow: none;\n  transform: none;\n}";
styleInject(css_248z$1);

const Button = ({ children, variant = "primary", disabled = false, onClick, type, }) => {
    return (React.createElement("button", { disabled: disabled, className: `btn ${variant}`, onClick: onClick, type: type ?? "button" }, children));
};

const SearchIcon = ({ fill }) => {
    return (React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 13 13", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("g", { clipPath: "url(#clip0_6_64)" },
            React.createElement("path", { d: "M9.09037 9.18925L11.214 11.3124L10.5124 12.014L8.38926 9.89035C7.59927 10.5236 6.61665 10.8681 5.60416 10.8667C3.14086 10.8667 1.14166 8.86745 1.14166 6.40415C1.14166 3.94085 3.14086 1.94165 5.60416 1.94165C8.06746 1.94165 10.0667 3.94085 10.0667 6.40415C10.0681 7.41664 9.72366 8.39925 9.09037 9.18925ZM8.09573 8.82134C8.72499 8.17422 9.07642 7.30678 9.075 6.40415C9.075 4.48627 7.52155 2.93332 5.60416 2.93332C3.68628 2.93332 2.13333 4.48627 2.13333 6.40415C2.13333 8.32154 3.68628 9.87498 5.60416 9.87498C6.50679 9.87641 7.37423 9.52498 8.02135 8.89571L8.09573 8.82134Z", fill: `${fill ? fill : "#909090"}` })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_6_64" },
                React.createElement("rect", { width: "11.9", height: "11.9", fill: "white", transform: "translate(0.150002 0.950012)" })))));
};

const SearchBar = ({ value, onChange, handleSearch, }) => {
    return (React.createElement("div", { className: "flex border border-grey flex-row justify-between p-2 rounded-lg items-center gap-2 bg-white hover:bg-blue-100 " },
        React.createElement("input", { value: value ?? "", className: "border-none w-full outline-none", onChange: (e) => {
                onChange(e);
            } }),
        React.createElement("button", { onClick: handleSearch, type: "submit" },
            React.createElement(SearchIcon, null))));
};

const Success = () => {
    return (React.createElement("svg", { width: "34", height: "34", viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M17.0002 33.6668C7.79516 33.6668 0.333496 26.2052 0.333496 17.0002C0.333496 7.79516 7.79516 0.333496 17.0002 0.333496C26.2052 0.333496 33.6668 7.79516 33.6668 17.0002C33.6668 26.2052 26.2052 33.6668 17.0002 33.6668ZM17.0002 30.3335C20.5364 30.3335 23.9278 28.9287 26.4283 26.4283C28.9287 23.9278 30.3335 20.5364 30.3335 17.0002C30.3335 13.4639 28.9287 10.0726 26.4283 7.57207C23.9278 5.07159 20.5364 3.66683 17.0002 3.66683C13.4639 3.66683 10.0726 5.07159 7.57207 7.57207C5.07159 10.0726 3.66683 13.4639 3.66683 17.0002C3.66683 20.5364 5.07159 23.9278 7.57207 26.4283C10.0726 28.9287 13.4639 30.3335 17.0002 30.3335ZM15.3385 23.6668L8.26683 16.5952L10.6235 14.2385L15.3385 18.9535L24.7652 9.52516L27.1235 11.8818L15.3385 23.6668Z", fill: "#2BA24C" })));
};

const Prompt = ({ isOpen, closeModal, title }) => {
    const modalRef = useRef(null);
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current?.contains(event.target)) {
            closeModal();
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, modalRef]);
    const backdropStyle = "fixed top-0 left-0  !w-screen !h-screen bg-[#00000080] flex-row justify-center items-center";
    const dialogContentStyle = "bg-white p-2 min-w-[500px] min-h-[200px] rounded";
    return (React.createElement("div", { className: backdropStyle, ref: modalRef, style: {
            display: isOpen ? "flex" : "none",
        } },
        React.createElement("div", { className: dialogContentStyle },
            React.createElement("div", { className: "flex flex-row justify-start gap-1 items-center" },
                React.createElement("div", null,
                    React.createElement(Success, null)),
                React.createElement("div", { className: "text-green-100 font-semibold text-xl" }, title)))));
};

var css_248z = "input {\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  transition: border-color 0.3s, box-shadow 0.3s;\n  width: 100%;\n}\ninput:focus {\n  border-color: #1579BE;\n  box-shadow: 0 0 5px rgba(21, 121, 190, 0.5);\n  outline: none;\n}\ninput::placeholder {\n  color: #aaa;\n  transition: color 0.3s;\n}\ninput:hover {\n  border-color: #474747;\n}\ninput:disabled {\n  background-color: #f5f5f5;\n  border-color: #ddd;\n  cursor: not-allowed;\n}\ninput:read-only {\n  background-color: #fafafa;\n  border-color: #eee;\n  color: #888;\n}\ninput.is-invalid {\n  border-color: #E86A58;\n  box-shadow: 0 0 5px rgba(232, 106, 88, 0.5);\n}\ninput.is-valid {\n  border-color: #2BA24C;\n  box-shadow: 0 0 5px rgba(43, 162, 76, 0.5);\n}\n\n.guidance-message {\n  font-size: 0.875rem;\n  color: #8e44ad;\n  margin-top: 0.25rem;\n}\n\n.error-message {\n  font-size: 0.875rem;\n  color: #E86A58;\n  margin-top: 0.25rem;\n  visibility: hidden;\n}\n.is-invalid + .error-message {\n  visibility: visible;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.form-group .input-feedback {\n  font-size: 0.875rem;\n  color: #E86A58;\n  visibility: hidden;\n}\n.is-invalid + .form-group .input-feedback {\n  visibility: visible;\n}";
styleInject(css_248z);

const Input = ({ isError, placeholderText, onChange, label, value, errorTxt, }) => {
    return (React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: "exampleInput" }, label),
        React.createElement("input", { value: value, type: "text", id: "exampleInput", className: isError ? "is-invalid" : "", placeholder: placeholderText ?? "", onChange: (e) => onChange(e) }),
        isError && React.createElement("div", { className: "error-message" }, errorTxt ?? "")));
};

export { Button, Input, Prompt, SearchBar };
//# sourceMappingURL=index.js.map
