function Input({ name, value, onChange }) {

    return (
        <>
            <label htmlFor={name}>{name}</label>
            <input type="text" name={name} id={name} value={value} onChange={onChange} />
        </>
    )
}

export default Input
