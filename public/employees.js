let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Pink Berry';
let amol = 'Amol Shookup';
let aaron = "Aaron D. Tyres";
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol.toLocaleUpperCase()), /*#__PURE__*/React.createElement("li", null, aaron));
ReactDOM.render(element, document.getElementById('content'));