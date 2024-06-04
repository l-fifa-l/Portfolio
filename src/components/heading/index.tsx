import { type ComponentPropsWithoutRef } from 'react';

// Heading components
export function Heading1(props: ComponentPropsWithoutRef<'h1'>) {
  return <h1 className="text-4xl font-bold my-4 text-gray-800" {...props} />;
}

export function Heading2(props: ComponentPropsWithoutRef<'h2'>) {
  return <h2 className="text-3xl font-semibold my-3 text-gray-700" {...props} />;
}

export function Heading3(props: ComponentPropsWithoutRef<'h3'>) {
  return <h3 className="text-2xl font-medium my-2 text-gray-600" {...props} />;
}

// Paragraph component
export function Paragraph(props: ComponentPropsWithoutRef<'p'>) {
  return <p className="text-base leading-7 my-4 text-gray-600" {...props} />;
}

// List components
export function UnorderedList(props: ComponentPropsWithoutRef<'ul'>) {
  return <ul className="list-disc list-inside my-4 ml-6 text-gray-600" {...props} />;
}

export function OrderedList(props: ComponentPropsWithoutRef<'ol'>) {
  return <ol className="list-decimal list-inside my-4 ml-6 text-gray-600" {...props} />;
}

export function ListItem(props: ComponentPropsWithoutRef<'li'>) {
  return <li className="my-2" {...props} />;
}

// Image component
export function Image(props: ComponentPropsWithoutRef<'img'>) {
  return <img className="max-w-full h-auto my-4 rounded shadow-md" {...props} />;
}

// Blockquote component
export function Blockquote(props: ComponentPropsWithoutRef<'blockquote'>) {
  return <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4" {...props} />;
}

// Code block component
export function CodeBlock(props: ComponentPropsWithoutRef<'pre'>) {
  return (
    <pre className="bg-gray-100 rounded p-4 my-4 overflow-x-auto">
      <code className="text-sm font-mono text-gray-800" {...props} />
    </pre>
  );
}

// Inline code component
export function InlineCode(props: ComponentPropsWithoutRef<'code'>) {
  return <code className="bg-gray-100 text-sm font-mono px-1 rounded" {...props} />;
}
