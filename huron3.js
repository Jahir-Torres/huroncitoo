function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} 


class Bird extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "clickhandler",

