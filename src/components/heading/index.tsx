import { type ComponentPropsWithoutRef } from 'react';


export function Heading(props: ComponentPropsWithoutRef<'h1'>) {
  return <h1 className="underline text-red-600" {...props} />;
}