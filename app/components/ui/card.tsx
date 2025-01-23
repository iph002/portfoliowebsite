export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-lg shadow-lg bg-white ${className}`}>{children}</div>
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-4 border-b rounded-t-lg ${className}`}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-lg font-bold ${className}`}>{children}</h3>
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-4 border-t rounded-b-lg ${className}`}>
      {children}
    </div>
  )
}

export function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-gray-600 ${className}`}>{children}</p>
}
