(function() {
var exports = {};
exports.id = 818;
exports.ids = [818,279];
exports.modules = {

/***/ 472:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ pages_getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: ./components/layouts/Layout.js + 4 modules
var Layout = __webpack_require__(7386);
;// CONCATENATED MODULE: external "react-tabs"
var external_react_tabs_namespaceObject = require("react-tabs");;
;// CONCATENATED MODULE: ./components/aboutinfo/About.js





const About = ({
  about_data
}) => {
  var _about_data$data, _about_data$data2;

  const aboutdata = [{
    body: "about school",
    heading: "About Us",
    images: [],
    title: "About  Demo"
  }, {
    body: "details of memories",
    heading: "About memories",
    images: [],
    title: "About memories Demo"
  }, {
    body: "details of our founder",
    heading: "About our founder",
    images: [],
    title: "Our founder Demo"
  }];
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "about",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_tabs_namespaceObject.Tabs, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "aboutnav",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.TabList, {
            children: (about_data === null || about_data === void 0 ? void 0 : (_about_data$data = about_data.data) === null || _about_data$data === void 0 ? void 0 : _about_data$data.length) > 0 ? about_data === null || about_data === void 0 ? void 0 : about_data.data.map((item, i) => {
              return /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.Tab, {
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  children: item.title
                })
              }, i);
            }) : aboutdata.map((item, i) => {
              return /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.Tab, {
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  children: item.title
                })
              }, i);
            })
          })
        }), (about_data === null || about_data === void 0 ? void 0 : (_about_data$data2 = about_data.data) === null || _about_data$data2 === void 0 ? void 0 : _about_data$data2.length) > 0 ? about_data === null || about_data === void 0 ? void 0 : about_data.data.map((items, i) => {
          var _items$images;

          return /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.TabPanel, {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "aemptydiv",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "info",
                style: {
                  display: 'flex'
                },
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: items === null || items === void 0 ? void 0 : items.heading
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "p",
                    children: items === null || items === void 0 ? void 0 : items.body
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  style: {
                    width: '25%'
                  },
                  children: items === null || items === void 0 ? void 0 : (_items$images = items.images) === null || _items$images === void 0 ? void 0 : _items$images.map((img, index) => {
                    var _img$directus_files_i, _img$directus_files_i2;

                    return /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "founderdiv",
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: img === null || img === void 0 ? void 0 : (_img$directus_files_i = img.directus_files_id) === null || _img$directus_files_i === void 0 ? void 0 : (_img$directus_files_i2 = _img$directus_files_i.data) === null || _img$directus_files_i2 === void 0 ? void 0 : _img$directus_files_i2.full_url,
                        alt: "now",
                        width: "250px",
                        height: "auto"
                      })
                    }, index);
                  })
                })]
              })
            })
          }, i);
        }) : aboutdata.map((items, i) => {
          var _items$images2;

          return /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_namespaceObject.TabPanel, {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "aemptydiv",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "info",
                style: {
                  display: 'flex'
                },
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: items === null || items === void 0 ? void 0 : items.heading
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "p",
                    children: items === null || items === void 0 ? void 0 : items.body
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  style: {
                    width: '25%'
                  },
                  children: items === null || items === void 0 ? void 0 : (_items$images2 = items.images) === null || _items$images2 === void 0 ? void 0 : _items$images2.map((img, index) => {
                    var _img$directus_files_i3, _img$directus_files_i4;

                    return /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "founderdiv",
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: img === null || img === void 0 ? void 0 : (_img$directus_files_i3 = img.directus_files_id) === null || _img$directus_files_i3 === void 0 ? void 0 : (_img$directus_files_i4 = _img$directus_files_i3.data) === null || _img$directus_files_i4 === void 0 ? void 0 : _img$directus_files_i4.full_url,
                        alt: "now",
                        width: "250px",
                        height: "auto"
                      })
                    }, index);
                  })
                })]
              })
            })
          }, i);
        })]
      })
    })
  });
};

/* harmony default export */ var aboutinfo_About = (About);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
;// CONCATENATED MODULE: external "moment"
var external_moment_namespaceObject = require("moment");;
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/newseventsection/Newsevent.js







