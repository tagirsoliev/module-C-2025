function Input({ name, value, onChange }) {
    const chechName = () => {
        if (name === 'img') {
            name = 'text'
        }
        return name
    }
    return (
        <>
            <label htmlFor={name}>{name}
                <input type={chechName()} name={name} id={name} value={value} onChange={onChange} required />
            </label>
        </>
    )
}

export default Input
