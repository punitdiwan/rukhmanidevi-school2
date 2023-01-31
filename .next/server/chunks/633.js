exports.id = 633;
exports.ids = [633];
exports.modules = {

/***/ 1633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/stickyfooter/Stickyfooter.js

function Stickyfooter() {
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("div", {
            children: /*#__PURE__*/ _jsxs("div", {
                className: "latestnews",
                children: [
                    /*#__PURE__*/ _jsx("h5", {
                        children: "Latest\xa0News"
                    }),
                    /*#__PURE__*/ _jsxs("marquee", {
                        children: [
                            " ",
                            /*#__PURE__*/ _jsx("span", {
                                children: "Our little Grovians have made us proud once again by emerging as the winners of the sub junior hockey tournament! \xa0\xa0\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0\xa0\xa0 Our Grovians under 19 and under 17 teams were both declared the champions in the CBSE cluster under 19 and under 17 boys basketball tournament. \xa0\xa0\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0\xa0\xa0 Pinegrove won the 1st MARIAN Cup U-17 \xa0\xa0\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0\xa0\xa0 Pinegrove girls were runner's up in IPSC under 14 Basketball tournament held at Welham Girls School Dehradun \xa0\xa0\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0\xa0\xa0 Lavya Bhasin of Pinegrove bagged the First Position In the Mohinder Memorial Bilingual Turncoat Debate 2019 \xa0\xa0\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0\xa0\xa0 Grovians emerged winners of U 14 state basketball tournament in both categories (boys and girls) \xa0\xa0\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0\xa0\xa0 Pinegrove won the IPSC Under 15 boys hockey championship \xa0\xa0\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0\xa0\xa0 Kabir Bedi of Pinegrove was awarded the 1st prize in Drawing and Shading (portrait making) at Milestone SGC, Mussoorie. \xa0\xa0\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0\xa0\xa0 Pinegrove secured the overall first position in Pic Fiesta Competition organized by St Soldier's Panchkula \xa0\xa0\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0\xa0\xa0 Grovians were declared the runners up in the Bhupinder Memorial Soccer Tournament 2019."
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ _jsx("h5", {
                        children: "Achievements"
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const stickyfooter_Stickyfooter = ((/* unused pure expression or super */ null && (Stickyfooter)));

// EXTERNAL MODULE: ../../.nvm/versions/node/v16.0.0/lib/node_modules/next/link.js
var next_link = __webpack_require__(2102);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/header/Socialicon.js



const fetcher = (...args)=>fetch(...args).then((res)=>res.json()
    )
;
function Socialicon() {
    const url = "https://cms.schoolscoop.co.in/myapp/items/top_icons?fields=top_icons.directus_files_id.data.full_url";
    const { data , error  } = external_swr_default()(url, fetcher);
    if (error) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
    }
    if (!data) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: data.data[0].top_icons.map((items, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: items.directus_files_id.data.full_url
                })
            }, i);
        })
    });
}
/* harmony default export */ const header_Socialicon = (Socialicon);

// EXTERNAL MODULE: external "react-tooltip"
var external_react_tooltip_ = __webpack_require__(2076);
var external_react_tooltip_default = /*#__PURE__*/__webpack_require__.n(external_react_tooltip_);
;// CONCATENATED MODULE: ./components/header/Header.js








const Header_fetcher = (...args)=>fetch(...args).then((res)=>res.json()
    )
;
function Header() {
    function toggleMenu() {
        let nav = document.querySelector(".nav");
        let toggle = document.querySelector(".toggle");
        nav.classList.toggle("active");
        toggle.classList.toggle("active");
        const x = document.getElementById("navigation");
        if (x.style.display === "none") {
            x.style.display = "block";
            x.style.position = "absolute";
            x.style.background = "#002a5c";
            x.style.zIndex = "100";
            x.style.width = "94%";
        } else {
            x.style.display = "none";
        }
        document.getElementById("navbar").style.float = "left";
    }
    // const url = "https://cms.schoolscoop.co.in/myapp/items/config?fields=title,tagline,address,phone,email,mobile,logo.*";
    // const { data, error } = useSWR(url, fetcher);
    // if (error) {
    //     return <div></div>
    // }
    // if (!data) {
    //     return <div></div>
    // }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "header",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "px-3 container-fluid",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "contant",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-fluid",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-sm-8",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "p-0 col-md-3 col-sm-5 col-5 head_meadia",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "logocontent d-flex justify-content-center",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/images/pglogo.png",
                                                                        alt: "logo"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "p-0 col-md-9 col-sm-7 col-7 ",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "logocontent",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "school_title",
                                                                style: {
                                                                    lineHeight: "20px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        style: {
                                                                            fontFamily: "curveFont"
                                                                        },
                                                                        children: "Rukhmani Devi Public School"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "place pl-1",
                                                                        style: {
                                                                            fontFamily: "curveFont"
                                                                        },
                                                                        children: "Bhopal, Madhya Pradesh"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "float-right mb-1 col-sm-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "display_none",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "d-flex text-light",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#video",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: " ",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-light",
                                                                        children: "Virtual Tour for Rukhmani Devi School"
                                                                    })
                                                                })
                                                            }),
                                                            "\u2002|\u2002",
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#footer",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "text-light ",
                                                                    children: "Contact"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "row icon_head_logo",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_tooltip_default()), {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: " col-lg-2 col-md-2 col-sm-2 col-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "https://indiancc.nic.in/",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/images/hlogo1.png",
                                                                        alt: "no_img",
                                                                        "data-tip": "NCC INDIA",
                                                                        "data-place": "bottom",
                                                                        style: {
                                                                            width: "42px",
                                                                            height: "42px",
                                                                            borderRadius: "50%"
                                                                        }
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: " col-lg-2 col-md-2 col-sm-2 col-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "https://npscindia.com/",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/images/hlogo2.jpeg",
                                                                        alt: "no_img",
                                                                        "data-tip": "NPSC INDIA",
                                                                        "data-place": "bottom",
                                                                        style: {
                                                                            width: "42px",
                                                                            height: "42px",
                                                                            borderRadius: "50%"
                                                                        }
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-2 col-md-2 col-sm-2 col-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "https://www.cbse.gov.in/",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/images/hlogo3.jpeg",
                                                                        alt: "no_img",
                                                                        "data-tip": " CBSC",
                                                                        "data-place": "bottom",
                                                                        style: {
                                                                            width: "42px",
                                                                            height: "42px",
                                                                            borderRadius: "50%"
                                                                        }
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-2 col-md-2 col-sm-2 col-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "https://www.facebook.com/rukhmanidevischool/",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/images/hfb.png",
                                                                        alt: "no_img",
                                                                        "data-tip": "FACEBOOK",
                                                                        "data-place": "bottom",
                                                                        style: {
                                                                            width: "42px",
                                                                            height: "42px",
                                                                            borderRadius: "50%"
                                                                        }
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-2 col-md-2 col-sm-2 col-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/images/hinsta.jpeg",
                                                                        alt: "no_img",
                                                                        "data-tip": "INSTAGRAM",
                                                                        "data-place": "bottom",
                                                                        style: {
                                                                            width: "42px",
                                                                            height: "42px",
                                                                            borderRadius: "50%"
                                                                        }
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-2 col-md-2 col-sm-2 col-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "https://www.youtube.com/channel/UCIKlH_ibvWaviOlUTrFeQqg",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/images/hutub.jpeg",
                                                                        alt: "no_img",
                                                                        "data-tip": "YOUTUBE",
                                                                        "data-place": "bottom",
                                                                        style: {
                                                                            width: "42px",
                                                                            height: "42px",
                                                                            borderRadius: "50%"
                                                                        }
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icons",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(header_Socialicon, {})
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "toggle",
                                onClick: toggleMenu,
                                children: [
                                    "\xa0",
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                        icon: free_solid_svg_icons_.faBars
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "\u2002MENU"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav",
                                id: "navbar",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    id: "navigation",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: "Home"
                                                }),
                                                "\u2002|\u2002"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: "dropdownbtn",
                                                    children: [
                                                        "About Us ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                            icon: free_solid_svg_icons_.faCaretDown
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "dropdownmenu",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/Location",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Location"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/Director",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Director's desk"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/Principal",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "principal's desk"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/Chairman",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Chairman's Desk"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/FacultysMain",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Faculty"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                "\u2002|\u2002"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: "dropdownbtn",
                                                    children: [
                                                        "Facilities ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                            icon: free_solid_svg_icons_.faCaretDown
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "dropdownmenu",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/AcademicFacilities",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Academic Facilities"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/GamesSports",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Games & Sports"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/Activities",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Activities"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                "\u2002|\u2002"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: "dropdownbtn",
                                                    children: [
                                                        "ACADEMICS ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                            icon: free_solid_svg_icons_.faCaretDown
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "dropdownmenu",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/AdmissionProcess",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Admission Process"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/TransferCertificate",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Transfer Certificate"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                "\u2002|\u2002"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/Gallery",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Gallery \u2002|\u2002"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/Mandatory",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Mandatory Disclosure"
                                                    })
                                                }),
                                                "\u2002|\u2002"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/Rules",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Rules"
                                                    })
                                                }),
                                                "\u2002|\u2002"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Login"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const header_Header = (Header);