function Newsevent() {
  var _data$data, _data$data2;

  const {
    0: data,
    1: setdata
  } = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
    external_axios_default().get(`${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/events`).then(response => {
      var _response$data, _response$data$data;

      if ((response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$data = _response$data.data) === null || _response$data$data === void 0 ? void 0 : _response$data$data.length) > 0) {
        setdata(response);
      }
    }).catch(error => {
      console.log(error);
    });
  }, []);
  const filteredData = [{
    id: 2,
    created_on: "2020-12-15T05:19:39+00:00",
    eventdate: "2020-12-23",
    title: "Books will be available on the specific date."
  }, {
    id: 3,
    created_on: "2020-12-15T08:52:50+00:00",
    eventdate: "2020-12-21",
    title: "Result has been declared"
  }, {
    id: 4,
    created_on: "2020-12-15T09:29:56+00:00",
    eventdate: "2020-12-14",
    title: "Annual function data has been declared"
  }, {
    id: 5,
    created_on: "2021-07-14T10:19:02+00:00",
    eventdate: "2021-07-15",
    title: "Tomorrow is holiday"
  }];
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "eventinfo",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        style: {
          textAlign: 'center'
        },
        children: "News & Events"
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "newsinfo",
          children: /*#__PURE__*/jsx_runtime_.jsx("marquee", {
            direction: "up",
            id: "scroll",
            behaviour: "scroll",
            "scroll-amount": "2",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ideaboxNews in-easing in-relative",
              id: "idx1",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                id: "newscontent1",
                className: "mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  id: "mCSB_1",
                  className: "mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    id: "mCSB_1_container",
                    className: "mCSB_container mCS_y_hidden mCS_no_scrollbar_y",
                    children: (data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.data.length) > 0 ? data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : _data$data2.data.map((item, i) => {
                      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "in-image",
                          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "tt-b-day rem-border",
                            children: [item.eventdate.split('-')[2], /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                              className: "tt-b-day-r",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                                className: "tt-b-month",
                                children: external_moment_default()(item.eventdate.split('-')[1], 'M').format('MMM')
                              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                                className: "tt-b-date",
                                children: external_moment_default()(item.eventdate.split('-')[0]).format('YYYY')
                              })]
                            })]
                          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "in-turquoise",
                            children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                              children: "+ Read more"
                            })
                          })]
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "in-content",
                          id: "nid",
                          children: item.title
                        })]
                      }, i);
                    }) : filteredData.map((item, i) => {
                      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "in-image",
                          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "tt-b-day rem-border",
                            children: [item.eventdate.split('-')[2], /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                              className: "tt-b-day-r",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                                className: "tt-b-month",
                                children: external_moment_default()(item.eventdate.split('-')[1], 'M').format('MMM')
                              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                                className: "tt-b-date",
                                children: external_moment_default()(item.eventdate.split('-')[0]).format('YYYY')
                              })]
                            })]
                          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "in-turquoise",
                            children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                              children: "+ Read more"
                            })
                          })]
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "in-content",
                          id: "nid",
                          children: item.title
                        })]
                      }, i);
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  id: "mCSB_1_scrollbar_vertical",
                  className: "mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "mCSB_draggerContainer",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      id: "mCSB_1_dragger_vertical",
                      className: "mCSB_dragger",
                      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "mCSB_dragger_bar"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "mCSB_draggerRail"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "in-viewer",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "in-viewer-header",
                  id: "newstitle1"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "in-viewer-content",
                  id: "newscontent2"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "in-viewer-close"
                })]
              })]
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          style: {
            margin: '10px 0px 0px 0px',
            backgroundColor: '#4c6578',
            padding: '5px',
            borderRadius: '5px',
            color: '#fff'
          },
          children: "Read More"
        })
      })]
    })
  });
}

