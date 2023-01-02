import { createElement } from 'react'

type VariantType = 'primary' | 'success' | 'danger'
type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { variant?: VariantType }

type DynamicVariants = Record<VariantType, string>
const variants: DynamicVariants = {
  primary: 'bg-sky-500 bg-sky-600',
  success: 'bg-green-500 bg-green-600',
  danger: 'bg-pink-500 bg-pink-600'
}

const Button: React.FunctionComponent<ButtonProps> = ({
  variant = 'primary',
  className,
  ...props
}) => {
  return createElement('button', {
    ...props,
    className: `text-white font-medium transition duration-300 px-2 py-1 ${
      variants[variant as keyof DynamicVariants]
    } ${className}`
  })
}

export default Button
