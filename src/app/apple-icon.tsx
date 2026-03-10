import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          borderRadius: '40px',
        }}
      >
        <span
          style={{
            fontSize: 148,
            fontWeight: 900,
            color: '#f0a832',
            lineHeight: 1,
            fontFamily: 'serif',
            marginTop: '-6px',
          }}
        >
          #
        </span>
      </div>
    ),
    { ...size }
  );
}