/* harmony default export */ var newseventsection_Newsevent = (Newsevent);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
;// CONCATENATED MODULE: ./components/newseventsection/Calendar.js



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Calendar extends (external_react_default()).Component {
  constructor(_props) {
    super(_props);

    _defineProperty(this, "state", {
      dateContext: external_moment_default()(),
      today: external_moment_default()(),
      showMonthPopup: false,
      showYearPopup: false,
      selectedDay: null
    });

    _defineProperty(this, "weekdays", external_moment_default().weekdays());

    _defineProperty(this, "weekdaysShort", external_moment_default().weekdaysShort());

    _defineProperty(this, "months", external_moment_default().months());

    _defineProperty(this, "year", () => {
      return this.state.dateContext.format("Y");
    });

    _defineProperty(this, "month", () => {
      return this.state.dateContext.format("MMMM");
    });

    _defineProperty(this, "daysInMonth", () => {
      return this.state.dateContext.daysInMonth();
    });

    _defineProperty(this, "currentDate", () => {
      return this.state.dateContext.get("date");
    });

    _defineProperty(this, "currentDay", () => {
      return this.state.dateContext.format("D");
    });

    _defineProperty(this, "firstDayOfMonth", () => {
      let dateContext = this.state.dateContext;
      let firstDay = external_moment_default()(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6

      return firstDay;
    });

    _defineProperty(this, "setMonth", month => {
      let monthNo = this.months.indexOf(month);
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = external_moment_default()(dateContext).set("month", monthNo);
      this.setState({
        dateContext: dateContext
      });
    });

    _defineProperty(this, "nextMonth", () => {
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = external_moment_default()(dateContext).add(1, "month");
      this.setState({
        dateContext: dateContext
      });
      this.props.onNextMonth && this.props.onNextMonth();
    });

    _defineProperty(this, "prevMonth", () => {
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = external_moment_default()(dateContext).subtract(1, "month");
      this.setState({
        dateContext: dateContext
      });
      this.props.onPrevMonth && this.props.onPrevMonth();
    });

    _defineProperty(this, "onSelectChange", (e, data) => {
      this.setMonth(data);
      this.props.onMonthChange && this.props.onMonthChange();
    });

    _defineProperty(this, "SelectList", props => {
      let popup = props.data.map(data => {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            onClick: e => {
              this.onSelectChange(e, data);
            },
            children: data
          })
        }, data);
      });
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "month-popup",
        children: popup
      });
    });

    _defineProperty(this, "onChangeMonth", (e, month) => {
      this.setState({
        showMonthPopup: !this.state.showMonthPopup
      });
    });

    _defineProperty(this, "MonthNav", () => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "label-month",
        onClick: e => {
          this.onChangeMonth(e, this.month());
        },
        children: [this.month(), this.state.showMonthPopup && /*#__PURE__*/jsx_runtime_.jsx(this.SelectList, {
          data: this.months
        })]
      });
    });

    _defineProperty(this, "showYearEditor", () => {
      this.setState({
        showYearNav: true
      });
    });

    _defineProperty(this, "setYear", year => {
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = external_moment_default()(dateContext).set("year", year);
      this.setState({
        dateContext: dateContext
      });
    });

    _defineProperty(this, "onYearChange", e => {
      this.setYear(e.target.value);
      this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    });

    _defineProperty(this, "onKeyUpYear", e => {
      if (e.which === 13 || e.which === 27) {
        this.setYear(e.target.value);
        this.setState({
          showYearNav: false
        });
      }
    });

    _defineProperty(this, "YearNav", () => {
      return this.state.showYearNav ? /*#__PURE__*/jsx_runtime_.jsx("input", {
        defaultValue: this.year(),
        className: "editor-year",
        ref: yearInput => {
          this.yearInput = yearInput;
        },
        onKeyUp: e => this.onKeyUpYear(e),
        onChange: e => this.onYearChange(e),
        type: "number",
        placeholder: "year"
      }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "label-year",
        onDoubleClick: e => {
          this.showYearEditor();
        },
        children: this.year()
      });
    });

    _defineProperty(this, "onDayClick", (e, day) => {
      this.setState({
        selectedDay: day
      }, () => {});
      this.props.onDayClick && this.props.onDayClick(e, day);
    });

    this.width = _props.width || "100%";
    this.style = _props.style || {};
    this.style.width = this.width; // add this
  }

  render() {
    // Map the weekdays i.e Sun, Mon, Tue etc as <td>
    let weekdays = this.weekdaysShort.map(day => {
      return /*#__PURE__*/jsx_runtime_.jsx("td", {
        className: "week-day",
        children: day
      }, day);
    });
    let blanks = [];

    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push( /*#__PURE__*/jsx_runtime_.jsx("td", {
        className: "emptySlot",
        children: ""
      }, i * 80));
    }

    let daysInMonth = [];

    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = d == this.currentDay() ? "day current-day" : "day";
      let selectedClass = d == this.state.selectedDay ? " selected-day " : "";
      daysInMonth.push( /*#__PURE__*/jsx_runtime_.jsx("td", {
        className: className + selectedClass,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          onClick: e => {
            this.onDayClick(e, d);
          },
          children: d
        })
      }, d));
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }

      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });
    let trElems = rows.map((d, i) => {
      return /*#__PURE__*/jsx_runtime_.jsx("tr", {
        children: d
      }, i * 100);
    });
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "eventinfo",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "School Calendar "
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "calendar-container",
        style: this.style,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
          className: "calendar",
          children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              className: "calendar-header",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                colSpan: "5",
                children: [/*#__PURE__*/jsx_runtime_.jsx(this.MonthNav, {}), " ", /*#__PURE__*/jsx_runtime_.jsx(this.YearNav, {})]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                colSpan: "2",
                className: "nav-month",
                children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                  icon: free_solid_svg_icons_.faArrowLeft,
                  onClick: e => {
                    this.prevMonth();
                  },
                  className: "prev"
                }), /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                  icon: free_solid_svg_icons_.faArrowRight,
                  onClick: e => {
                    this.nextMonth();
                  },
                  className: "prev"
                })]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("tr", {
              children: weekdays
            }), trElems]
          })]
        })
      })]
    });
  }

}
;// CONCATENATED MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");;
;// CONCATENATED MODULE: ./components/newseventsection/Toppercarousel.js


 // requires a loader





