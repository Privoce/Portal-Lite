export default function Cursor({ enable = true }) {
  let color = getComputedStyle(document.documentElement).getPropertyValue('--vera-font-color');
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
      <path
        d="M2.4116 7.33659C2.70787 7.19309 3.05746 7.32463 3.19967 7.62359L4.56249 10.6073L5.62905 10.099L4.2603 7.12133C4.11809 6.82237 4.24845 6.46361 4.54472 6.32609L4.71063 6.27825L6.07345 6.00919L1.18506 1.86554V8.31121L2.26347 7.43226L2.4116 7.33659ZM4.52694 11.9406C4.23068 12.0841 3.87516 11.9586 3.73887 11.6596L2.44716 8.82543L0.959901 10.0332C0.859171 10.117 0.734739 10.1648 0.592532 10.1648C0.435382 10.1648 0.28467 10.1018 0.173549 9.98966C0.0624274 9.87753 0 9.72544 0 9.56686V0.597929C0 0.439348 0.0624274 0.287263 0.173549 0.175129C0.28467 0.0629959 0.435382 0 0.592532 0C0.734739 0 0.871021 0.0538136 0.971752 0.137524L0.977677 0.131544L7.78586 5.89558C8.04065 6.11083 8.07028 6.48753 7.86289 6.73866C7.77401 6.84629 7.64958 6.91804 7.52515 6.94196L5.65275 7.31267L6.95632 10.1409C7.11038 10.4398 6.96817 10.7926 6.67191 10.9301L4.52694 11.9406Z"
        fill={enable ? '#fec734' : color}
      />
    </svg>
  );
}
