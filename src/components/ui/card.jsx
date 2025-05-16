export function Card({ children, ...props }) {
  return <div className="p-4 border rounded shadow" {...props}>{children}</div>;
}

export function CardContent({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