function Toppercarousel() {
  var _data$data, _data$data2;

  const {
    0: data,
    1: setdata
  } = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
    external_axios_default().get(`${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/toppers?fields=*,photo.*`).then(response => {
      var _response$data, _response$data$data;

      if ((response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$data = _response$data.data) === null || _response$data$data === void 0 ? void 0 : _response$data$data.length) > 0) {
        setdata(response);
      }
    }).catch(error => {
      console.log(error);
    });
  }, []);
  const slides = [{
    title: "/images/a3.jpg ",
    class: 'Demo Class',
    name: 'Demo Name',
    subject: 'Demo subject',
    percent: "percent %"
  }, {
    title: " /images/a5.jpg",
    class: 'Demo Class',
    name: 'Demo Name',
    subject: 'Demo subject',
    percent: "percent %"
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_responsive_carousel_namespaceObject.Carousel, {
    showThumbs: false,
    autoPlay: true,
    infiniteLoop: true,
    showIndicators: false,
    style: {
      padding: '0px 10px',
      margin: '5px 5px'
    },
    children: (data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.data.length) > 0 ? data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : _data$data2.data.map((item, i) => {
      var _item$photo, _item$photo$data;

      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          background: '#e9e9e9'
        },
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("center", {
          className: "toppername",
          children: [" ", item.name, " "]
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "d-block",
          src: item === null || item === void 0 ? void 0 : (_item$photo = item.photo) === null || _item$photo === void 0 ? void 0 : (_item$photo$data = _item$photo.data) === null || _item$photo$data === void 0 ? void 0 : _item$photo$data.full_url,
          alt: "First slide",
          style: {
            width: '85%',
            display: 'flex',
            margin: 'auto',
            justifyContant: 'center',
            height: '220px',
            border: '1px solid #9E9E9E',
            padding: '7px',
            backgroundColor: '#fff',
            borderRadius: '5px'
          }
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "classpercent",
          children: [" ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
            children: ["  ", item.class, " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", item.subject, " (", item.percent, "%) "]
          })]
        })]
      }, i);
    }) : slides.map((item, i) => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          background: '#e9e9e9'
        },
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("center", {
          className: "toppername",
          children: [" ", item.name, " "]
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "d-block",
          src: item === null || item === void 0 ? void 0 : item.title,
          alt: "First slide",
          style: {
            width: '85%',
            display: 'flex',
            margin: 'auto',
            justifyContant: 'center',
            height: '220px',
            border: '1px solid #9E9E9E',
            padding: '7px',
            backgroundColor: '#fff',
            borderRadius: '5px'
          }
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "classpercent",
          children: [" ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
            children: [" ", item.class, " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", item.subject, " (", item.percent, " ) "]
          })]
        })]
      }, i);
    })
  });
}

