import { btnDefaults } from "../../utils/configCss";

function Button({
  children,
  type = btnDefaults.type,
  variant = "primary",
  size = "md",
  rounded = "md",
  shadow = "sm",
  disabled = false,
  fullWidth = false,
  loading = false,
  onClick,
  className = "",
  ...props
}) {
  const buttonClasses = [
    btnDefaults.size[size],
    btnDefaults.color[variant],
    btnDefaults.rounded[rounded],
    btnDefaults.shadow[shadow],
    btnDefaults.transition,
    fullWidth ? "w-full" : "",
    disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className='flex items-center justify-center gap-2'>
          <svg className='animate-spin h-4 w-4' viewBox='0 0 24 24'>
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
              fill='none'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </svg>
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
