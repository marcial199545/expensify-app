"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React,
    Component = _React.Component;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            "h2",
            null,
            props.subTitle
        )
    );
};
Header.defaultProps = {
    title: "indesicion App"
};
var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleRandomClick, disabled: !props.hasOpt },
            "What should i do"
        )
    );
};
var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteOptions },
            "Remove All"
        ),
        props.options.length === 0 && React.createElement(
            "p",
            null,
            "Insert Options"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { handleRemoveOption: props.handleRemoveOption, key: option, optTitle: option });
        })
    );
};
var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.optTitle,
        " ",
        React.createElement(
            "button",
            {
                onClick: function onClick(e) {
                    props.handleRemoveOption(props.optTitle);
                }
            },
            "x"
        )
    );
};

var AddOption = function (_Component) {
    _inherits(AddOption, _Component);

    _createClass(AddOption, [{
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.optionInput.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.optionInput.value = "";
            }
        }
    }]);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.state = {
            error: undefined
        };
        return _this;
    }

    _createClass(AddOption, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit },
                    React.createElement("input", { type: "text", name: "optionInput" }),
                    React.createElement(
                        "button",
                        { type: "submit" },
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(Component);

var IndecisionApp = function (_Component2) {
    _inherits(IndecisionApp, _Component2);

    _createClass(IndecisionApp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handleRemoveOption",
        value: function handleRemoveOption(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (item) {
                        return item !== option;
                    })
                };
            });
        }
    }, {
        key: "handleRandomPick",
        value: function handleRandomPick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return "Enter valid to add option";
            } else if (this.state.options.indexOf(option) > -1) {
                return "This option is duplicated";
            }
            this.setState(function (prevState) {
                return { options: [].concat(_toConsumableArray(prevState.options), [option]) };
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                var jsonOptions = localStorage.getItem("options");
                var options = JSON.parse(jsonOptions);
                if (options !== null) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (error) {
                // Dont save anything
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var jsonOptions = JSON.stringify(this.state.options);
                localStorage.setItem("options", jsonOptions);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("component will unmount");
        }
    }]);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this2 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this2.state = {
            options: _this2.props.options
        };
        _this2.handleDeleteOptions = _this2.handleDeleteOptions.bind(_this2);
        _this2.handleRemoveOption = _this2.handleRemoveOption.bind(_this2);
        _this2.handleRandomPick = _this2.handleRandomPick.bind(_this2);
        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        return _this2;
    }

    _createClass(IndecisionApp, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(Action, { handleRandomClick: this.handleRandomPick, hasOpt: this.state.options.length > 0 }),
                React.createElement(Options, {
                    handleRemoveOption: this.handleRemoveOption,
                    handleDeleteOptions: this.handleDeleteOptions,
                    options: this.state.options
                }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(Component);

IndecisionApp.defaultProps = {
    options: []
};
render(React.createElement(IndecisionApp, null), document.getElementById("root"));
