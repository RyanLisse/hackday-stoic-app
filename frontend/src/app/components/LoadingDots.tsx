interface LoadingDotsProps {
    color?: string
    size?: 'small' | 'large'
}

const LoadingDots: React.FC<LoadingDotsProps> = ({color = "#000", size = "small"}) => {
    const dotStyles = {
        animationName: 'blink',
        animationDuration: '1.4s',
        animationIterationCount: 'infinite',
        animationFillMode: 'both',
        backgroundColor: color,
        width: size === 'small' ? '4px' : '5px',
        height: size === 'small' ? '4px' : '5px',
        borderRadius: '50%',
        display: 'inline-block',
        margin: '0 1px',
    }
    const secondDotStyles = {...dotStyles, animationDelay: '0.2s'}
    const thirdDotStyles = {...dotStyles, animationDelay: '0.4s'}

    return (
        <span style={{display: 'inline-flex', alignItems: 'center'}}>
      <span style={dotStyles}/>
      <span style={secondDotStyles}/>
      <span style={thirdDotStyles}/>
    </span>
    )
}

export default LoadingDots
