import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0b0a07',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '7px',
        }}
      >
        <span
          style={{
            fontSize: 26,
            fontWeight: 900,
            color: '#f0a832',
            lineHeight: 1,
            fontFamily: 'serif',
            marginTop: '-1px',
          }}
        >
          #
        </span>
      </div>
    ),
    { ...size }
  );
}
