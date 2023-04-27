const white = '#fcfaf0';
// const black = '#593e2c';
const faded = 'rgba(0, 0, 0, 0.1)';
const ocCoffee0 = '#e2dcd8';
// const ocCoffee1 = '#e2dcd8';
const ocCoffee2 = '#c6bab3';
const ocCoffee3 = '#c6bab3';
const ocCoffee4 = '#aa998e';
const ocCoffee5 = '#aa998e';
const ocCoffee6 = '#8f796c';
const ocCoffee7 = '#745b4b';
const ocCoffee8 = '#593e2c';
const ocCoffee9 = '#593e2c';

exports.decorateBrowserOptions = defaults => Object.assign({}, defaults, {
  titleBarStyle: '',
  transparent: true,
  frame: false,
});

exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor: white,
  foregroundColor: ocCoffee7,
  selectionColor: faded,
  borderColor: white,
  cursorColor: ocCoffee9,
  colors: {
    black: ocCoffee8,
    red: ocCoffee7,
    green: ocCoffee6,
    yellow: ocCoffee5,
    blue: ocCoffee9,
    magenta: ocCoffee4,
    cyan: ocCoffee3,
    white,
    lightBlack: ocCoffee8,
    lightRed: ocCoffee7,
    lightGreen: ocCoffee6,
    lightYellow: ocCoffee5,
    lightBlue: ocCoffee9,
    lightMagenta: ocCoffee4,
    lightCyan: ocCoffee3,
    lightWhite: ocCoffee0,
  },
  css: `
    ${config.css}
    .hyper_main {
      border: none !important;
    }

    .header_header {
      color: ${ocCoffee9};
    }

    .header_windowHeaderWithBorder {
      border-color: ${white} !important;
    }

    .tabs_list {
      border-bottom: 1px solid ${ocCoffee2};
      margin-left: 0;
    }

    .tabs_borderShim {
      border-color: ${ocCoffee2} !important;
    }

    .tab_tab {
      border: 0;
    }

    .tab_tab.tab_active {
      background: ${white};
      color: ${ocCoffee9};
    }

    .tab_tab:not(.tab_active) {
      background: ${ocCoffee0};
      color: ${ocCoffee3};
    }

    .tab_tab:not(.tab_active):hover {
      color: ${ocCoffee9};
    }

    .tab_icon {
      top: 9px;
      width: 16px;
      height: 16px;
      color: ${ocCoffee9};
      border-radius: 3px;
      background-color: ${white};
    }

    .tab_icon:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${ocCoffee7};
      -webkit-mask-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA5IDkiPjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcG9pbnRzPSI0Ljk1IDQuMjQzIDguNDg1IC43MDcgNy43NzggMCA0LjI0MyAzLjUzNiAuNzA3IDAgMCAuNzA3IDMuNTM2IDQuMjQzIDAgNy43NzggLjcwNyA4LjQ4NSA0LjI0MyA0Ljk1IDcuNzc4IDguNDg1IDguNDg1IDcuNzc4Ii8+PC9zdmc+');
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-size: 9px;
      -webkit-mask-position: center;
      transition: background 150ms ease;
    }

    .tab_icon:hover {
      background-color: ${ocCoffee2} !important;
    }

    .tab_icon:hover::before {
      background-color: ${ocCoffee9};
    }

    .tab_shape {
      display: none;
    }

    .splitpane_divider {
      background-color: ${ocCoffee3} !important;
    }
  `,
});
