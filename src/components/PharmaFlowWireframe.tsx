
import React from "react";

// We'll use some fixed colors in Tailwind/hex to match your diagram.
// This mimics a static, non-interactive SVG wireframe, closely matching your reference.
const boxStyle =
  "font-semibold text-xs md:text-sm text-white flex items-center justify-center shadow-md";

export const PharmaFlowWireframe = () => (
  <div className="flex justify-center items-center min-h-[1050px] w-full bg-white px-2 py-4 overflow-auto">
    <svg
      width="900"
      height="1000"
      viewBox="0 0 900 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Vertical Main Line */}
      <rect x="400" y="55" width="8" height="800" fill="#380cff" opacity="0.15"/>

      {/* LEFT Vertical regulatory compliance bar */}
      <rect x="35" y="45" width="34" height="850" rx="10" fill="#380cff" />
      <text
        x="52"
        y="470"
        textAnchor="middle"
        fill="#fff"
        fontSize="17"
        transform="rotate(-90 52,470)"
        fontWeight="bold"
        style={{letterSpacing:"1px"}}
      >
        Checking Regulatory Compliance Data For Each Stage of Model
      </text>

      {/* ARROW from left bar to main flow, top & bottom */}
      <polyline points="69,70 200,70 404,70" fill="none" stroke="#380cff" strokeWidth="4" markerEnd="url(#arrowhead)" />
      <polyline points="69,860 200,860 404,860" fill="none" stroke="#380cff" strokeWidth="4" markerEnd="url(#arrowhead)" />

      {/* Definitions for Arrow Heads */}
      <defs>
        <marker id="arrowhead" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto">
          <polygon points="2,2 12,6 2,10" fill="#380cff" />
        </marker>
        <marker id="arrowpink" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto">
          <polygon points="2,2 12,6 2,10" fill="#e749d3" />
        </marker>
        <marker id="arrowred" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto">
          <polygon points="2,2 12,6 2,10" fill="#ff5656" />
        </marker>
        <marker id="arrowgray" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto">
          <polygon points="2,2 12,6 2,10" fill="#555" />
        </marker>
        <marker id="arrowgreen" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto">
          <polygon points="2,2 12,6 2,10" fill="#26d975" />
        </marker>
        <marker id="arroworange" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto">
          <polygon points="2,2 12,6 2,10" fill="#ff7d39" />
        </marker>
      </defs>

      {/* ChatGPT Bubble (Right) */}
      <rect x="730" y="375" rx="50" width="115" height="115" fill="#fff" stroke="#222" strokeWidth="2"/>
      <text x="787" y="437" fontSize="34" fontWeight="bold" fill="#222" textAnchor="middle" fontFamily="monospace" >ChatGPT</text>

      {/* 1. Drug */}
      <rect x="300" y="25" rx="14" width="240" height="50" fill="#380cff"/>
      <text x="420" y="55" fontSize="21" textAnchor="middle" fontWeight="bold" fill="#fff">
        Drug
      </text>
      {/* Arrow Drug → Step2 */}
      <line x1="420" y1="75" x2="420" y2="135" stroke="#380cff" strokeWidth="5" markerEnd="url(#arrowhead)" />

      {/* 2. Step: Formulation... */}
      <rect x="210" y="135" rx="14" width="420" height="55" fill="#380cff"/>
      <text x="420" y="165" fontSize="16" textAnchor="middle" fontWeight="bold" fill="#fff">
        Formulation Pripration target and Identification of Suitable Excipient
      </text>
      {/* Arrow Step2 → Step3 */}
      <line x1="420" y1="190" x2="420" y2="225" stroke="#380cff" strokeWidth="5" markerEnd="url(#arrowhead)" />

      {/* 2a: Pink circle: Molecular Docking */}
      <circle cx="700" cy="130" r="48" fill="#fba5f4"/>
      <text x="700" y="120" fontSize="14" textAnchor="middle" fontWeight="bold" fill="#db3497">
        Molecular{" "}
      </text>
      <text x="700" y="138" fontSize="12" textAnchor="middle" fill="#b52982">
        Docking +{" "}
      </text>
      <text x="700" y="153" fontSize="12" textAnchor="middle" fill="#b52982">
        Data analysis{" "}
      </text>
      <text x="700" y="168" fontSize="12" textAnchor="middle" fill="#b52982">
        By AI Model
      </text>
      {/* line from Step2 to Pink circle */}
      <line x1="540" y1="135" x2="680" y2="135" stroke="#f75bed" strokeWidth="2.5" markerEnd="url(#arrowpink)" />

      {/* 2b: Pink circle: References */}
      <circle cx="700" cy="210" r="48" fill="#fba5f4"/>
      <text x="700" y="200" fontSize="12" textAnchor="middle" fontWeight="bold" fill="#db3497">
        References
      </text>
      <text x="700" y="213" fontSize="10" textAnchor="middle" fill="#b52982">
        By Research
      </text>
      <text x="700" y="226" fontSize="10" textAnchor="middle" fill="#b52982">
        Papers +{" "}
      </text>
      <text x="700" y="239" fontSize="10" textAnchor="middle" fill="#b52982">
        Databases
      </text>
      {/* line from Step2 to Pink2 */}
      <line x1="540" y1="190" x2="680" y2="210" stroke="#f75bed" strokeWidth="2.5" markerEnd="url(#arrowpink)" />

      {/* 2c: Red Left circle: Excipient reports */}
      <circle cx="120" cy="200" r="47" fill="#ff5656"/>
      <text x="120" y="192" fontSize="13" textAnchor="middle" fontWeight="bold" fill="#fff">
        Excipient
      </text>
      <text x="120" y="208" fontSize="13" textAnchor="middle" fontWeight="bold" fill="#fff">
        compatibility data reports
      </text>
      {/* Red left line */}
      <line x1="210" y1="170" x2="167" y2="200" stroke="#ff5656" strokeWidth="3" markerEnd="url(#arrowred)" />

      {/* 2d: Blue Right circle: Matlab reports */}
      <circle cx="710" cy="282" r="45" fill="#84a7fa"/>
      <text x="710" y="277" fontSize="13" textAnchor="middle" fontWeight="bold" fill="#243db6">
        MATLAB
      </text>
      <text x="710" y="295" fontSize="12" textAnchor="middle" fill="#243db6">
        reports
      </text>
      {/* Blue right line */}
      <line x1="540" y1="170" x2="667" y2="282" stroke="#84a7fa" strokeWidth="3" markerEnd="url(#arrowhead)" />

      {/* 2e: Stat-Ease ANOVA center circle */}
      <circle cx="420" cy="210" r="31" fill="#484848"/>
      <text x="420" y="216" fontSize="12" textAnchor="middle" fill="#fff">Stat-Ease</text>
      <text x="420" y="228" fontSize="12" textAnchor="middle" fontWeight="bold" fill="#fff">ANOVA reports</text>
      {/* Arrow from ANOVA circle to next step */}
      <line x1="420" y1="241" x2="420" y2="270" stroke="#484848" strokeWidth="3" markerEnd="url(#arrowgray)" />

      {/* 3. Reading of Data... */}
      <rect x="195" y="270" rx="14" width="450" height="48" fill="#380cff"/>
      <text x="420" y="298" fontSize="15" textAnchor="middle" fontWeight="bold" fill="#fff">
        Reading of Data and Understanding Formulation and Preparation of Optimized batch
      </text>
      {/* Arrow */}
      <line x1="420" y1="318" x2="420" y2="366" stroke="#380cff" strokeWidth="5" markerEnd="url(#arrowhead)" />

      {/* 4. Optimization */}
      <rect x="160" y="366" rx="14" width="520" height="42" fill="#380cff"/>
      <text x="420" y="393" fontSize="14" textAnchor="middle" fontWeight="bold" fill="#fff">
        optimization + AI Model Using Reference to Papers+Patent+ Marketed Formulations
      </text>
      {/* Arrow */}
      <line x1="420" y1="408" x2="420" y2="460" stroke="#380cff" strokeWidth="5" markerEnd="url(#arrowhead)" />

      {/* 5. Pharmacokinetic Data */}
      <rect x="207" y="460" rx="14" width="420" height="46" fill="#380cff"/>
      <text x="420" y="487" fontSize="17" textAnchor="middle" fontWeight="bold" fill="#fff">
        Pharmacokinetic Data Profile
      </text>
      {/* Arrow */}
      <line x1="420" y1="506" x2="420" y2="550" stroke="#380cff" strokeWidth="5" markerEnd="url(#arrowhead)" />

      {/* 6. Analysis of all Data */}
      <rect x="130" y="550" rx="14" width="600" height="52" fill="#380cff"/>
      <text x="420" y="570" fontSize="15" textAnchor="middle" fontWeight="bold" fill="#fff">
        Analysis Of All Data By AI Model and Priparion Of Summary Reports
      </text>
      {/* Arrow */}
      <line x1="420" y1="602" x2="420" y2="647" stroke="#380cff" strokeWidth="5" markerEnd="url(#arrowhead)" />

      {/* 7. Submission of Summary Reports */}
      <rect x="210" y="647" rx="14" width="415" height="44" fill="#380cff"/>
      <text x="420" y="673" fontSize="16" textAnchor="middle" fontWeight="bold" fill="#fff">
        Submission of Summary Reports
      </text>
      {/* Arrow */}
      <line x1="420" y1="691" x2="420" y2="736" stroke="#380cff" strokeWidth="5" markerEnd="url(#arrowhead)" />

      {/* 8. Batch Ready Data */}
      <rect x="230" y="736" rx="14" width="374" height="50" fill="#380cff"/>
      <text x="420" y="765" fontSize="17" textAnchor="middle" fontWeight="bold" fill="#fff">
        Batch Ready Data For Formulation
      </text>

      {/* Circles on right side after Optimization */}
      {/* ADMET */}
      <circle cx="740" cy="437" r="33" fill="#41c99d"/>
      <text x="740" y="427" fontSize="13" textAnchor="middle" fontWeight="bold" fill="#fff">ADMET</text>
      <text x="740" y="442" fontSize="11" textAnchor="middle" fill="#fff">Report</text>
      {/* Connection line */}
      <line x1="680" y1="393" x2="740" y2="404" stroke="#41c99d" strokeWidth="3" markerEnd="url(#arrowgreen)" />

      {/* GraphPad Prism */}
      <circle cx="740" cy="520" r="33" fill="#26d975"/>
      <text x="740" y="512" fontSize="13" textAnchor="middle" fontWeight="bold" fill="#fff">Graph Pad</text>
      <text x="740" y="527" fontSize="12" textAnchor="middle" fill="#fff">Prism</text>
      <text x="740" y="539" fontSize="12" textAnchor="middle" fill="#fff">Report</text>
      {/* Connection line */}
      <line x1="730" y1="470" x2="740" y2="487" stroke="#26d975" strokeWidth="3" markerEnd="url(#arrowgreen)" />

      {/* Drug Kinetic */}
      <circle cx="130" cy="584" r="33" fill="#ff7d39"/>
      <text x="130" y="577" fontSize="13" textAnchor="middle" fontWeight="bold" fill="#fff">Drug</text>
      <text x="130" y="594" fontSize="12" textAnchor="middle" fill="#fff">Kinetic</text>
      <text x="130" y="609" fontSize="12" textAnchor="middle" fill="#fff">Report</text>
      {/* Orange left connection */}
      <line x1="210" y1="570" x2="163" y2="584" stroke="#ff7d39" strokeWidth="3" markerEnd="url(#arroworange)" />

      {/* MatLab Report (right of Drug Kinetic) */}
      <circle cx="195" cy="660" r="26" fill="#ffb164"/>
      <text x="195" y="663" fontSize="13" textAnchor="middle" fontWeight="bold" fill="#fff">MatLab</text>
      <text x="195" y="677" fontSize="12" textAnchor="middle" fill="#fff">Report</text>
      {/* short line from Summary Report step */}
      <line x1="420" y1="691" x2="220" y2="669" stroke="#ffb164" strokeWidth="3" markerEnd="url(#arroworange)" />

    </svg>
  </div>
);

export default PharmaFlowWireframe;