/* harmony default export */ var newseventsection_Toppercarousel = (Toppercarousel); // import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// const Toppercarousel = () => {
//   return (
//     <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false}
//       style={{ padding: '0px 10px', margin: '5px 5px' }}>
//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper.jpg"
//           alt="First slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>
//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper1.jpg"
//           alt="second slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>
//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper2.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>
//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper3.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>
//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper4.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>
//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper5.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>
//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper6.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>
//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper7.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>
//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper8.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>
//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper9.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>
//       <div style={{background:'#e9e9e9'}}>
//         <center className='toppername'> KABIR SINGH BEDI </center>
//         <img
//           className="d-block"
//           src="/images/topper10.jpg"
//           alt="third slide"
//           style={{
//             width: '85%',
//             display: 'flex',
//             margin: 'auto',
//             justifyContant: 'center',
//             height: '220px',
//             border: '1px solid #9E9E9E',
//             padding: '7px',
//             backgroundColor: '#fff',
//             borderRadius: '5px'
//           }}
//         />
//         <p className='classpercent'> <b>Class 12 <br /> COMMERCE (97.2%) </b></p>
//       </div>
//     </Carousel>
//   );
// }
// export default Toppercarousel;
// import React from 'react'
// import useSWR from 'swr';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// function Toppercarousel() {
//   const fetcher = (...args) => fetch(...args).then(res => res.json());
//   const url = "https://cms.schoolscoop.co.in/myapp/items/toppers?fields=*,photo.*";
//    // const url=  `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/events` 
//   const { data, error } = useSWR(url, fetcher);
//   if (error) {
//     return <div>Error...</div>
//   }
//   if (!data) {
//     return <div>No data...</div>
//   }
//   return (
//     <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false} style={{ padding: '0px 10px', margin: '5px 5px' }}>
//       {data.data.map((item, i) => {
//         return <div style={{ background: '#e9e9e9' }} key={i}>
//           <center className='toppername'> {item.name} </center>
//           <img
//             className="d-block"
//             src={item?.photo?.data?.full_url}
//             alt="First slide"
//             style={{
//               width: '85%',
//               display: 'flex',
//               margin: 'auto',
//               justifyContant: 'center',
//               height: '220px',
//               border: '1px solid #9E9E9E',
//               padding: '7px',
//               backgroundColor: '#fff',
//               borderRadius: '5px'
//             }}
//           />
//           <p className='classpercent'> <b>Class {item.class} <br /> {item.subject} ({item.percent}%) </b></p>
//         </div>
//       })}
//     </Carousel>
//   )
// }
// export default Toppercarousel
;// CONCATENATED MODULE: ./components/newseventsection/Topper.js





function Topper() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "eventinfo",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["Topper ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            fontSize: '1rem'
          },
          children: "(2019-2020)"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx(newseventsection_Toppercarousel, {})]
    })
  });
}

/* harmony default export */ var newseventsection_Topper = (Topper);
;// CONCATENATED MODULE: ./components/newseventsection/Eventmain.js






function Eventmain({
  latest_data
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "eventgrid",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "newsevent",
        children: /*#__PURE__*/jsx_runtime_.jsx(newseventsection_Newsevent, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "calendar1",
        children: /*#__PURE__*/jsx_runtime_.jsx(Calendar, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "topper",
        children: /*#__PURE__*/jsx_runtime_.jsx(newseventsection_Topper, {})
      })]
    })
  });
}

/* harmony default export */ var newseventsection_Eventmain = (Eventmain);
;// CONCATENATED MODULE: ./components/schoolaccreditation/Schoolaccreditation.js




const fetcher = (...args) => fetch(...args).then(res => res.json());

function Schoolaccreditation() {
  const url = "https://cms.schoolscoop.co.in/myapp/items/acridation?fields=*.*.* ";
  const {
    data,
    error
  } = external_swr_default()(url, fetcher);

  if (error) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "Error..."
    });
  }

  if (!data) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "No Data..."
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "accreditation",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "accicon",
          children: data.data[0].acredation.map((item, i) => {
            if (item.length > 1) {
              return /*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "No data..."
              }, i);
            } else {
              return /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: item.directus_files_id.data.full_url,
                  alt: "ncc"
                })
              });
            }
          })
        })
      })
    })
  });
}

/* harmony default export */ var schoolaccreditation_Schoolaccreditation = (Schoolaccreditation);
;// CONCATENATED MODULE: ./components/trust/Trust.js








function Trust() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "video",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-fluid trust",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "py-3",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-sm-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("video", {
              style: {
                width: "100%",
                height: "400px"
              },
              controls: true,
              poster: "/images/26",
              children: [/*#__PURE__*/jsx_runtime_.jsx("source", {
                src: "/videos/movie.mp4",
                type: "video/mp4"
              }), "Your browser does not support the video tag."]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-sm-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "WHY TRUST US"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                margin: 'auto auto'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                icon: free_solid_svg_icons_.faUserGraduate,
                style: {
                  color: '#94d1f5',
                  fontSize: '5.3rem',
                  paddingLeft: '20px',
                  marginBottom: '20px'
                }
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: " High standards in value education"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                margin: 'auto auto'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                icon: free_solid_svg_icons_.faUserShield,
                style: {
                  color: '#94d1f5',
                  fontSize: '5.3rem',
                  paddingLeft: '20px',
                  marginBottom: '20px'
                }
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                style: {
                  marginLeft: '5px'
                },
                children: " Safety and Discipline"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                margin: 'auto auto'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                icon: free_solid_svg_icons_.faBookReader,
                style: {
                  color: '#94d1f5',
                  fontSize: '5.3rem',
                  paddingLeft: '20px',
                  marginBottom: '20px'
                }
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: " Highest standards of academic and sporting excellence"
              })]
            })]
          })]
        })
      })
    })
  });
}

