function Input({ name, value, onChange }) {
    const chechName = () => {
    }
    return (
        <>
            <label htmlFor={name}>{name}
                <input type={name || 'text'} name={name} id={name} value={value} onChange={onChange} required />
            </label>
        </>
    )
}

export default Input
