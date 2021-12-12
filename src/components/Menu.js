import React from 'react';

export function Menu({ open = false }) {



    return (
        <div className={open ? ' burger' : ' burger hidden'}>
            <svg className='svg' viewBox="0 0 1338 365" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_bddi_2_33)">
                    <path d="M85.536 77.28C103.968 77.28 118.656 82.56 129.6 93.12C140.544 103.488 146.016 117.792 146.016 136.032C146.016 154.272 139.104 169.92 125.28 182.976C111.456 195.84 94.56 202.272 74.592 202.272H58.176L61.632 276H23.04L26.496 206.016L23.04 77.28H85.536ZM75.168 106.368H61.056L59.04 174.336H78.624C88.224 174.336 95.616 171.168 100.8 164.832C106.176 158.496 108.864 149.472 108.864 137.76C108.864 116.832 97.632 106.368 75.168 106.368Z" fill="url(#paint0_linear_2_33)" />
                    <path d="M215.075 246.624C220.643 246.624 226.499 245.184 232.643 242.304C238.787 239.424 243.587 236.544 247.043 233.664L252.227 229.344L265.475 245.472C263.555 248.736 260.579 252.48 256.547 256.704C252.515 260.928 248.387 264.576 244.163 267.648C240.131 270.528 234.659 273.216 227.747 275.712C221.027 278.016 214.019 279.168 206.723 279.168C191.171 279.168 178.499 273.312 168.707 261.6C158.915 249.696 154.019 234.432 154.019 215.808C154.019 192.384 160.835 171.84 174.467 154.176C188.099 136.512 204.035 127.68 222.275 127.68C236.291 127.68 247.139 131.616 254.819 139.488C262.691 147.36 266.627 158.4 266.627 172.608C266.627 181.056 265.187 190.656 262.307 201.408L256.547 207.456L184.547 214.08C187.811 235.776 197.987 246.624 215.075 246.624ZM215.075 157.344C206.627 157.344 199.523 160.8 193.763 167.712C188.003 174.432 184.643 183.072 183.683 193.632L232.643 187.584C233.219 183.168 233.507 179.52 233.507 176.64C233.507 163.776 227.363 157.344 215.075 157.344ZM302.999 136.608V105.216L341.879 97.728L338.135 136.608H372.983L369.815 160.224H336.983L335.543 220.416C335.543 229.44 336.407 235.488 338.135 238.56C339.863 241.44 343.031 242.88 347.639 242.88C352.247 242.88 358.391 241.824 366.071 239.712L367.799 260.16C355.127 270.72 343.991 276 334.391 276C324.791 276 316.919 272.544 310.775 265.632C304.631 258.528 301.559 249.312 301.559 237.984L303.287 205.728L302.999 160.224H283.127L286.295 136.608H302.999ZM667.519 203.136C667.519 189.888 666.367 181.056 664.063 176.64C661.759 172.224 656.383 170.016 647.935 170.016C639.487 170.016 629.887 173.376 619.135 180.096V201.12L622.303 268.8L583.423 276L586.879 206.016L583.423 60.288L622.879 53.088L619.135 127.68V161.376C622.015 157.536 625.279 153.792 628.927 150.144C632.575 146.496 638.239 142.368 645.919 137.76C653.599 133.152 661.759 130.848 670.399 130.848C679.231 130.848 686.623 134.304 692.575 141.216C698.527 147.936 701.503 157.152 701.503 168.864L699.775 201.12L702.943 270.24L664.063 277.44L667.519 203.136ZM763.535 276C752.207 276 742.895 272.448 735.599 265.344C728.495 258.048 724.943 248.352 724.943 236.256C724.943 223.968 730.511 213.408 741.647 204.576C752.783 195.552 766.319 191.04 782.255 191.04H801.839V186.144C801.839 176.736 799.919 170.304 796.079 166.848C792.239 163.392 785.039 161.664 774.479 161.664C770.063 161.664 764.783 162.624 758.639 164.544C752.687 166.272 745.967 169.056 738.479 172.896L730.127 150.144C738.383 144.384 748.367 139.2 760.079 134.592C771.983 129.984 781.775 127.68 789.455 127.68C819.599 127.68 834.671 142.272 834.671 171.456V227.904C834.671 238.656 838.031 250.656 844.751 263.904L814.223 276.864C809.423 267.648 805.871 259.392 803.567 252.096C793.007 268.032 779.663 276 763.535 276ZM775.631 246.624C783.311 246.624 792.047 242.688 801.839 234.816V215.52C791.663 213.216 783.407 212.064 777.071 212.064C764.975 212.064 758.927 217.44 758.927 228.192C758.927 233.76 760.463 238.272 763.535 241.728C766.607 244.992 770.639 246.624 775.631 246.624ZM866.567 136.896L901.415 129.408C903.143 144.192 904.295 158.208 904.871 171.456C922.343 144.384 938.759 130.848 954.119 130.848L950.951 175.776C939.815 175.776 930.983 176.832 924.455 178.944C918.119 180.864 911.591 184.8 904.871 190.752V201.12L908.039 268.8L869.447 276L872.903 206.016C872.135 180.288 870.023 157.248 866.567 136.896ZM1024.23 246.624C1029.8 246.624 1035.66 245.184 1041.8 242.304C1047.94 239.424 1052.74 236.544 1056.2 233.664L1061.38 229.344L1074.63 245.472C1072.71 248.736 1069.74 252.48 1065.7 256.704C1061.67 260.928 1057.54 264.576 1053.32 267.648C1049.29 270.528 1043.82 273.216 1036.9 275.712C1030.18 278.016 1023.18 279.168 1015.88 279.168C1000.33 279.168 987.656 273.312 977.864 261.6C968.072 249.696 963.176 234.432 963.176 215.808C963.176 192.384 969.992 171.84 983.624 154.176C997.256 136.512 1013.19 127.68 1031.43 127.68C1045.45 127.68 1056.3 131.616 1063.98 139.488C1071.85 147.36 1075.78 158.4 1075.78 172.608C1075.78 181.056 1074.34 190.656 1071.46 201.408L1065.7 207.456L993.703 214.08C996.968 235.776 1007.14 246.624 1024.23 246.624ZM1024.23 157.344C1015.78 157.344 1008.68 160.8 1002.92 167.712C997.16 174.432 993.8 183.072 992.84 193.632L1041.8 187.584C1042.38 183.168 1042.66 179.52 1042.66 176.64C1042.66 163.776 1036.52 157.344 1024.23 157.344Z" fill="white" />
                    <path d="M448.083 218.688C464.403 235.008 480.723 243.168 497.043 243.168C505.491 243.168 512.211 241.248 517.203 237.408C522.387 233.376 524.979 228.288 524.979 222.144C524.979 215.808 521.907 210.528 515.763 206.304C509.619 201.888 502.131 198.048 493.299 194.784C484.659 191.52 476.019 187.872 467.379 183.84C458.739 179.616 451.347 173.664 445.203 165.984C439.059 158.304 435.987 148.992 435.987 138.048C435.987 120.768 443.187 105.888 457.587 93.408C471.987 80.736 489.075 74.4 508.851 74.4C517.875 74.4 526.611 75.36 535.059 77.28C543.507 79.2 551.667 81.984 559.539 85.632L539.955 127.68C534.579 123.456 527.187 119.616 517.779 116.16C508.563 112.512 500.403 110.688 493.299 110.688C486.387 110.688 480.723 112.416 476.307 115.872C472.083 119.136 469.971 123.552 469.971 129.12C469.971 134.688 473.043 139.68 479.187 144.096C485.331 148.32 492.723 152.064 501.363 155.328C510.195 158.592 518.931 162.24 527.571 166.272C536.403 170.112 543.891 175.872 550.035 183.552C556.179 191.232 559.251 200.544 559.251 211.488C559.251 229.536 552.051 245.376 537.651 259.008C523.251 272.448 506.451 279.168 487.251 279.168C472.851 279.168 460.083 275.712 448.947 268.8C439.155 262.848 432.243 257.568 428.211 252.96L425.619 249.792L448.083 218.688Z" fill="url(#paint1_linear_2_33)" />
                </g>
                <g filter="url(#filter1_bddi_2_33)">
                    <path d="M1170.5 177C1183.48 177 1194 166.926 1194 154.5C1194 142.074 1183.48 132 1170.5 132C1157.52 132 1147 142.074 1147 154.5C1147 166.926 1157.52 177 1170.5 177Z" fill="#E7EC11" />
                </g>
                <g filter="url(#filter2_bddi_2_33)">
                    <path d="M1212.5 141C1224.93 141 1235 130.479 1235 117.5C1235 104.521 1224.93 94 1212.5 94C1200.07 94 1190 104.521 1190 117.5C1190 130.479 1200.07 141 1212.5 141Z" fill="#D87501" />
                </g>
                <g filter="url(#filter3_bddi_2_33)">
                    <path d="M1268.5 141C1280.93 141 1291 130.479 1291 117.5C1291 104.521 1280.93 94 1268.5 94C1256.07 94 1246 104.521 1246 117.5C1246 130.479 1256.07 141 1268.5 141Z" fill="#B70B0B" />
                </g>
                <g filter="url(#filter4_bddi_2_33)">
                    <path d="M1310.5 177C1323.48 177 1334 166.926 1334 154.5C1334 142.074 1323.48 132 1310.5 132C1297.52 132 1287 142.074 1287 154.5C1287 166.926 1297.52 177 1310.5 177Z" fill="#1604E2" />
                </g>
                <g filter="url(#filter5_bddi_2_33)">
                    <path d="M1290.33 204.93C1282.22 195.355 1275.42 187.188 1267.22 177.612C1262.94 172.543 1257.44 167.473 1250.92 165.22C1249.9 164.845 1248.87 164.563 1247.85 164.376C1245.52 164 1243 164 1240.58 164C1238.16 164 1235.65 164 1233.22 164.469C1232.2 164.657 1231.17 164.939 1230.15 165.314C1223.63 167.567 1218.23 172.637 1213.85 177.706C1205.74 187.281 1198.94 195.449 1190.75 205.024C1178.54 217.322 1163.55 230.934 1166.34 249.991C1169.04 259.567 1175.84 269.048 1188.04 271.771C1194.84 273.179 1216.55 267.64 1239.65 267.64H1241.33C1264.43 267.64 1286.13 273.085 1292.93 271.771C1305.14 269.048 1311.94 259.473 1314.64 249.991C1317.53 230.84 1302.53 217.228 1290.33 204.93Z" fill="url(#paint2_linear_2_33)" shape-rendering="crispEdges" />
                </g>
                <defs>
                    <filter id="filter0_bddi_2_33" x="19.04" y="49.088" width="1060.74" height="238.08" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_33" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect1_backgroundBlur_2_33" result="effect2_dropShadow_2_33" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect2_dropShadow_2_33" result="effect3_dropShadow_2_33" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_2_33" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect4_innerShadow_2_33" />
                    </filter>
                    <filter id="filter1_bddi_2_33" x="1143" y="128" width="55" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_33" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect1_backgroundBlur_2_33" result="effect2_dropShadow_2_33" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect2_dropShadow_2_33" result="effect3_dropShadow_2_33" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_2_33" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect4_innerShadow_2_33" />
                    </filter>
                    <filter id="filter2_bddi_2_33" x="1186" y="90" width="53" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_33" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect1_backgroundBlur_2_33" result="effect2_dropShadow_2_33" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect2_dropShadow_2_33" result="effect3_dropShadow_2_33" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_2_33" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect4_innerShadow_2_33" />
                    </filter>
                    <filter id="filter3_bddi_2_33" x="1242" y="90" width="53" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_33" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect1_backgroundBlur_2_33" result="effect2_dropShadow_2_33" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect2_dropShadow_2_33" result="effect3_dropShadow_2_33" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_2_33" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect4_innerShadow_2_33" />
                    </filter>
                    <filter id="filter4_bddi_2_33" x="1283" y="128" width="55" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_33" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect1_backgroundBlur_2_33" result="effect2_dropShadow_2_33" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect2_dropShadow_2_33" result="effect3_dropShadow_2_33" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_2_33" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect4_innerShadow_2_33" />
                    </filter>
                    <filter id="filter5_bddi_2_33" x="1162" y="160" width="157" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_33" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect1_backgroundBlur_2_33" result="effect2_dropShadow_2_33" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect2_dropShadow_2_33" result="effect3_dropShadow_2_33" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_2_33" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect4_innerShadow_2_33" />
                    </filter>
                    <linearGradient id="paint0_linear_2_33" x1="542.5" y1="0" x2="542.5" y2="365" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E7EC11" />
                        <stop offset="0.260417" stop-color="#D87501" />
                        <stop offset="0.604167" stop-color="#B70B0B" />
                        <stop offset="1" stop-color="#1604E2" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_2_33" x1="542.5" y1="0" x2="542.5" y2="365" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E7EC11" />
                        <stop offset="0.25" stop-color="#D87501" />
                        <stop offset="0.645833" stop-color="#B70B0B" />
                        <stop offset="1" stop-color="#1604E2" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_2_33" x1="1240.5" y1="164" x2="1240.5" y2="272" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E7EC11" stop-opacity="0.65" />
                        <stop offset="0.289523" stop-color="#D87501" stop-opacity="0.69" />
                        <stop offset="0.59472" stop-color="#B70B0B" stop-opacity="0.7" />
                        <stop offset="1" stop-color="#1604E2" stop-opacity="0.67" />
                    </linearGradient></defs>
            </svg>

            <hr />
            <a href="/">
                Szukaj
            </a>
            <hr />
            <a href="/additem">
                Sprzedaj
            </a>
            <hr />

            <a href="/">
                Wiadomości(4)
            </a>
            <hr />
            <a href="/profile">
                Mój profile
            </a>
            <hr />
            <a href="/">
                Moje odznaki
            </a>
            <hr />
            <a href="/">
                Zostań wolontariuszem
            </a>
            <hr />
            <a href="/about">
                O nas
            </a>
            <hr />
        </div >
    )
}
