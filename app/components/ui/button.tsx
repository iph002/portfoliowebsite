export function Button({
  children,
  variant = "solid",
  size = "sm",
  className,
  asChild = false,
  ...props
}: {
  children: React.ReactNode
  variant?: "solid" | "outline" | "ghost"
  size?: "sm" | "md" | "lg" | "icon"
  className?: string
  asChild?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses =
    "rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    solid: "bg-gray-300 text-white hover:bg-gray-400 active:scale-95 focus:ring-gray-300 border-gray-400",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-50 active:scale-95 focus:ring-gray-300",
    ghost: "text-gray-800 hover:bg-gray-50 active:scale-95 focus:ring-gray-300",
  }

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
    icon: "p-2",
  }

  const Component = asChild ? "span" : "button"

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