/* harmony default export */ var trust_Trust = (Trust);
;// CONCATENATED MODULE: ./components/carousel/Carouselswr.js


 // requires a loader



const Carouselswr = ({
  slider_data
}) => {
  var _slider_data$data;

  const slides = [{
    title: "/images/a1.jpg",
    description: 'Lorem1 ipsum'
  }, {
    title: "/images/a8.jpg",
    description: 'Lorem2 ipsum'
  }, {
    title: "/images/a9.jpg",
    description: 'Lorem3 ipsum'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "slider_media",
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_responsive_carousel_namespaceObject.Carousel, {
      showThumbs: false,
      autoPlay: true,
      infiniteLoop: true,
      children: (slider_data === null || slider_data === void 0 ? void 0 : (_slider_data$data = slider_data.data) === null || _slider_data$data === void 0 ? void 0 : _slider_data$data.map((item, index) => {
        var _item$image, _item$image$data;

        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "carousel-inner",
          role: "listbox",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "carousel items1",
            role: "listbox",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : (_item$image$data = _item$image.data) === null || _item$image$data === void 0 ? void 0 : _item$image$data.full_url,
              height: 600,
              width: 1500,
              alt: "sorry_no_img"
            })
          }, index)
        });
      })) || slides.map((slide, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "carousel-inner",
          role: "listbox",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "carousel items1",
            role: "listbox",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: slide.title,
              height: 500,
              width: 1500,
              alt: "sorry_no_img"
            })
          }, index)
        });
      })
    })
  });
};

/* harmony default export */ var carousel_Carouselswr = (Carouselswr);
async function getStaticProps(context) {
  let slider_data;

  try {
    const response1 = await fetch(`${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/slider?status=published&fields=caption,image.data.full_url`);
    slider_data = await response1.json();
  } catch (error) {
    slider_data = false;
  }

  return {
    props: {
      slider_data
    },
    revalidate: 2 // will be passed to the page component as props

  };
}
;// CONCATENATED MODULE: external "react-alice-carousel"
var external_react_alice_carousel_namespaceObject = require("react-alice-carousel");;
var external_react_alice_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_alice_carousel_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/schoolgallery/Schoolgallery.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Schoolgallery_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Schoolgallery_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const handleDragStart = e => e.preventDefault();

const items = [/*#__PURE__*/jsx_runtime_.jsx("div", {
  style: {
    marginRight: '5px'
  },
  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: "/images/c1.jpg",
    onDragStart: handleDragStart,
    className: "yours-custom-class",
    style: {
      height: '12.5rem',
      width: '100%'
    }
  })
}), /*#__PURE__*/jsx_runtime_.jsx("div", {
  style: {
    marginRight: '5px'
  },
  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: "/images/c2.jpg",
    onDragStart: handleDragStart,
    className: "yours-custom-class",
    style: {
      height: '12.5rem',
      width: '100%'
    }
  })
}), /*#__PURE__*/jsx_runtime_.jsx("div", {
  style: {
    marginRight: '5px'
  },
  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: "/images/c3.jpg",
    onDragStart: handleDragStart,
    className: "yours-custom-class",
    style: {
      height: '12.5rem',
      width: '100%'
    }
  })
}), /*#__PURE__*/jsx_runtime_.jsx("div", {
  style: {
    marginRight: '5px'
  },
  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: "/images/c4.jpg",
    onDragStart: handleDragStart,
    className: "yours-custom-class",
    style: {
      height: '12.5rem',
      width: '100%'
    }
  })
}), /*#__PURE__*/jsx_runtime_.jsx("div", {
  style: {
    marginRight: '5px'
  },
  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: "/images/c5.jpg",
    onDragStart: handleDragStart,
    className: "yours-custom-class",
    style: {
      height: '12.5rem',
      width: '100%'
    }
  })
}), /*#__PURE__*/jsx_runtime_.jsx("div", {
  style: {
    marginRight: '5px'
  },
  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: "/images/c6.jpg",
    onDragStart: handleDragStart,
    className: "yours-custom-class",
    style: {
      height: '12.5rem',
      width: '100%'
    }
  })
}), /*#__PURE__*/jsx_runtime_.jsx("div", {
  style: {
    marginRight: '5px'
  },
  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: "/images/c7.jpg",
    onDragStart: handleDragStart,
    className: "yours-custom-class",
    style: {
      height: '12.5rem',
      width: '100%'
    }
  })
}), /*#__PURE__*/jsx_runtime_.jsx("div", {
  style: {
    marginRight: '5px'
  },
  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: "/images/c8.jpg",
    onDragStart: handleDragStart,
    className: "yours-custom-class",
    style: {
      height: '12.5rem',
      width: '100%'
    }
  })
}), /*#__PURE__*/jsx_runtime_.jsx("div", {
  style: {
    marginRight: '5px'
  },
  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: "/images/c9.jpg",
    onDragStart: handleDragStart,
    className: "yours-custom-class",
    style: {
      height: '12.5rem',
      width: '100%'
    }
  })
}), /*#__PURE__*/jsx_runtime_.jsx("div", {
  style: {
    marginRight: '5px'
  },
  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: "/images/c10.jpg",
    onDragStart: handleDragStart,
    className: "yours-custom-class",
    style: {
      height: '12.5rem',
      width: '100%'
    }
  })
})];
const slides = [{
  title: "/images/7 ",
  description: 'View Gallery'
}, {
  title: "/images/8   ",
  description: 'View Gallery'
}, {
  title: " /images/9  ",
  description: 'View Gallery'
}, {
  title: "/images/11   ",
  description: 'View Gallery'
}, {
  title: " /images/12  ",
  description: 'View Gallery'
}, {
  title: "/images/14   ",
  description: 'View Gallery'
}];

