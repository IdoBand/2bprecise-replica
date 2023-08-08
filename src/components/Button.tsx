interface ButtonProps {
    text: string
    type: 'button' | 'submit'
    theme?: 'purpleButton'
    className?: string
}

const THEMES = {
    purpleButton: 'bg-magenta text-base text-light px-6 py-3 rounded-full mr-[10px] hover:bg-magenta/75 md:text-xs md:py-2 md:px-2 transition-all duration-200 ease'
}

const Button = ({text, type, theme, className}: ButtonProps) => {
  return (
    <button type={type} className={`${THEMES[theme!]} ${className}`}>
        {text}
    </button>
  )
}

export default Button