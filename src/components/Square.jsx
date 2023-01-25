export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleCliclk = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleCliclk}>
      {children}
    </div>
  )
}
