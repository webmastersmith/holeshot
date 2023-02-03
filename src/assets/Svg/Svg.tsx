import { JSX } from 'solid-js';

export interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: string | number;
  color?: string;
  title?: string;
  style?: JSX.CSSProperties;
}

export function sun(props: IconProps) {
  return (
    <svg
      version="1.1"
      viewBox="-1 -1 26 26"
      xmlns="http://www.w3.org/2000/svg"
      height={props.size || '1em'}
      width={props.size || '1em'}
      class="info-svg"
    >
      <g transform="translate(-.0089487 -.010801)">
        <g fill="currentColor">
          <rect
            transform="matrix(.69964 .71449 -.69782 .71627 0 0)"
            x="4.985"
            y="-1.0537"
            width="4.0483"
            height="1.9581"
            ry=".82705"
            opacity=".98"
            style="font-variation-settings:'wdth' 78.2, 'wght' 700"
          />
          <rect
            transform="matrix(-.68752 .72617 -.74216 -.67023 0 0)"
            x="-11.162"
            y="-18.243"
            width="4.0483"
            height="1.9581"
            ry=".82705"
            opacity=".98"
            style="font-variation-settings:'wdth' 78.2, 'wght' 700"
          />
          <rect
            transform="matrix(-.68752 .72617 -.74216 -.67023 0 0)"
            x="8.8427"
            y="-17.695"
            width="4.0483"
            height="1.9581"
            ry=".82705"
            opacity=".98"
            style="font-variation-settings:'wdth' 78.2, 'wght' 700"
          />
          <rect
            transform="matrix(.72078 .69316 -.676 .7369 0 0)"
            x="24.92"
            y="-.4353"
            width="4.0483"
            height="1.9581"
            ry=".82705"
            opacity=".98"
            style="font-variation-settings:'wdth' 78.2, 'wght' 700"
          />
          <rect
            transform="matrix(-.0104 .99995 -.99991 .013149 0 0)"
            x=".17098"
            y="-13.003"
            width="4.0435"
            height="1.9581"
            ry=".82705"
            opacity=".98"
            style="font-variation-settings:'wdth' 78.2, 'wght' 700"
          />
          <rect
            transform="matrix(-.0104 .99995 -.99991 .013149 0 0)"
            x="20.095"
            y="-13.21"
            width="4.0435"
            height="1.9581"
            ry=".82705"
            opacity=".98"
            style="font-variation-settings:'wdth' 78.2, 'wght' 700"
          />
          <rect
            transform="matrix(1 1.3224e-7 .023547 .99972 0 0)"
            x="-.26988"
            y="11.024"
            width="4.0435"
            height="1.9581"
            ry=".82705"
            opacity=".98"
            style="font-variation-settings:'wdth' 78.2, 'wght' 700"
          />
          <rect
            transform="matrix(1 1.3224e-7 .023547 .99972 0 0)"
            x="19.661"
            y="11.024"
            width="4.0435"
            height="1.9581"
            ry=".82705"
            opacity=".98"
            style="font-variation-settings:'wdth' 78.2, 'wght' 700"
          />
          <path d="m18 12c0 3.314-2.686 6-6 6-3.315 0-6-2.686-6-6s2.685-6 6-6c3.314 0 6 2.686 6 6z" />
        </g>
        <path
          d="m16 12c0-2.19-1.818-3.963-4-3.994 2.533 1.816 2.61 6.119 0 7.988 2.182-0.031 4-1.804 4-3.994z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}