const Schoolgallery = ({
  gallery_data
}) => {
  var _gallery_data$data;

  const options = {
    responsiveClass: true,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      600: {
        items: 1
      },
      700: {
        items: 1
      },
      1000: {
        items: 5
      }
    }
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-4 schoolgallery ",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "text-center",
      children: /*#__PURE__*/jsx_runtime_.jsx("b", {
        children: " Rukhmani Devi School Gallery "
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_alice_carousel_default()), _objectSpread({
      mouseTracking: true,
      items: (gallery_data === null || gallery_data === void 0 ? void 0 : (_gallery_data$data = gallery_data.data) === null || _gallery_data$data === void 0 ? void 0 : _gallery_data$data.length) > 0 ? gallery_data === null || gallery_data === void 0 ? void 0 : gallery_data.data.map((item, i) => {
        var _item$photo, _item$photo$data;

        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            marginRight: '5px'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: item === null || item === void 0 ? void 0 : (_item$photo = item.photo) === null || _item$photo === void 0 ? void 0 : (_item$photo$data = _item$photo.data) === null || _item$photo$data === void 0 ? void 0 : _item$photo$data.full_url,
            className: "yours-custom-class",
            style: {
              height: '12.5rem',
              width: '100%'
            }
          })
        });
      }) : slides.map((item, i) => {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            marginRight: '5px'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: item === null || item === void 0 ? void 0 : item.title,
            className: "yours-custom-class",
            style: {
              height: '12.5rem',
              width: '100%'
            }
          })
        });
      })
    }, options)), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-3 text-center ",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/Gallery",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          style: {
            color: " #212529",
            backgroundColor: "#94d1f5",
            borderColor: "#94d1f5",
            borderRadius: "5px"
          },
          className: "p-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
            icon: free_solid_svg_icons_.faFolder
          }), "\xA0View More"]
        })
      })
    })]
  });
};

