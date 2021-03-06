'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    background: 'none'
  }
};

var YoutubeViewer = function (_React$Component) {
  _inherits(YoutubeViewer, _React$Component);

  function YoutubeViewer(props) {
    _classCallCheck(this, YoutubeViewer);

    var _this = _possibleConstructorReturn(this, (YoutubeViewer.__proto__ || Object.getPrototypeOf(YoutubeViewer)).call(this, props));

    _this._setYoutubeClose = _this._setYoutubeClose.bind(_this);
    return _this;
  }

  _createClass(YoutubeViewer, [{
    key: '_setYoutubeClose',
    value: function _setYoutubeClose() {
      this.props._onYutubeCloser();
    }
  }, {
    key: 'render',
    value: function render() {

      var youtubeSrc = 'https://www.youtube.com/embed/' + this.props.youtubeInfo.currentYtbId + '?autoplay=' + this.props.youtubeInfo.autoplay;

      if (this.props.youtubeInfo.displayFlag) {
        return _react2.default.createElement(
          _reactModal2.default,
          {
            isOpen: true,
            style: customStyles,
            ariaHideApp: false
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('span', { onClick: this._setYoutubeClose, className: 'css-cancel' }),
            _react2.default.createElement('iframe', { id: 'ytplayer', type: 'text/html', width: '640', height: '360', src: youtubeSrc, frameBorder: '0', allowFullScreen: 'allowfullscreen' })
          )
        );
      } else {
        return null;
      }
    }
  }]);

  return YoutubeViewer;
}(_react2.default.Component);

exports.default = YoutubeViewer;