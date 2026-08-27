import React from 'react';
import { PortableText } from 'next-sanity';

/**
 * Renders Sanity rich text *inline* — the surrounding <p> and its styles stay in
 * the section markup, so blocks must not emit their own paragraph wrapper.
 */
export default function RichText({ value, strongColor }: { value: any; strongColor?: string }) {
  if (!value?.length) return null;
  return (
    <PortableText
      value={value}
      components={{
        block: { normal: ({ children }: any) => <>{children}</> },
        marks: {
          strong: ({ children }: any) => <strong style={strongColor ? { color: strongColor } : undefined}>{children}</strong>,
          link: ({ children, value }: any) => <a href={value?.href}>{children}</a>,
        },
      }}
    />
  );
}