/* harmony default export */ var schoolgallery_Schoolgallery = (Schoolgallery); // import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFolder } from '@fortawesome/free-solid-svg-icons'
// import Link from 'next/link'
// const handleDragStart = (e) => e.preventDefault();
// const items = [
//     <div style={{ marginRight: '5px' }}><img src="/images/c1.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{ height: '12.5rem', width: '100%' }} /></div>,
//     <div style={{ marginRight: '5px' }}><img src="/images/c2.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{ height: '12.5rem', width: '100%' }} /></div>,
//     <div style={{ marginRight: '5px' }}><img src="/images/c3.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{ height: '12.5rem', width: '100%' }} /></div>,
//     <div style={{ marginRight: '5px' }}><img src="/images/c4.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{ height: '12.5rem', width: '100%' }} /></div>,
//     <div style={{ marginRight: '5px' }}><img src="/images/c5.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{ height: '12.5rem', width: '100%' }} /></div>,
//     <div style={{ marginRight: '5px' }}><img src="/images/c6.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{ height: '12.5rem', width: '100%' }} /></div>,
//     <div style={{ marginRight: '5px' }}><img src="/images/c7.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{ height: '12.5rem', width: '100%' }} /></div>,
//     <div style={{ marginRight: '5px' }}><img src="/images/c8.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{ height: '12.5rem', width: '100%' }} /></div>,
//     <div style={{ marginRight: '5px' }}><img src="/images/c9.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{ height: '12.5rem', width: '100%' }} /></div>,
//     <div style={{ marginRight: '5px' }}><img src="/images/c10.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{ height: '12.5rem', width: '100%' }} /></div>,
// ];
// const Schoolgallery = () => {
//     const options = {
//         responsiveClass: true,
//         dots: false,
//         smartSpeed: 1000,
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             400: {
//                 items: 1,
//             },
//             600: {
//                 items: 1,
//             },
//             700: {
//                 items: 1,
//             },
//             1000: {
//                 items: 5,
//             }
//         },
//     };
//     return (
//         <div className='py-4 schoolgallery '>
//             <h3 className="text-center"><b> Rukhmani Devi School Gallery </b></h3>
//             <AliceCarousel mouseTracking items={items} {...options} />
//             <div className="mt-3 text-center ">
//                 <Link href="/Gallery">
//                     <button style={{
//                         color: " #212529",
//                         backgroundColor: "#94d1f5",
//                         borderColor: "#94d1f5",borderRadius:"5px"
//                     }} className="p-1" ><FontAwesomeIcon icon={faFolder} />&nbsp;View More</button>
//                 </Link>
//             </div>
//         </div>
//     );
// }
// export default Schoolgallery
// EXTERNAL MODULE: ./pages/LocateUs.js
var LocateUs = __webpack_require__(8687);
// EXTERNAL MODULE: ./pages/Column.js
var Column = __webpack_require__(3715);
;// CONCATENATED MODULE: ./pages/index.js













function Home({
  data_header,
  slider_data,
  about_data,
  gallery_data
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "preload",
      href: "../public/Fontin_Sans_SC_45b.otf",
      as: "font",
      crossOrigin: ""
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
      data_header: data_header,
      children: [/*#__PURE__*/jsx_runtime_.jsx(carousel_Carouselswr, {
        slider_data: slider_data
      }), /*#__PURE__*/jsx_runtime_.jsx(aboutinfo_About, {
        about_data: about_data
      }), /*#__PURE__*/jsx_runtime_.jsx(newseventsection_Eventmain, {}), /*#__PURE__*/jsx_runtime_.jsx(schoolaccreditation_Schoolaccreditation, {}), /*#__PURE__*/jsx_runtime_.jsx(trust_Trust, {}), /*#__PURE__*/jsx_runtime_.jsx(schoolgallery_Schoolgallery, {
        gallery_data: gallery_data
      }), /*#__PURE__*/jsx_runtime_.jsx(LocateUs.default, {})]
    })]
  });
}
async function pages_getStaticProps(context) {
  let data_header;

  try {
    const response = await fetch(`${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/config?fields=*,logo.data.full_url`);
    data_header = await response.json();
  } catch (error) {
    data_header = false;
  }

  let slider_data;

  try {
    const response1 = await fetch(`${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/slider?status=published&fields=caption,image.data.full_url`);
    slider_data = await response1.json();
  } catch (error) {
    slider_data = false;
  }

  let about_data;

  try {
    const response2 = await fetch(`${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/tabs?fields=title,heading,body,images.directus_files_id.data.full_url`);
    about_data = await response2.json();
  } catch (error) {
    about_data = false;
  }

  let gallery_data;

  try {
    const response1 = await fetch(`${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/gallery?fields=*.*.*`);
    gallery_data = await response1.json();
  } catch (error) {
    gallery_data = false;
  }

  return {
    props: {
      data_header,
      slider_data,
      about_data,
      gallery_data
    },
    revalidate: 2 // will be passed to the page component as props

  };
}

/***/ }),

/***/ 887:
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 799:
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 9614:
/***/ (function(module) {

"use strict";
module.exports = require("react-toast-notifications");;

/***/ }),

/***/ 9012:
/***/ (function(module) {

"use strict";
module.exports = require("react-toast-notifications/dist/ToastProvider");;

/***/ }),

/***/ 1067:
/***/ (function(module) {

"use strict";
module.exports = require("react-tooltip");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 7749:
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,610,665,687,715], function() { return __webpack_exec__(472); });
module.exports = __webpack_exports__;

})();