// EXTERNAL MODULE: external "react-toast-notifications"
var external_react_toast_notifications_ = __webpack_require__(5927);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/footer/Footer.js











const Footer_fetcher = (...args)=>fetch(...args).then((res)=>res.json()
    )
;
function Footer({ data_header  }) {
    const { addToast  } = (0,external_react_toast_notifications_.useToasts)();
    const { 0: name , 1: setName  } = (0,external_react_.useState)("");
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: mobile , 1: setMobile  } = (0,external_react_.useState)("");
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)("");
    const { 0: nameErr1 , 1: setNameErr  } = (0,external_react_.useState)({});
    const { 0: emailErr1 , 1: setEmailErr  } = (0,external_react_.useState)({});
    const { 0: mobileErr1 , 1: setMobileErr  } = (0,external_react_.useState)({});
    const { 0: messageErr1 , 1: setMessageErr  } = (0,external_react_.useState)({});
    var pattern = new RegExp(/^[0-9\b]+$/);
    const submit = (e)=>{
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            fetch(`${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/contact_form`, {
                method: "POST",
                body: JSON.stringify({
                    full_name: name,
                    email,
                    mobile,
                    message
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then((response)=>{
                response.json();
                if (response.status === 200) {
                    setName("");
                    setEmail("");
                    setMobile("");
                    setMessage("");
                }
            }).then((json)=>addToast("form submitted Sucessfully", {
                    appearance: "success",
                    autoDismiss: true
                })
            ).catch((err)=>console.log(err)
            );
        }
    };
    const formValidation = ()=>{
        const nameErr = {};
        const emailErr = {};
        const mobileErr = {};
        const messageErr = {};
        let isValid = true;
        if (name === "") {
            nameErr.firstNameEmpty = "Name is required";
            isValid = false;
        } else if (name.trim().length < 5) {
            nameErr.firstNameShort = "Full name is too short";
            isValid = false;
        }
        if (email === "") {
            emailErr.emailEmpty = "Email is required";
            isValid = false;
        } else if (!email.includes("@")) {
            emailErr.emailerror = "You have entered a wrong email";
            isValid = false;
        }
        if (mobile === "") {
            mobileErr.mobileEmpty = "Contact is required";
            isValid = false;
        } else if (!pattern.test(mobile)) {
            mobileErr.mobilenumbershort = "Mobile number should be numeric";
            isValid = false;
        } else if (mobile.trim().length != 10) {
            mobileErr.mobilenumbershort = "Mobile number should be in ten digit";
            isValid = false;
        }
        if (message === "") {
            messageErr.messageEmpty = "Message is required";
            isValid = false;
        } else if (message.trim().length < 5) {
            messageErr.mobilenumbershort = "Message length should be 5 words or more";
            isValid = false;
        }
        setNameErr(nameErr);
        setEmailErr(emailErr);
        setMobileErr(mobileErr);
        setMessageErr(messageErr);
        return isValid;
    };
    const url = `${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/config?fields=*,logo.data.full_url`;
    const { data , error  } = external_swr_default()(url, Footer_fetcher);
    if (error) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Error..."
        });
    }
    if (!data) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "No Data..."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footerbg",
                id: "footer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    style: {
                                        paddingTop: "40px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                display: "flex"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/pglogo.png",
                                                    alt: "logo",
                                                    style: {
                                                        height: "53px"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    style: {
                                                        lineHeight: "20px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                fontSize: "19px",
                                                                fontFamily: "curveFont"
                                                            },
                                                            children: "Rukhmani Devi Public School"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                fontSize: "13px",
                                                                fontFamily: "curveFont"
                                                            },
                                                            className: "place",
                                                            children: "Bhopal, Madhya Pradesh"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Rukhmani Devi School, established in 2007, is a Co-educational, Day Boarding English medium public school affiliated to the Central Board of Secondary Education (CBSE), Delhi, up to 10th and 12th Grades. Pinegrove is a Regional Member of the Round Square, is accredited with ISO 9001:2008 (BSI) and is a member of the prestigious Indian Public Schools` Conference (IPSC)."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "contactus",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "|\xa0"
                                                    }),
                                                    "Connect with us"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "text-light",
                                                children: "Main Branch"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "tel:8871018886",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaPhoneAlt, {}),
                                                                "\xa0 8871018886"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "tel:8878954637",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaPhoneAlt, {}),
                                                                "\xa0 8878954637",
                                                                " "
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                    icon: free_solid_svg_icons_.faMapMarkerAlt
                                                                }),
                                                                "\xa0NH-46 BHOPAL- Narsinghgarh Road Near Jharkheda."
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "text-light",
                                                children: "Airport Road Branch"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "tel:9926188840",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaPhoneAlt, {}),
                                                                "\xa0 9926188840"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "tel:8109048886",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaPhoneAlt, {}),
                                                                "\xa0 8109048886"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                    icon: free_solid_svg_icons_.faMapMarkerAlt
                                                                }),
                                                                "\xa0Airport Road Data colony Bhopal postal code: 462030",
                                                                " "
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "emailus",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "|\xa0"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    class: "h-6 w-6",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    style: {
                                                        width: "25px",
                                                        color: "white"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        "stroke-width": "2",
                                                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    })
                                                }),
                                                "\xa0 Connect with us"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-group",
                                            id: "contact-bottom",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mb-2 input-group",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "input-group-prepend",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "input-group-text",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                    icon: free_solid_svg_icons_.faUser
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            name: "name",
                                                            type: "text",
                                                            id: "txtname1",
                                                            value: name,
                                                            onChange: (e)=>setName(e.target.value)
                                                            ,
                                                            placeholder: "Full Name",
                                                            className: "form-control"
                                                        })
                                                    ]
                                                }),
                                                Object.keys(nameErr1).map((key)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: {
                                                            color: "red",
                                                            fontWeight: "700",
                                                            fontSize: "15px"
                                                        },
                                                        children: nameErr1[key]
                                                    });
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-group",
                                            id: "contact-bottom",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mb-2 input-group",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "input-group-prepend",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "input-group-text",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                    icon: free_solid_svg_icons_.faEnvelope
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            name: "email",
                                                            type: "text",
                                                            id: "txtname2",
                                                            value: email,
                                                            onChange: (e)=>setEmail(e.target.value)
                                                            ,
                                                            placeholder: "Email@gmail.com",
                                                            className: "form-control"
                                                        })
                                                    ]
                                                }),
                                                Object.keys(emailErr1).map((key)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: {
                                                            color: "red",
                                                            fontWeight: "700",
                                                            fontSize: "15px"
                                                        },
                                                        children: emailErr1[key]
                                                    });
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-group",
                                            id: "contact-bottom",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mb-2 input-group",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "input-group-prepend",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "input-group-text",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaPhoneAlt, {})
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            name: "mobile",
                                                            type: "text",
                                                            id: "txtname3",
                                                            value: mobile,
                                                            onChange: (e)=>setMobile(e.target.value)
                                                            ,
                                                            placeholder: "Contact Number",
                                                            className: "form-control"
                                                        })
                                                    ]
                                                }),
                                                Object.keys(mobileErr1).map((key)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: {
                                                            color: "red",
                                                            fontWeight: "700",
                                                            fontSize: "15px"
                                                        },
                                                        children: mobileErr1[key]
                                                    });
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-group",
                                            id: "contact-bottom",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mb-2 input-group",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "input-group-prepend",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "input-group-text",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                    icon: free_solid_svg_icons_.faComment
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            name: "message",
                                                            type: "text",
                                                            id: "txtname4",
                                                            value: message,
                                                            onChange: (e)=>setMessage(e.target.value)
                                                            ,
                                                            placeholder: "Your Message",
                                                            className: "form-control"
                                                        })
                                                    ]
                                                }),
                                                Object.keys(messageErr1).map((key)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: {
                                                            color: "red",
                                                            fontWeight: "700",
                                                            fontSize: "15px"
                                                        },
                                                        children: messageErr1[key]
                                                    });
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                name: "submit",
                                                onClick: submit,
                                                value: "send",
                                                id: "btnsubmit1",
                                                className: "py-2 btn btn-info btn-block rounded-0",
                                                style: {
                                                    backgroundColor: "#94d1f5",
                                                    color: "black"
                                                },
                                                children: "send"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "subfooter",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center text-light ",
                    children: [
                        "Rukhmani Devi School\xa0|\xa0 Design & Maintained with \xa0\xa0",
                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                            style: {
                                color: "red"
                            },
                            icon: free_solid_svg_icons_.faHeart
                        }),
                        " \xa0 by \xa0",
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "http://maitretech.com/",
                            target: "_blank",
                            children: [
                                " ",
                                "maitretech.com"
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const footer_Footer = (Footer);
async function getStaticProps(context) {
    let data_header;
    try {
        const response = await fetch(`${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/config?fields=*,logo.data.full_url`);
        data_header = await response.json();
    } catch (error) {
        data_header = false;
    }
    return {
        props: {
            data_header
        },
        revalidate: 2
    };
}

// EXTERNAL MODULE: external "react-toast-notifications/dist/ToastProvider"
var ToastProvider_ = __webpack_require__(7590);
// EXTERNAL MODULE: ../../.nvm/versions/node/v16.0.0/lib/node_modules/next/head.js
var head = __webpack_require__(5657);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
;// CONCATENATED MODULE: ./components/layouts/Layout.js






// import Headercontant from '../header/Headercontant'
const Layout = ({ children , data_header  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Rukhmani Devi Public School"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/jpg",
                        href: "/images/fullogo.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(ToastProvider_.ToastProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {
                    data_header: data_header
                })
            })
        ]
    });
};
/* harmony default export */ const layouts_Layout = (Layout);


/***/ }),

/***/ 5657:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(4957)


/***/ })

};
;