// Figma 2401:106308. Static roadmap content, states and original SVG curves.
// Coordinates are in the 10300px diagram, independent of viewport size.
// Indicators are reference content, not live audit results.
const roadmapData = [
  {
    "version": "1.0",
    "heading": "2401:106310",
    "nodes": [
      {
        "id": "2401:106310",
        "text": "PORTFOLIO: VERSION 1.0",
        "state": "done",
        "x": 96,
        "y": 184.5,
        "width": 243,
        "height": 30
      },
      {
        "id": "2401:106325",
        "text": "SEO",
        "state": "done",
        "x": 817,
        "y": 295.5,
        "width": 61,
        "height": 30
      },
      {
        "id": "2401:106312",
        "text": "NAVBAR",
        "state": "done",
        "x": 817.4002075195312,
        "y": 43.5,
        "width": 87,
        "height": 30
      },
      {
        "id": "2401:106311",
        "text": "HOME",
        "state": "done",
        "x": 817.4002075195312,
        "y": 79.5,
        "width": 68,
        "height": 30
      },
      {
        "id": "2401:106315",
        "text": "CV",
        "state": "done",
        "x": 817.4002075195312,
        "y": 115.5,
        "width": 48,
        "height": 30
      },
      {
        "id": "2401:106317",
        "text": "SC_1: APPARELL APP",
        "state": "done",
        "x": 817.4002075195312,
        "y": 151.5,
        "width": 204,
        "height": 30
      },
      {
        "id": "2401:106319",
        "text": "RESPONSIVE",
        "state": "done",
        "x": 817.4002075195312,
        "y": 187.5,
        "width": 126,
        "height": 30
      },
      {
        "id": "2401:106321",
        "text": "GITHUB / DOMAIN / DEPLOY",
        "state": "done",
        "x": 817.4002075195312,
        "y": 223.5,
        "width": 263,
        "height": 30
      },
      {
        "id": "2401:106323",
        "text": "PERFORMANCE",
        "state": "done",
        "x": 817.4002075195312,
        "y": 259.5,
        "width": 136,
        "height": 30
      },
      {
        "id": "2401:106327",
        "text": "COMPRESIÓN DE IMÁGENES",
        "state": "planned",
        "x": 1284,
        "y": 23.5,
        "width": 243,
        "height": 30
      },
      {
        "id": "2401:106332",
        "text": "OPTIMIZACIÓN DE VIDEO",
        "state": "planned",
        "x": 1284,
        "y": 121.5,
        "width": 234,
        "height": 30
      },
      {
        "id": "2401:106339",
        "text": "FRONTEND",
        "state": "planned",
        "x": 1284,
        "y": 210.5,
        "width": 107,
        "height": 30
      },
      {
        "id": "2401:106341",
        "text": "WIDTH / HEIGHT EN IMÁGENES",
        "state": "planned",
        "x": 1482,
        "y": 252.5,
        "width": 282,
        "height": 30
      },
      {
        "id": "2401:106342",
        "text": "MINIFICAR JS / CSS",
        "state": "planned",
        "x": 1482,
        "y": 288.5,
        "width": 204,
        "height": 30
      },
      {
        "id": "2401:106343",
        "text": "ELIMINAR JS NO UTILIZADO",
        "state": "planned",
        "x": 1482,
        "y": 324.5,
        "width": 263,
        "height": 30
      },
      {
        "id": "2401:106344",
        "text": "REVISAR LONG TASKS",
        "state": "planned",
        "x": 1482,
        "y": 360.5,
        "width": 204,
        "height": 30
      },
      {
        "id": "2401:106329",
        "text": "WEBP / AVIF",
        "state": "planned",
        "x": 1768,
        "y": 9.5,
        "width": 136,
        "height": 30
      },
      {
        "id": "2401:106330",
        "text": "REDUCIR PESO",
        "state": "planned",
        "x": 1768,
        "y": 54.5,
        "width": 146,
        "height": 30
      },
      {
        "id": "2401:106331",
        "text": "REVISAR DIMENSIONES",
        "state": "planned",
        "x": 1768,
        "y": 97.5,
        "width": 214,
        "height": 30
      },
      {
        "id": "2401:106335",
        "text": "COMPRIMIR",
        "state": "planned",
        "x": 1875,
        "y": 160.5,
        "width": 116,
        "height": 30
      },
      {
        "id": "2401:106336",
        "text": "POSTER",
        "state": "planned",
        "x": 1875,
        "y": 196.5,
        "width": 87,
        "height": 30
      },
      {
        "id": "2401:106337",
        "text": "PRELOAD",
        "state": "planned",
        "x": 1875,
        "y": 232.5,
        "width": 97,
        "height": 30
      },
      {
        "id": "2401:106338",
        "text": "LAZY LOAD",
        "state": "planned",
        "x": 1875,
        "y": 268.5,
        "width": 116,
        "height": 30
      },
      {
        "id": "2401:106345",
        "text": "SITEMAP.XML",
        "state": "planned",
        "x": 2180,
        "y": 31.5,
        "width": 136,
        "height": 30
      },
      {
        "id": "2401:106347",
        "text": "ROBOTS.TXT",
        "state": "planned",
        "x": 2180,
        "y": 67.5,
        "width": 126,
        "height": 30
      },
      {
        "id": "2401:106349",
        "text": "CANONICAL",
        "state": "planned",
        "x": 2180,
        "y": 103.5,
        "width": 116,
        "height": 30
      },
      {
        "id": "2401:106351",
        "text": "META DESCRIPTION",
        "state": "planned",
        "x": 2180,
        "y": 139.5,
        "width": 185,
        "height": 30
      },
      {
        "id": "2401:106353",
        "text": "OPEN GRAPH",
        "state": "planned",
        "x": 2180,
        "y": 175.5,
        "width": 126,
        "height": 30
      },
      {
        "id": "2401:106355",
        "text": "FAVICON",
        "state": "planned",
        "x": 2180,
        "y": 211.5,
        "width": 97,
        "height": 30
      },
      {
        "id": "2401:106357",
        "text": "STRUCTURED DATA",
        "state": "planned",
        "x": 2180,
        "y": 247.5,
        "width": 175,
        "height": 30
      },
      {
        "id": "2401:106359",
        "text": "ALT DE IMÁGENES",
        "state": "planned",
        "x": 2180,
        "y": 283.5,
        "width": 175,
        "height": 30
      },
      {
        "id": "2401:106361",
        "text": "JERARQUÍA H1 / H2 / H3",
        "state": "planned",
        "x": 2180,
        "y": 319.5,
        "width": 243,
        "height": 30
      }
    ],
    "connections": [
      {
        "id": "2401:106313",
        "from": "2401:106310",
        "to": "2401:106311",
        "x": 341.5,
        "y": 94.0,
        "width": 474.0,
        "height": 106.0,
        "viewBox": "0 0 474 106",
        "paths": [
          {
            "d": "M0.5 105.5C206.476 105.5 266.924 0.5 472.9 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106314",
        "from": "2401:106310",
        "to": "2401:106312",
        "x": 341.5,
        "y": 58.0,
        "width": 474.0,
        "height": 142.0,
        "viewBox": "0 0 474 142",
        "paths": [
          {
            "d": "M0.5 141.5C210.298 141.5 263.102 0.5 472.9 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106316",
        "from": "2401:106310",
        "to": "2401:106315",
        "x": 341.5,
        "y": 130.0,
        "width": 474.0,
        "height": 70.0,
        "viewBox": "0 0 474 70",
        "paths": [
          {
            "d": "M0.5 69.5C203.73 69.5 269.671 0.5 472.9 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106318",
        "from": "2401:106310",
        "to": "2401:106317",
        "x": 341.5,
        "y": 166.0,
        "width": 474.0,
        "height": 34.0,
        "viewBox": "0 0 474 34",
        "paths": [
          {
            "d": "M0.5 33.5C202.102 33.5 271.298 0.5 472.9 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106320",
        "from": "2401:106310",
        "to": "2401:106319",
        "x": 341.5,
        "y": 199.0,
        "width": 474.0,
        "height": 4.0,
        "viewBox": "0 0 474 4",
        "paths": [
          {
            "d": "M0.5 0.5C201.621 0.5 271.779 3.5 472.9 3.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106322",
        "from": "2401:106310",
        "to": "2401:106321",
        "x": 341.5,
        "y": 199.0,
        "width": 474.0,
        "height": 40.0,
        "viewBox": "0 0 474 40",
        "paths": [
          {
            "d": "M0.5 0.5C202.295 0.5 271.106 39.5 472.9 39.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106324",
        "from": "2401:106310",
        "to": "2401:106323",
        "x": 341.5,
        "y": 199.0,
        "width": 474.0,
        "height": 76.0,
        "viewBox": "0 0 474 76",
        "paths": [
          {
            "d": "M0.5 0.5C204.111 0.5 269.29 75.5 472.9 75.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106326",
        "from": "2401:106310",
        "to": "2401:106325",
        "x": 341.5,
        "y": 199.0,
        "width": 473.0,
        "height": 112.0,
        "viewBox": "0 0 473 112",
        "paths": [
          {
            "d": "M0.5 0.5C206.873 0.5 266.127 111.5 472.5 111.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106328",
        "from": "2401:106323",
        "to": "2401:106327",
        "x": 955.8902587890625,
        "y": 40.88916015625,
        "width": 328.0,
        "height": 234.0,
        "viewBox": "0 0 328 234",
        "paths": [
          {
            "d": "M0.5 233.367C222.43 215.344 247.404 287.344 327.305 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106333",
        "from": "2401:106309",
        "to": "2401:106332",
        "x": 952.900146484375,
        "y": 138.76416015625,
        "width": 331.0,
        "height": 137.0,
        "viewBox": "0 0 331 137",
        "paths": [
          {
            "d": "M0.5 135.735C225.42 117.468 250.394 189.469 329.936 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106334",
        "from": "2401:106309",
        "to": "2401:106332",
        "x": 952.900146484375,
        "y": 138.76416015625,
        "width": 331.0,
        "height": 137.0,
        "viewBox": "0 0 331 137",
        "paths": [
          {
            "d": "M0.5 135.735C225.42 117.468 250.394 189.469 329.936 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106340",
        "from": "2401:106309",
        "to": "2401:106339",
        "x": 952.900146484375,
        "y": 227.35888671875,
        "width": 330.0,
        "height": 56.0,
        "viewBox": "0 0 330 56",
        "paths": [
          {
            "d": "M0.5 47.1409C225.42 28.8743 250.394 100.875 329.247 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106346",
        "from": "2401:106325",
        "to": "2401:106345",
        "x": 880.3919067382812,
        "y": 48.5830078125,
        "width": 1299.0,
        "height": 412.0,
        "viewBox": "0 0 1299 412",
        "paths": [
          {
            "d": "M0.500122 262.715C1029.93 546.805 1060.41 402.796 1298.08 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106348",
        "from": "2401:106309",
        "to": "2401:106347",
        "x": 877.5,
        "y": 84.51708984375,
        "width": 1302.0,
        "height": 378.0,
        "viewBox": "0 0 1302 378",
        "paths": [
          {
            "d": "M0.500122 225.983C1032.82 510.871 1063.3 366.863 1300.87 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106350",
        "from": "2401:106309",
        "to": "2401:106349",
        "x": 877.5,
        "y": 120.43701171875,
        "width": 1302.0,
        "height": 343.0,
        "viewBox": "0 0 1302 343",
        "paths": [
          {
            "d": "M0.500122 190.064C1032.82 474.951 1063.3 330.943 1300.75 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106352",
        "from": "2401:106309",
        "to": "2401:106351",
        "x": 877.5,
        "y": 156.3359375,
        "width": 1302.0,
        "height": 309.0,
        "viewBox": "0 0 1302 309",
        "paths": [
          {
            "d": "M0.500122 154.164C1032.82 439.052 1063.3 295.043 1300.62 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106354",
        "from": "2401:106309",
        "to": "2401:106353",
        "x": 877.5,
        "y": 192.21142578125,
        "width": 1301.0,
        "height": 276.0,
        "viewBox": "0 0 1301 276",
        "paths": [
          {
            "d": "M0.500122 118.289C1032.82 403.176 1063.3 259.168 1300.47 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106356",
        "from": "2401:106309",
        "to": "2401:106355",
        "x": 877.5,
        "y": 228.0546875,
        "width": 1301.0,
        "height": 242.0,
        "viewBox": "0 0 1301 242",
        "paths": [
          {
            "d": "M0.500122 82.4451C1032.82 367.333 1063.3 223.324 1300.31 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106358",
        "from": "2401:106309",
        "to": "2401:106357",
        "x": 877.5,
        "y": 263.859375,
        "width": 1301.0,
        "height": 208.0,
        "viewBox": "0 0 1301 208",
        "paths": [
          {
            "d": "M0.500122 46.6408C1032.82 331.529 1063.3 187.52 1300.15 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106360",
        "from": "2401:106309",
        "to": "2401:106359",
        "x": 877.5,
        "y": 299.615234375,
        "width": 1301.0,
        "height": 175.0,
        "viewBox": "0 0 1301 175",
        "paths": [
          {
            "d": "M0.500122 10.8844C1032.82 295.772 1063.3 151.764 1299.97 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106362",
        "from": "2401:106309",
        "to": "2401:106361",
        "x": 877.5,
        "y": 310.0,
        "width": 1301.0,
        "height": 167.0,
        "viewBox": "0 0 1301 167",
        "paths": [
          {
            "d": "M0.500122 0.5C1032.82 285.388 1063.3 141.379 1299.8 25.8171",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106363",
        "from": "2401:106327",
        "to": "2401:106329",
        "x": 1529.5,
        "y": 24.0,
        "width": 236.0,
        "height": 15.0,
        "viewBox": "0 0 236 15",
        "paths": [
          {
            "d": "M0.5 14.5C100.5 14.5 135.5 0.5 235.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106364",
        "from": "2401:106309",
        "to": "2401:106330",
        "x": 1526.5,
        "y": 38.0,
        "width": 239.0,
        "height": 32.0,
        "viewBox": "0 0 239 32",
        "paths": [
          {
            "d": "M0.5 0.5C104.174 0.5 137.826 31.5 238.5 31.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106365",
        "from": "2401:106309",
        "to": "2401:106331",
        "x": 1526.5,
        "y": 38.0,
        "width": 239.0,
        "height": 75.0,
        "viewBox": "0 0 239 75",
        "paths": [
          {
            "d": "M0.5 0.5C108.065 0.5 133.935 74.5 238.5 74.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106366",
        "from": "2401:106332",
        "to": "2401:106338",
        "x": 1520.5,
        "y": 136.0,
        "width": 352.0,
        "height": 148.0,
        "viewBox": "0 0 352 148",
        "paths": [
          {
            "d": "M0.5 0.5C162.228 0.5 189.772 147.5 351.5 147.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106367",
        "from": "2401:106309",
        "to": "2401:106341",
        "x": 1390.5,
        "y": 224.8876953125,
        "width": 90.0,
        "height": 43.0,
        "viewBox": "0 0 90 43",
        "paths": [
          {
            "d": "M0.5 0.5C43.2396 55.5195 46.5122 37.5013 88.5192 42.2737",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106368",
        "from": "2401:106309",
        "to": "2401:106342",
        "x": 1390.5,
        "y": 224.8876953125,
        "width": 90.0,
        "height": 78.0,
        "viewBox": "0 0 90 78",
        "paths": [
          {
            "d": "M0.5 0.5C43.2396 55.5195 46.5122 37.5015 89.2854 76.5886",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106369",
        "from": "2401:106309",
        "to": "2401:106343",
        "x": 1390.5,
        "y": 224.8876953125,
        "width": 91.0,
        "height": 113.0,
        "viewBox": "0 0 91 113",
        "paths": [
          {
            "d": "M0.5 0.5C43.2396 55.5195 46.5122 37.5015 89.9882 112.021",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106370",
        "from": "2401:106309",
        "to": "2401:106344",
        "x": 1390.5,
        "y": 224.8876953125,
        "width": 91.0,
        "height": 149.0,
        "viewBox": "0 0 91 149",
        "paths": [
          {
            "d": "M0.5 0.5C43.2396 55.5195 46.5122 37.5015 90.3913 147.825",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106371",
        "from": "2401:106309",
        "to": "2401:106337",
        "x": 1517.5,
        "y": 136.0,
        "width": 355.0,
        "height": 112.0,
        "viewBox": "0 0 355 112",
        "paths": [
          {
            "d": "M0.5 0.5C160.013 0.5 197.987 111.5 354.5 111.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106372",
        "from": "2401:106309",
        "to": "2401:106336",
        "x": 1517.5,
        "y": 136.0,
        "width": 355.0,
        "height": 76.0,
        "viewBox": "0 0 355 76",
        "paths": [
          {
            "d": "M0.5 0.5C156.145 0.5 201.855 75.5 354.5 75.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106373",
        "from": "2401:106309",
        "to": "2401:106335",
        "x": 1517.5,
        "y": 136.0,
        "width": 355.0,
        "height": 40.0,
        "viewBox": "0 0 355 40",
        "paths": [
          {
            "d": "M0.5 0.5C153.726 0.5 204.274 39.5 354.5 39.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      }
    ],
    "metrics": {
      "x": 102,
      "y": 229.5,
      "items": [
        {
          "value": "75",
          "label": "PRF",
          "asset": "indicator-75-prf.svg"
        },
        {
          "value": "75",
          "label": "A11Y",
          "asset": "indicator-75-a11y.svg"
        },
        {
          "value": "100",
          "label": "BPRC",
          "asset": "indicator-100-bprc.svg"
        },
        {
          "value": "100",
          "label": "SEO",
          "asset": "indicator-100-bprc.svg"
        },
        {
          "value": "2/2",
          "label": "AGNT",
          "asset": "indicator-2-2-agnt.svg"
        }
      ]
    }
  },
  {
    "version": "1.1",
    "heading": "2401:106402",
    "nodes": [
      {
        "id": "2401:106402",
        "text": "PORTFOLIO: VERSION 1.1",
        "state": "planned",
        "x": 2551,
        "y": 150.5625,
        "width": 243,
        "height": 30
      },
      {
        "id": "2401:106384",
        "text": "SC_1:APPARELL APP",
        "state": "planned",
        "x": 2860,
        "y": 250.9375,
        "width": 194,
        "height": 30
      },
      {
        "id": "2401:106382",
        "text": "COPY",
        "state": "planned",
        "x": 2923,
        "y": 91.8125,
        "width": 68,
        "height": 30
      },
      {
        "id": "2401:106383",
        "text": "SETTINGS",
        "state": "planned",
        "x": 2981,
        "y": 148.5625,
        "width": 110,
        "height": 30
      },
      {
        "id": "2401:106387",
        "text": "REVISION",
        "state": "planned",
        "x": 3071,
        "y": 67.8125,
        "width": 107,
        "height": 30
      },
      {
        "id": "2401:106386",
        "text": "TRADUCCIÓN",
        "state": "planned",
        "x": 3071,
        "y": 108.8125,
        "width": 126,
        "height": 30
      },
      {
        "id": "2401:106397",
        "text": "DESIGN SYSTEM",
        "state": "planned",
        "x": 3142,
        "y": 272.9375,
        "width": 155,
        "height": 30
      },
      {
        "id": "2401:106398",
        "text": "COPY GUIDE",
        "state": "planned",
        "x": 3142,
        "y": 317.9375,
        "width": 126,
        "height": 30
      },
      {
        "id": "2401:106399",
        "text": "WIREFRAMES",
        "state": "planned",
        "x": 3142,
        "y": 362.9375,
        "width": 126,
        "height": 30
      },
      {
        "id": "2401:106381",
        "text": "EXPERIENCIA",
        "state": "planned",
        "x": 3338,
        "y": 101.5625,
        "width": 136,
        "height": 30
      },
      {
        "id": "2401:106389",
        "text": "APARIENCIA",
        "state": "planned",
        "x": 3338,
        "y": 153.5625,
        "width": 124,
        "height": 30
      },
      {
        "id": "2401:106393",
        "text": "MOVIMIENTO",
        "state": "planned",
        "x": 3342,
        "y": 205.5625,
        "width": 123,
        "height": 30
      },
      {
        "id": "2401:106396",
        "text": "IDIOMA",
        "state": "planned",
        "x": 3344,
        "y": 259.5625,
        "width": 88,
        "height": 30
      },
      {
        "id": "2401:106385",
        "text": "HUMANO",
        "state": "planned",
        "x": 3632,
        "y": 7.0625,
        "width": 87,
        "height": 30
      },
      {
        "id": "2401:106388",
        "text": "AGENTE",
        "state": "planned",
        "x": 3632,
        "y": 43.0625,
        "width": 87,
        "height": 30
      },
      {
        "id": "2401:106390",
        "text": "CLARO",
        "state": "planned",
        "x": 3635,
        "y": 88.0625,
        "width": 77,
        "height": 30
      },
      {
        "id": "2401:106391",
        "text": "OSCURO",
        "state": "planned",
        "x": 3635,
        "y": 124.0625,
        "width": 87,
        "height": 30
      },
      {
        "id": "2401:106392",
        "text": "SISTEMA",
        "state": "planned",
        "x": 3635,
        "y": 160.0625,
        "width": 97,
        "height": 30
      },
      {
        "id": "2401:106394",
        "text": "COMPLETO",
        "state": "planned",
        "x": 3635,
        "y": 199.0625,
        "width": 107,
        "height": 30
      },
      {
        "id": "2401:106395",
        "text": "REDUCIDO",
        "state": "planned",
        "x": 3635,
        "y": 235.0625,
        "width": 107,
        "height": 30
      },
      {
        "id": "2401:106400",
        "text": "ES",
        "state": "planned",
        "x": 3636,
        "y": 274.0625,
        "width": 48,
        "height": 30
      },
      {
        "id": "2401:106401",
        "text": "EN",
        "state": "planned",
        "x": 3636,
        "y": 310.0625,
        "width": 48,
        "height": 30
      }
    ],
    "connections": [
      {
        "id": "2401:106411",
        "from": "2401:106382",
        "to": "2401:106386",
        "x": 2993.5,
        "y": 106.3125,
        "width": 75.0,
        "height": 18.0,
        "viewBox": "0 0 75 18",
        "paths": [
          {
            "d": "M0.5 0.5C32.3955 0.5 42.6045 17.5 74.5 17.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106409",
        "from": "2401:106402",
        "to": "2401:106382",
        "x": 2796.5,
        "y": 106.3125,
        "width": 124.0,
        "height": 60.0,
        "viewBox": "0 0 124 60",
        "paths": [
          {
            "d": "M0.5 59.25C57.9792 59.25 66.0208 0.5 123.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106410",
        "from": "2401:106382",
        "to": "2401:106387",
        "x": 2993.5,
        "y": 82.3125,
        "width": 75.0,
        "height": 25.0,
        "viewBox": "0 0 75 25",
        "paths": [
          {
            "d": "M0.5 24.5C33.1362 24.5 41.8638 0.5 74.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106412",
        "from": "2401:106383",
        "to": "2401:106381",
        "x": 3093.5,
        "y": 116.0625,
        "width": 242.0,
        "height": 48.0,
        "viewBox": "0 0 242 48",
        "paths": [
          {
            "d": "M0.5 47.5C104.778 47.5 137.222 0.5 241.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106413",
        "from": "2401:106381",
        "to": "2401:106385",
        "x": 3476.5,
        "y": 21.5625,
        "width": 153.0,
        "height": 96.0,
        "viewBox": "0 0 153 96",
        "paths": [
          {
            "d": "M0.5 95C76.051 95 76.949 0.5 152.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106414",
        "from": "2401:106380",
        "to": "2401:106388",
        "x": 3473.5,
        "y": 57.5625,
        "width": 156.0,
        "height": 60.0,
        "viewBox": "0 0 156 60",
        "paths": [
          {
            "d": "M0.5 59C72.3857 59 86.6143 0.5 155.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106415",
        "from": "2401:106389",
        "to": "2401:106390",
        "x": 3464.5,
        "y": 102.5625,
        "width": 168.0,
        "height": 67.0,
        "viewBox": "0 0 168 67",
        "paths": [
          {
            "d": "M0.5 66C76.4267 66 91.5733 0.5 167.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106416",
        "from": "2401:106380",
        "to": "2401:106391",
        "x": 3461.5,
        "y": 138.5625,
        "width": 171.0,
        "height": 31.0,
        "viewBox": "0 0 171 31",
        "paths": [
          {
            "d": "M0.5 30C75.3788 30 98.6212 0.5 170.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106417",
        "from": "2401:106380",
        "to": "2401:106392",
        "x": 3461.5,
        "y": 168.0625,
        "width": 171.0,
        "height": 8.0,
        "viewBox": "0 0 171 8",
        "paths": [
          {
            "d": "M0.5 0.5C74.3654 0.5 99.6346 7 170.5 7",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106418",
        "from": "2401:106393",
        "to": "2401:106394",
        "x": 3467.5,
        "y": 213.5625,
        "width": 165.0,
        "height": 8.0,
        "viewBox": "0 0 165 8",
        "paths": [
          {
            "d": "M0.5 7C70.0863 7 94.9137 0.5 164.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106419",
        "from": "2401:106393",
        "to": "2401:106395",
        "x": 3467.5,
        "y": 220.0625,
        "width": 165.0,
        "height": 31.0,
        "viewBox": "0 0 165 31",
        "paths": [
          {
            "d": "M0.5 0.5C71.1173 0.5 93.8827 30 164.5 30",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106420",
        "from": "2401:106396",
        "to": "2401:106400",
        "x": 3434.5,
        "y": 274.0625,
        "width": 199.0,
        "height": 16.0,
        "viewBox": "0 0 199 16",
        "paths": [
          {
            "d": "M0.5 0.5C84.7596 0.5 114.24 15 198.5 15",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106421",
        "from": "2401:106396",
        "to": "2401:106401",
        "x": 3434.5,
        "y": 274.0625,
        "width": 199.0,
        "height": 52.0,
        "viewBox": "0 0 199 52",
        "paths": [
          {
            "d": "M0.5 0.5C87.1673 0.5 111.833 51 198.5 51",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106422",
        "from": "2401:106383",
        "to": "2401:106389",
        "x": 3093.5,
        "y": 163.0625,
        "width": 242.0,
        "height": 6.0,
        "viewBox": "0 0 242 6",
        "paths": [
          {
            "d": "M0.5 0.5C102.908 0.5 139.092 5.5 241.5 5.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106423",
        "from": "2401:106383",
        "to": "2401:106393",
        "x": 3093.5,
        "y": 163.0625,
        "width": 246.0,
        "height": 58.0,
        "viewBox": "0 0 246 58",
        "paths": [
          {
            "d": "M0.5 0.5C107.32 0.5 138.68 57.5 245.5 57.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106424",
        "from": "2401:106380",
        "to": "2401:106396",
        "x": 3090.5,
        "y": 163.0625,
        "width": 251.0,
        "height": 112.0,
        "viewBox": "0 0 251 112",
        "paths": [
          {
            "d": "M0.5 0.5C118.379 0.5 135.621 111.5 250.5 111.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106425",
        "from": "2401:106402",
        "to": "2401:106383",
        "x": 2796.5,
        "y": 163.0625,
        "width": 182.0,
        "height": 3.0,
        "viewBox": "0 0 182 3",
        "paths": [
          {
            "d": "M0.5 2.5C77.2912 2.5 104.709 0.5 181.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106426",
        "from": "2401:106402",
        "to": "2401:106384",
        "x": 2796.5,
        "y": 165.0625,
        "width": 61.0,
        "height": 102.0,
        "viewBox": "0 0 61 102",
        "paths": [
          {
            "d": "M0.5 0.5C48.7553 0.5 12.2447 100.875 60.5 100.875",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106427",
        "from": "2401:106384",
        "to": "2401:106397",
        "x": 3056.5,
        "y": 265.4375,
        "width": 83.0,
        "height": 23.0,
        "viewBox": "0 0 83 23",
        "paths": [
          {
            "d": "M0.5 0.5C36.2022 0.5 46.7978 22.5 82.5 22.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106428",
        "from": "2401:106384",
        "to": "2401:106398",
        "x": 3056.5,
        "y": 265.4375,
        "width": 83.0,
        "height": 68.0,
        "viewBox": "0 0 83 68",
        "paths": [
          {
            "d": "M0.5 0.5C44.6906 0.5 38.3094 67.5 82.5 67.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106429",
        "from": "2401:106384",
        "to": "2401:106399",
        "x": 3056.5,
        "y": 265.4375,
        "width": 83.0,
        "height": 113.0,
        "viewBox": "0 0 83 113",
        "paths": [
          {
            "d": "M0.5 0.5C58.2727 0.5 24.7273 112.5 82.5 112.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      }
    ],
    "metrics": {
      "x": 2557,
      "y": 195.5625,
      "items": [
        {
          "value": "85",
          "label": "PRF",
          "asset": "indicator-85-prf.svg"
        },
        {
          "value": "99",
          "label": "A11Y",
          "asset": "indicator-99-a11y.svg"
        },
        {
          "value": "100",
          "label": "BPRC",
          "asset": "indicator-100-bprc-v1-1.svg"
        },
        {
          "value": "100",
          "label": "SEO",
          "asset": "indicator-100-bprc-v1-1.svg"
        },
        {
          "value": "2/2",
          "label": "AGNT",
          "asset": "indicator-100-bprc-v1-1.svg"
        }
      ]
    }
  },
  {
    "version": "1.2",
    "heading": "2401:106431",
    "nodes": [
      {
        "id": "2401:106431",
        "text": "PORTFOLIO: VERSION 1.2",
        "state": "planned",
        "x": 3870,
        "y": 119.75,
        "width": 243,
        "height": 30
      },
      {
        "id": "2401:106432",
        "text": "PJ_02: BARRIO",
        "state": "planned",
        "x": 4376,
        "y": 31.75,
        "width": 155,
        "height": 30
      },
      {
        "id": "2401:106440",
        "text": "SC_03: HATTRE",
        "state": "planned",
        "x": 4376,
        "y": 92.75,
        "width": 155,
        "height": 30
      },
      {
        "id": "2401:106442",
        "text": "MEJORA NAVEGACIÓN \nENTRE PROYECTOS",
        "state": "planned",
        "x": 4376,
        "y": 180.58984375,
        "width": 204,
        "height": 30
      },
      {
        "id": "2401:106446",
        "text": "ABOUT",
        "state": "planned",
        "x": 4376,
        "y": 259.75,
        "width": 81,
        "height": 30
      },
      {
        "id": "2401:106443",
        "text": "EXPOSICIONES",
        "state": "planned",
        "x": 4547,
        "y": 259.75,
        "width": 146,
        "height": 30
      },
      {
        "id": "2401:106444",
        "text": "PREMIOS",
        "state": "planned",
        "x": 4547,
        "y": 300.75,
        "width": 97,
        "height": 30
      },
      {
        "id": "2401:106445",
        "text": "EDUCACION",
        "state": "planned",
        "x": 4547,
        "y": 348.75,
        "width": 116,
        "height": 30
      },
      {
        "id": "2401:106452",
        "text": "NDA",
        "state": "planned",
        "x": 4853,
        "y": 133.75,
        "width": 58,
        "height": 30
      },
      {
        "id": "2401:106454",
        "text": "CASE",
        "state": "planned",
        "x": 4853,
        "y": 169.75,
        "width": 68,
        "height": 30
      },
      {
        "id": "2401:106456",
        "text": "PROTOTIPO FUNCIONAL",
        "state": "planned",
        "x": 4853,
        "y": 201.75,
        "width": 214,
        "height": 30
      },
      {
        "id": "2401:106434",
        "text": "PLANTILLA PROYECTOS",
        "state": "planned",
        "x": 4995,
        "y": 21.25,
        "width": 214,
        "height": 30
      },
      {
        "id": "2401:106436",
        "text": "BRANDING",
        "state": "planned",
        "x": 4995,
        "y": 57.25,
        "width": 107,
        "height": 30
      },
      {
        "id": "2401:106438",
        "text": "WEBSITE",
        "state": "planned",
        "x": 4995,
        "y": 93.25,
        "width": 97,
        "height": 30
      }
    ],
    "connections": [
      {
        "id": "2401:106433",
        "from": "2401:106431",
        "to": "2401:106432",
        "x": 4115.5,
        "y": 46.25,
        "width": 258.0,
        "height": 89.0,
        "viewBox": "0 0 258 89",
        "paths": [
          {
            "d": "M0.5 88.5C115.828 88.5 142.172 0.5 257.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106435",
        "from": "2401:106432",
        "to": "2401:106434",
        "x": 4533.5,
        "y": 35.75,
        "width": 459.0,
        "height": 12.0,
        "viewBox": "0 0 459 12",
        "paths": [
          {
            "d": "M0.5 11C195.524 11 263.476 0.5 458.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106437",
        "from": "2401:106432",
        "to": "2401:106436",
        "x": 4533.5,
        "y": 46.25,
        "width": 459.0,
        "height": 27.0,
        "viewBox": "0 0 459 27",
        "paths": [
          {
            "d": "M0.5 0.5C195.772 0.5 263.228 26 458.5 26",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106439",
        "from": "2401:106432",
        "to": "2401:106438",
        "x": 4533.5,
        "y": 46.25,
        "width": 459.0,
        "height": 63.0,
        "viewBox": "0 0 459 63",
        "paths": [
          {
            "d": "M0.5 0.5C197.205 0.5 261.795 62 458.5 62",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106441",
        "from": "2401:106431",
        "to": "2401:106440",
        "x": 4115.5,
        "y": 107.25,
        "width": 258.0,
        "height": 28.0,
        "viewBox": "0 0 258 28",
        "paths": [
          {
            "d": "M0.5 27.5C110.303 27.5 147.697 0.5 257.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106447",
        "from": "2401:106431",
        "to": "2401:106442",
        "x": 4115.5,
        "y": 134.25,
        "width": 258.0,
        "height": 62.0,
        "viewBox": "0 0 258 62",
        "paths": [
          {
            "d": "M0.5 0.5C112.677 0.5 145.323 61.3398 257.5 61.3398",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106448",
        "from": "2401:106430",
        "to": "2401:106446",
        "x": 4112.5,
        "y": 134.25,
        "width": 261.0,
        "height": 141.0,
        "viewBox": "0 0 261 141",
        "paths": [
          {
            "d": "M0.5 0.5C127.622 0.5 136.378 140.5 260.5 140.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106449",
        "from": "2401:106446",
        "to": "2401:106443",
        "x": 4459.5,
        "y": 274.25,
        "width": 85.0,
        "height": 1.0,
        "viewBox": "0 0 85 1",
        "paths": [
          {
            "d": "M0.5 0.5H84.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106450",
        "from": "2401:106430",
        "to": "2401:106444",
        "x": 4456.5,
        "y": 274.25,
        "width": 88.0,
        "height": 42.0,
        "viewBox": "0 0 88 42",
        "paths": [
          {
            "d": "M0.5 0.5C42.6969 0.5 48.3031 41.5 87.5 41.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106451",
        "from": "2401:106430",
        "to": "2401:106445",
        "x": 4456.5,
        "y": 274.25,
        "width": 88.0,
        "height": 90.0,
        "viewBox": "0 0 88 90",
        "paths": [
          {
            "d": "M0.5 0.5C54.5049 0.5 36.4951 89.5 87.5 89.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106453",
        "from": "2401:106440",
        "to": "2401:106452",
        "x": 4533.5,
        "y": 107.25,
        "width": 317.0,
        "height": 42.0,
        "viewBox": "0 0 317 42",
        "paths": [
          {
            "d": "M0.5 0.5C135.996 0.5 181.004 41.5 316.5 41.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106455",
        "from": "2401:106440",
        "to": "2401:106454",
        "x": 4533.5,
        "y": 107.25,
        "width": 317.0,
        "height": 78.0,
        "viewBox": "0 0 317 78",
        "paths": [
          {
            "d": "M0.5 0.5C138.76 0.5 178.24 77.5 316.5 77.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106457",
        "from": "2401:106440",
        "to": "2401:106456",
        "x": 4533.5,
        "y": 107.25,
        "width": 317.0,
        "height": 110.0,
        "viewBox": "0 0 317 110",
        "paths": [
          {
            "d": "M0.5 0.5C142.545 0.5 174.455 109.5 316.5 109.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      }
    ],
    "metrics": {
      "x": 3870,
      "y": 160.75,
      "items": [
        {
          "value": "90",
          "label": "PRF",
          "asset": "indicator-85-prf.svg"
        },
        {
          "value": "99",
          "label": "A11Y",
          "asset": "indicator-99-a11y.svg"
        },
        {
          "value": "100",
          "label": "BPRC",
          "asset": "indicator-100-bprc-v1-1.svg"
        },
        {
          "value": "100",
          "label": "SEO",
          "asset": "indicator-100-bprc-v1-1.svg"
        },
        {
          "value": "2/2",
          "label": "AGNT",
          "asset": "indicator-100-bprc-v1-1.svg"
        }
      ]
    }
  },
  {
    "version": "1.3",
    "heading": "2401:106465",
    "nodes": [
      {
        "id": "2401:106465",
        "text": "PORTFOLIO: VERSION 1.3",
        "state": "planned",
        "x": 5337,
        "y": 179.5,
        "width": 243,
        "height": 30
      },
      {
        "id": "2401:106466",
        "text": "EMAIL CORPORATIVO",
        "state": "planned",
        "x": 5833,
        "y": 68.5,
        "width": 195,
        "height": 30
      },
      {
        "id": "2401:106469",
        "text": "MICROINTERACCIONES",
        "state": "planned",
        "x": 5833,
        "y": 160.5,
        "width": 204,
        "height": 30
      },
      {
        "id": "2401:106468",
        "text": "FORMULARIO",
        "state": "planned",
        "x": 5839,
        "y": 282.5,
        "width": 126,
        "height": 30
      },
      {
        "id": "2401:106471",
        "text": "DESCARGA CV",
        "state": "planned",
        "x": 6154,
        "y": 24.5,
        "width": 136,
        "height": 30
      },
      {
        "id": "2401:106472",
        "text": "LINKS",
        "state": "planned",
        "x": 6154,
        "y": 63.5,
        "width": 77,
        "height": 30
      },
      {
        "id": "2401:106475",
        "text": "BOTONES",
        "state": "planned",
        "x": 6154,
        "y": 102.5,
        "width": 97,
        "height": 30
      },
      {
        "id": "2401:106477",
        "text": "APARICIONES",
        "state": "planned",
        "x": 6154,
        "y": 141.5,
        "width": 136,
        "height": 30
      },
      {
        "id": "2401:106480",
        "text": "NOMBRE",
        "state": "planned",
        "x": 6542,
        "y": 201.5,
        "width": 87,
        "height": 30
      },
      {
        "id": "2401:106482",
        "text": "EMAIL",
        "state": "planned",
        "x": 6542,
        "y": 237.5,
        "width": 77,
        "height": 30
      },
      {
        "id": "2401:106484",
        "text": "MENSAJE",
        "state": "planned",
        "x": 6542,
        "y": 273.5,
        "width": 97,
        "height": 30
      },
      {
        "id": "2401:106486",
        "text": "PRUEBAS",
        "state": "planned",
        "x": 6542,
        "y": 309.5,
        "width": 97,
        "height": 30
      },
      {
        "id": "2401:106488",
        "text": "ANTISPAM",
        "state": "planned",
        "x": 6542,
        "y": 345.5,
        "width": 107,
        "height": 30
      }
    ],
    "connections": [
      {
        "id": "2401:106467",
        "from": "2401:106464",
        "to": "2401:106466",
        "x": 5579.5,
        "y": 83.0,
        "width": 251.0,
        "height": 112.0,
        "viewBox": "0 0 251 112",
        "paths": [
          {
            "d": "M0.5 111.5C118.379 111.5 135.621 0.5 250.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106470",
        "from": "2401:106465",
        "to": "2401:106469",
        "x": 5582.5,
        "y": 175.0,
        "width": 248.0,
        "height": 20.0,
        "viewBox": "0 0 248 20",
        "paths": [
          {
            "d": "M0.5 19.5C105.751 19.5 142.249 0.5 247.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106473",
        "from": "2401:106469",
        "to": "2401:106471",
        "x": 6039.5,
        "y": 39.0,
        "width": 112.0,
        "height": 137.0,
        "viewBox": "0 0 112 137",
        "paths": [
          {
            "d": "M0.5 136.5C74.0448 136.5 37.9552 0.5 111.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106474",
        "from": "2401:106464",
        "to": "2401:106472",
        "x": 6036.5,
        "y": 78.0,
        "width": 115.0,
        "height": 98.0,
        "viewBox": "0 0 115 98",
        "paths": [
          {
            "d": "M0.5 97.5C65.3449 97.5 52.6551 0.5 114.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106476",
        "from": "2401:106464",
        "to": "2401:106475",
        "x": 6036.5,
        "y": 117.0,
        "width": 115.0,
        "height": 59.0,
        "viewBox": "0 0 115 59",
        "paths": [
          {
            "d": "M0.5 58.5C56.2172 58.5 61.7828 0.5 114.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106478",
        "from": "2401:106464",
        "to": "2401:106477",
        "x": 6036.5,
        "y": 156.0,
        "width": 115.0,
        "height": 20.0,
        "viewBox": "0 0 115 20",
        "paths": [
          {
            "d": "M0.5 19.5C51.074 19.5 66.926 0.5 114.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106479",
        "from": "2401:106465",
        "to": "2401:106468",
        "x": 5582.5,
        "y": 194.0,
        "width": 254.0,
        "height": 104.0,
        "viewBox": "0 0 254 104",
        "paths": [
          {
            "d": "M0.5 0.5C116.424 0.5 137.576 103.5 253.5 103.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106481",
        "from": "2401:106468",
        "to": "2401:106480",
        "x": 5967.5,
        "y": 216.0,
        "width": 572.0,
        "height": 82.0,
        "viewBox": "0 0 572 82",
        "paths": [
          {
            "d": "M0.5 81.5C246.101 81.5 325.899 0.5 571.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106483",
        "from": "2401:106468",
        "to": "2401:106482",
        "x": 5967.5,
        "y": 252.0,
        "width": 572.0,
        "height": 46.0,
        "viewBox": "0 0 572 46",
        "paths": [
          {
            "d": "M0.5 45.5C244.434 45.5 327.566 0.5 571.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106485",
        "from": "2401:106468",
        "to": "2401:106484",
        "x": 5967.5,
        "y": 288.0,
        "width": 572.0,
        "height": 10.0,
        "viewBox": "0 0 572 10",
        "paths": [
          {
            "d": "M0.5 9.5C243.717 9.5 328.283 0.5 571.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106487",
        "from": "2401:106468",
        "to": "2401:106486",
        "x": 5967.5,
        "y": 297.0,
        "width": 572.0,
        "height": 28.0,
        "viewBox": "0 0 572 28",
        "paths": [
          {
            "d": "M0.5 0.5C243.956 0.5 328.044 27.5 571.5 27.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106489",
        "from": "2401:106468",
        "to": "2401:106488",
        "x": 5967.5,
        "y": 297.0,
        "width": 572.0,
        "height": 64.0,
        "viewBox": "0 0 572 64",
        "paths": [
          {
            "d": "M0.5 0.5C245.15 0.5 326.85 63.5 571.5 63.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      }
    ],
    "metrics": {
      "x": 5337,
      "y": 220.5,
      "items": [
        {
          "value": "95",
          "label": "PRF",
          "asset": "indicator-85-prf.svg"
        },
        {
          "value": "99",
          "label": "A11Y",
          "asset": "indicator-99-a11y.svg"
        },
        {
          "value": "100",
          "label": "BPRC",
          "asset": "indicator-100-bprc-v1-1.svg"
        },
        {
          "value": "100",
          "label": "SEO",
          "asset": "indicator-100-bprc-v1-1.svg"
        },
        {
          "value": "2/2",
          "label": "AGNT",
          "asset": "indicator-100-bprc-v1-1.svg"
        }
      ]
    }
  },
  {
    "version": "2.0",
    "heading": "2401:106497",
    "nodes": [
      {
        "id": "2401:106497",
        "text": "PORTFOLIO: VERSION 2.0",
        "state": "planned",
        "x": 6777,
        "y": 197.6875,
        "width": 243,
        "height": 30
      },
      {
        "id": "2401:106504",
        "text": "/AGENTS",
        "state": "planned",
        "x": 7115,
        "y": 290.1875,
        "width": 85,
        "height": 30
      },
      {
        "id": "2401:106498",
        "text": "VERCEL ANALITYCS",
        "state": "planned",
        "x": 7253,
        "y": 48.9375,
        "width": 185,
        "height": 30
      },
      {
        "id": "2401:106506",
        "text": "PROFILE",
        "state": "planned",
        "x": 7275,
        "y": 150.0625,
        "width": 99,
        "height": 30
      },
      {
        "id": "2401:106507",
        "text": "INFO ESTRUCTURADA",
        "state": "planned",
        "x": 7426,
        "y": 114.0625,
        "width": 195,
        "height": 30
      },
      {
        "id": "2401:106515",
        "text": "ABOUT",
        "state": "planned",
        "x": 7426,
        "y": 149.0625,
        "width": 77,
        "height": 30
      },
      {
        "id": "2401:106516",
        "text": "EXPERIENCIA",
        "state": "planned",
        "x": 7426,
        "y": 188.0625,
        "width": 136,
        "height": 30
      },
      {
        "id": "2401:106509",
        "text": "CAPABILITIES",
        "state": "planned",
        "x": 7678,
        "y": 194.0625,
        "width": 146,
        "height": 32
      },
      {
        "id": "2401:106511",
        "text": "WORK",
        "state": "planned",
        "x": 7678,
        "y": 231.0625,
        "width": 68,
        "height": 33
      },
      {
        "id": "2401:106513",
        "text": "RESOURCES",
        "state": "planned",
        "x": 7678,
        "y": 270.0625,
        "width": 118,
        "height": 32
      },
      {
        "id": "2401:106517",
        "text": "MACHINE LAYERS",
        "state": "planned",
        "x": 7678,
        "y": 327.0625,
        "width": 165,
        "height": 30
      },
      {
        "id": "2401:106519",
        "text": "CV",
        "state": "planned",
        "x": 7863,
        "y": 219.0625,
        "width": 48,
        "height": 30
      },
      {
        "id": "2401:106520",
        "text": "LINKS",
        "state": "planned",
        "x": 7863,
        "y": 264.0625,
        "width": 77,
        "height": 30
      },
      {
        "id": "2401:106499",
        "text": "VISITAS HOME",
        "state": "planned",
        "x": 7880,
        "y": 28.9375,
        "width": 146,
        "height": 30
      },
      {
        "id": "2401:106500",
        "text": "VISITAS CASOS",
        "state": "planned",
        "x": 7880,
        "y": 68.9375,
        "width": 155,
        "height": 30
      },
      {
        "id": "2401:106501",
        "text": "DESCARGAS CV",
        "state": "planned",
        "x": 7880,
        "y": 111.9375,
        "width": 146,
        "height": 30
      },
      {
        "id": "2401:106502",
        "text": "PROFUNDIDAD DE SCROLL",
        "state": "planned",
        "x": 7880,
        "y": 159.9375,
        "width": 234,
        "height": 30
      },
      {
        "id": "2401:106518",
        "text": "/AGENT",
        "state": "planned",
        "x": 8108,
        "y": 221.0625,
        "width": 87,
        "height": 30
      },
      {
        "id": "2401:106521",
        "text": "JSON",
        "state": "planned",
        "x": 8108,
        "y": 261.0625,
        "width": 68,
        "height": 30
      },
      {
        "id": "2401:106522",
        "text": "JSON-LD",
        "state": "planned",
        "x": 8108,
        "y": 301.0625,
        "width": 97,
        "height": 30
      },
      {
        "id": "2401:106523",
        "text": "LLMS.TXT",
        "state": "planned",
        "x": 8108,
        "y": 341.0625,
        "width": 107,
        "height": 30
      }
    ],
    "connections": [
      {
        "id": "2401:106503",
        "from": "2401:106497",
        "to": "2401:106498",
        "x": 7022.5,
        "y": 63.4375,
        "width": 228.0,
        "height": 150.0,
        "viewBox": "0 0 228 150",
        "paths": [
          {
            "d": "M0.5 149.25C115.445 149.25 112.555 0.5 227.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106505",
        "from": "2401:106497",
        "to": "2401:106504",
        "x": 7022.5,
        "y": 212.1875,
        "width": 90.0,
        "height": 94.0,
        "viewBox": "0 0 90 94",
        "paths": [
          {
            "d": "M0.5 0.5C54.0736 0.5 35.9264 93 89.5 93",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106508",
        "from": "2401:106504",
        "to": "2401:106506",
        "x": 7202.5,
        "y": 164.5625,
        "width": 70.0,
        "height": 142.0,
        "viewBox": "0 0 70 142",
        "paths": [
          {
            "d": "M0.5 140.625C65.3118 140.625 4.68816 0.5 69.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106510",
        "from": "2401:106504",
        "to": "2401:106509",
        "x": 7202.5,
        "y": 209.5625,
        "width": 473.0,
        "height": 97.0,
        "viewBox": "0 0 473 97",
        "paths": [
          {
            "d": "M0.5 95.625C205.446 95.625 267.554 0.5 472.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106512",
        "from": "2401:106504",
        "to": "2401:106511",
        "x": 7202.5,
        "y": 247.0625,
        "width": 473.0,
        "height": 59.0,
        "viewBox": "0 0 473 59",
        "paths": [
          {
            "d": "M0.5 58.125C202.923 58.125 270.077 0.5 472.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106514",
        "from": "2401:106504",
        "to": "2401:106513",
        "x": 7202.5,
        "y": 285.5625,
        "width": 473.0,
        "height": 21.0,
        "viewBox": "0 0 473 21",
        "paths": [
          {
            "d": "M0.5 19.625C201.61 19.625 271.39 0.5 472.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106524",
        "from": "2401:106504",
        "to": "2401:106517",
        "x": 7202.5,
        "y": 304.6875,
        "width": 473.0,
        "height": 38.0,
        "viewBox": "0 0 473 38",
        "paths": [
          {
            "d": "M0.5 0.5C202.053 0.5 270.947 37.375 472.5 37.375",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106525",
        "from": "2401:106517",
        "to": "2401:106518",
        "x": 7845.5,
        "y": 235.5625,
        "width": 260.0,
        "height": 107.0,
        "viewBox": "0 0 260 107",
        "paths": [
          {
            "d": "M0.5 106.5C119.277 106.5 140.723 0.5 259.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106526",
        "from": "2401:106513",
        "to": "2401:106519",
        "x": 7798.5,
        "y": 233.5625,
        "width": 62.0,
        "height": 53.0,
        "viewBox": "0 0 62 53",
        "paths": [
          {
            "d": "M0.5 52.5C33.6863 52.5 28.3137 0.5 61.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106527",
        "from": "2401:106506",
        "to": "2401:106507",
        "x": 7376.5,
        "y": 128.5625,
        "width": 47.0,
        "height": 37.0,
        "viewBox": "0 0 47 37",
        "paths": [
          {
            "d": "M0.5 36.5C24.4848 36.5 22.5152 0.5 46.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106528",
        "from": "2401:106506",
        "to": "2401:106515",
        "x": 7376.5,
        "y": 163.5625,
        "width": 47.0,
        "height": 2.0,
        "viewBox": "0 0 47 2",
        "paths": [
          {
            "d": "M0.5 1.5C19.6908 1.5 27.3092 0.5 46.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106529",
        "from": "2401:106506",
        "to": "2401:106516",
        "x": 7376.5,
        "y": 164.5625,
        "width": 47.0,
        "height": 39.0,
        "viewBox": "0 0 47 39",
        "paths": [
          {
            "d": "M0.5 0.5C24.9795 0.5 22.0205 38.5 46.5 38.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106530",
        "from": "2401:106513",
        "to": "2401:106520",
        "x": 7798.5,
        "y": 278.5625,
        "width": 62.0,
        "height": 8.0,
        "viewBox": "0 0 62 8",
        "paths": [
          {
            "d": "M0.5 7.5C26.2423 7.5 35.7577 0.5 61.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106531",
        "from": "2401:106517",
        "to": "2401:106521",
        "x": 7845.5,
        "y": 275.5625,
        "width": 260.0,
        "height": 67.0,
        "viewBox": "0 0 260 67",
        "paths": [
          {
            "d": "M0.5 66.5C114.021 66.5 145.979 0.5 259.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106532",
        "from": "2401:106517",
        "to": "2401:106522",
        "x": 7845.5,
        "y": 315.5625,
        "width": 260.0,
        "height": 27.0,
        "viewBox": "0 0 260 27",
        "paths": [
          {
            "d": "M0.5 26.5C111.11 26.5 148.89 0.5 259.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106533",
        "from": "2401:106517",
        "to": "2401:106523",
        "x": 7845.5,
        "y": 341.5625,
        "width": 260.0,
        "height": 15.0,
        "viewBox": "0 0 260 15",
        "paths": [
          {
            "d": "M0.5 0.5C110.724 0.5 149.276 14.5 259.5 14.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106540",
        "from": "2401:106498",
        "to": "2401:106499",
        "x": 7440.5,
        "y": 43.4375,
        "width": 437.0,
        "height": 21.0,
        "viewBox": "0 0 437 21",
        "paths": [
          {
            "d": "M0.5 20.5C186.28 20.5 250.72 0.5 436.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106541",
        "from": "2401:106498",
        "to": "2401:106500",
        "x": 7440.5,
        "y": 63.4375,
        "width": 437.0,
        "height": 21.0,
        "viewBox": "0 0 437 21",
        "paths": [
          {
            "d": "M0.5 0.5C186.28 0.5 250.72 20.5 436.5 20.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106542",
        "from": "2401:106498",
        "to": "2401:106501",
        "x": 7440.5,
        "y": 63.4375,
        "width": 437.0,
        "height": 64.0,
        "viewBox": "0 0 437 64",
        "paths": [
          {
            "d": "M0.5 0.5C187.993 0.5 249.007 63.5 436.5 63.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106543",
        "from": "2401:106498",
        "to": "2401:106502",
        "x": 7440.5,
        "y": 63.4375,
        "width": 437.0,
        "height": 112.0,
        "viewBox": "0 0 437 112",
        "paths": [
          {
            "d": "M0.5 0.5C191.943 0.5 245.057 111.5 436.5 111.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      }
    ],
    "metrics": {
      "x": 6777,
      "y": 238.6875,
      "items": [
        {
          "value": "100",
          "label": "PRF",
          "asset": "indicator-100-bprc-v1-1.svg"
        },
        {
          "value": "100",
          "label": "A11Y",
          "asset": "indicator-100-bprc-v1-1.svg"
        },
        {
          "value": "100",
          "label": "BPRC",
          "asset": "indicator-100-bprc-v1-1.svg"
        },
        {
          "value": "100",
          "label": "SEO",
          "asset": "indicator-100-bprc-v1-1.svg"
        },
        {
          "value": "2/2",
          "label": "AGNT",
          "asset": "indicator-100-bprc-v1-1.svg"
        }
      ]
    }
  },
  {
    "version": "2.1",
    "heading": "2401:106545",
    "nodes": [
      {
        "id": "2401:106545",
        "text": "PORTFOLIO: VERSION 2.1",
        "state": "planned",
        "x": 8343,
        "y": 109.73974609375,
        "width": 243,
        "height": 30
      },
      {
        "id": "2401:106551",
        "text": "LAB / EXPERIMENTOS",
        "state": "planned",
        "x": 8767,
        "y": 173.73974609375,
        "width": 204,
        "height": 34
      },
      {
        "id": "2401:106546",
        "text": "MEJORAR TRADUCCIÓN",
        "state": "planned",
        "x": 8822,
        "y": 49.73974609375,
        "width": 204,
        "height": 34
      },
      {
        "id": "2401:106552",
        "text": "MICROPROYECTOS (TABLE)",
        "state": "planned",
        "x": 8832,
        "y": 319.73974609375,
        "width": 243,
        "height": 34
      },
      {
        "id": "2401:106547",
        "text": "METADATA POR IDIOMA",
        "state": "planned",
        "x": 9127,
        "y": 29.73974609375,
        "width": 214,
        "height": 30
      },
      {
        "id": "2401:106549",
        "text": "ESTRUCTURA /ES /EN",
        "state": "planned",
        "x": 9127,
        "y": 65.73974609375,
        "width": 204,
        "height": 30
      },
      {
        "id": "2401:106553",
        "text": "PATTERNMAKER",
        "state": "planned",
        "x": 9416,
        "y": 160.26025390625,
        "width": 146,
        "height": 30
      },
      {
        "id": "2401:106555",
        "text": "FONTMAKER",
        "state": "planned",
        "x": 9416,
        "y": 196.26025390625,
        "width": 116,
        "height": 30
      },
      {
        "id": "2401:106557",
        "text": "VIBE_API",
        "state": "planned",
        "x": 9416,
        "y": 232.26025390625,
        "width": 107,
        "height": 30
      },
      {
        "id": "2401:106559",
        "text": "MICROINTERACCIONES",
        "state": "planned",
        "x": 9416,
        "y": 268.26025390625,
        "width": 204,
        "height": 30
      },
      {
        "id": "2401:106561",
        "text": "HERRAMIENTAS PROPIAS",
        "state": "planned",
        "x": 9416,
        "y": 304.26025390625,
        "width": 224,
        "height": 30
      },
      {
        "id": "2401:106563",
        "text": "EXPERIMENTOS DE PRODUCTO",
        "state": "planned",
        "x": 9416,
        "y": 340.26025390625,
        "width": 263,
        "height": 30
      }
    ],
    "connections": [
      {
        "id": "2401:106548",
        "from": "2401:106546",
        "to": "2401:106547",
        "x": 9028.5,
        "y": 44.23974609375,
        "width": 96.0,
        "height": 23.0,
        "viewBox": "0 0 96 23",
        "paths": [
          {
            "d": "M0.5 22.5C41.6038 22.5 54.3962 0.5 95.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106550",
        "from": "2401:106546",
        "to": "2401:106549",
        "x": 9028.5,
        "y": 66.23974609375,
        "width": 96.0,
        "height": 15.0,
        "viewBox": "0 0 96 15",
        "paths": [
          {
            "d": "M0.5 0.5C41.0054 0.5 54.9946 14.5 95.5 14.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106554",
        "from": "2401:106551",
        "to": "2401:106553",
        "x": 8973.263671875,
        "y": 174.408203125,
        "width": 441.0,
        "height": 44.0,
        "viewBox": "0 0 441 44",
        "paths": [
          {
            "d": "M0.5 17.4983C160.017 84.8521 181.456 -5.1479 439.737 0.782987",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106556",
        "from": "2401:106551",
        "to": "2401:106555",
        "x": 8973.263671875,
        "y": 191.40673828125,
        "width": 441.0,
        "height": 36.0,
        "viewBox": "0 0 441 36",
        "paths": [
          {
            "d": "M0.5 0.5C160.017 67.8533 181.456 13.8533 439.737 19.7847",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106558",
        "from": "2401:106551",
        "to": "2401:106557",
        "x": 8973.263671875,
        "y": 191.40673828125,
        "width": 441.0,
        "height": 57.0,
        "viewBox": "0 0 441 57",
        "paths": [
          {
            "d": "M0.5 0.5C160.017 67.8533 181.456 49.8533 439.737 55.7847",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106560",
        "from": "2401:106551",
        "to": "2401:106559",
        "x": 8973.263671875,
        "y": 191.40673828125,
        "width": 441.0,
        "height": 93.0,
        "viewBox": "0 0 441 93",
        "paths": [
          {
            "d": "M0.5 0.5C160.017 67.8533 181.456 85.8533 439.737 91.7847",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106562",
        "from": "2401:106551",
        "to": "2401:106561",
        "x": 8973.263671875,
        "y": 191.40673828125,
        "width": 441.0,
        "height": 129.0,
        "viewBox": "0 0 441 129",
        "paths": [
          {
            "d": "M0.5 0.5C160.017 67.8533 181.456 121.853 439.737 127.785",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106564",
        "from": "2401:106551",
        "to": "2401:106563",
        "x": 8973.263671875,
        "y": 191.40673828125,
        "width": 441.0,
        "height": 165.0,
        "viewBox": "0 0 441 165",
        "paths": [
          {
            "d": "M0.5 0.5C160.017 67.8533 181.456 157.853 439.737 163.785",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106565",
        "from": "2401:106545",
        "to": "2401:106546",
        "x": 8588.5,
        "y": 66.23974609375,
        "width": 231.0,
        "height": 59.0,
        "viewBox": "0 0 231 59",
        "paths": [
          {
            "d": "M0.5 58.5C101.19 58.5 129.81 0.5 230.5 0.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106566",
        "from": "2401:106544",
        "to": "2401:106551",
        "x": 8585.5,
        "y": 124.23974609375,
        "width": 179.0,
        "height": 67.0,
        "viewBox": "0 0 179 67",
        "paths": [
          {
            "d": "M0.5 0.5C82.7006 0.5 99.2994 66.5 178.5 66.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      },
      {
        "id": "2401:106567",
        "from": "2401:106544",
        "to": "2401:106552",
        "x": 8585.5,
        "y": 124.23974609375,
        "width": 244.0,
        "height": 213.0,
        "viewBox": "0 0 244 213",
        "paths": [
          {
            "d": "M0.5 0.5C139.058 0.5 107.942 212.5 243.5 212.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      }
    ]
  },
  {
    "version": "2.2",
    "heading": "2401:106569",
    "nodes": [
      {
        "id": "2401:106569",
        "text": "PORTFOLIO: VERSION 2.2",
        "state": "planned",
        "x": 9807,
        "y": 185,
        "width": 243,
        "height": 30
      },
      {
        "id": "2401:106570",
        "text": "?",
        "state": "planned",
        "x": 10166,
        "y": 183,
        "width": 38,
        "height": 34
      }
    ],
    "connections": [
      {
        "id": "2401:106571",
        "from": "2401:106569",
        "to": "2401:106570",
        "x": 10052.5,
        "y": 199.5,
        "width": 111.0,
        "height": 1.0,
        "viewBox": "0 0 111 1",
        "paths": [
          {
            "d": "M0.5 0.5H110.5",
            "stroke": "#2A2A2A",
            "stroke-linecap": "round",
            "stroke-linejoin": "bevel"
          }
        ]
      }
    ]
  }
];
